# RI Creative Agency — Production Backend Architecture Specification
**Author:** Rafiqul Islam (Founder & Lead Architect)  
**Document Version:** 1.0.0  
**Project:** RI Creative Agency (14-Business-Portfolio)

---

## 1. Executive Summary
This document specifies the enterprise backend architecture to support RI Creative Agency's client acquisition, visual 11-stage project milestone tracking, automated quote estimations, revision handling, asset deliveries, and payment integrations.

While the frontend prototype operates with high interactivity backed by `js/api-service.js` and `localStorage`, this specification details the full production deployment blueprint on Node.js / Express (or Python FastAPI) with PostgreSQL / Cloud Firestore, Redis cache, bKash / Nagad / SSLCommerz payment gateways, and SendGrid / Nodemailer email notifications.

---

## 2. System Architecture & Topology

```
                  ┌───────────────────────────────────────────────┐
                  │          Client / Browser Frontend            │
                  │   HTML5 / Modern CSS / Vanilla JS / WebP      │
                  └───────────────────────┬───────────────────────┘
                                          │ HTTPS REST / WebSocket
                                          ▼
                  ┌───────────────────────────────────────────────┐
                  │       API Gateway / Reverse Proxy (Nginx)     │
                  │       Rate Limiting, SSL Termination, WAF     │
                  └───────────────────────┬───────────────────────┘
                                          │
                    ┌─────────────────────┴─────────────────────┐
                    ▼                                           ▼
┌───────────────────────────────────────┐   ┌───────────────────────────────────────┐
│         Core Node.js/Express API      │   │          Background Workers           │
│  - /api/v1/orders                     │   │  - Email Notifications (Nodemailer)   │
│  - /api/v1/quotes                     │   │  - WhatsApp Webhooks                  │
│  - /api/v1/revisions                  │   │  - Courier API Sync (Steadfast/RedX)  │
│  - /api/v1/payments (bKash/Nagad/SSL) │   │  - File Processing / Cloudinary CDN   │
└───────────────────┬───────────────────┘   └───────────────────┬───────────────────┘
                    │                                           │
                    ├─────────────────────┬─────────────────────┤
                    ▼                     ▼                     ▼
┌───────────────────────────┐ ┌──────────────────────┐ ┌───────────────────────────┐
│     PostgreSQL / Prisma   │ │    Redis Cache / MQ  │ │ AWS S3 / Cloudflare R2    │
│  - Clients, Orders, Logs  │ │  - Session Tokens    │ │  - High-res Vector ZIPs   │
│  - Stages, Quotes, Reviews│ │  - Job Queues (Bull) │ │  - 300 DPI Print PDFs     │
└───────────────────────────┘ └──────────────────────┘ └───────────────────────────┘
```

---

## 3. Database Schemas (PostgreSQL / Relational SQL)

### 3.1 Clients Table
```sql
CREATE TABLE clients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(120) NOT NULL,
    email VARCHAR(150) UNIQUE,
    phone VARCHAR(30) NOT NULL, -- e.g. +8801310824987
    company_name VARCHAR(150),
    preferred_channel VARCHAR(20) DEFAULT 'whatsapp', -- 'whatsapp' | 'call' | 'email'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 3.2 Orders & 11-Stage Pipeline Table
```sql
CREATE TABLE orders (
    id VARCHAR(30) PRIMARY KEY, -- e.g. 'RI-1001'
    client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
    service_slug VARCHAR(80) NOT NULL, -- e.g. 'creative-design', 'amazon-kdp'
    service_title VARCHAR(150) NOT NULL,
    package_tier VARCHAR(50) NOT NULL, -- 'BASIC' | 'STANDARD' | 'PREMIUM' | 'CUSTOM'
    current_stage INTEGER NOT NULL DEFAULT 1 CHECK (current_stage BETWEEN 1 AND 11),
    current_stage_name VARCHAR(100) NOT NULL,
    estimated_delivery_date DATE,
    assigned_lead VARCHAR(100) DEFAULT 'Rafiqul Islam',
    price_bdt NUMERIC(10, 2) NOT NULL,
    deposit_paid NUMERIC(10, 2) DEFAULT 0.00,
    revisions_allowed INTEGER DEFAULT 5,
    revisions_used INTEGER DEFAULT 0,
    status VARCHAR(30) DEFAULT 'IN_PROGRESS', -- 'PENDING' | 'IN_PROGRESS' | 'DELIVERED' | 'CANCELLED'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 3.3 Milestone Stages Audit Log
```sql
CREATE TABLE order_milestones (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id VARCHAR(30) REFERENCES orders(id) ON DELETE CASCADE,
    stage_number INTEGER NOT NULL,
    stage_name VARCHAR(100) NOT NULL,
    notes TEXT,
    completed_at TIMESTAMP WITH TIME ZONE,
    updated_by VARCHAR(100) DEFAULT 'Rafiqul Islam'
);
```

### 3.4 Deliverables & Asset Handover
```sql
CREATE TABLE deliverables (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id VARCHAR(30) REFERENCES orders(id) ON DELETE CASCADE,
    file_title VARCHAR(150) NOT NULL,
    file_url TEXT NOT NULL, -- Cloudflare R2 / AWS S3 presigned URL
    file_format VARCHAR(20) NOT NULL, -- 'ZIP', 'AI', 'PSD', 'PDF', 'PNG', 'SVG'
    file_size_mb NUMERIC(6, 2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 3.5 Courier Coordination (Third-Party Logistics)
```sql
CREATE TABLE courier_shipments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id VARCHAR(30) REFERENCES orders(id) ON DELETE CASCADE,
    partner_name VARCHAR(50) NOT NULL, -- 'Steadfast' | 'RedX' | 'Pathao'
    tracking_code VARCHAR(100) NOT NULL,
    shipping_address TEXT NOT NULL,
    recipient_phone VARCHAR(30) NOT NULL,
    courier_status VARCHAR(50) DEFAULT 'Handed Over to Courier',
    dispatched_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 3.6 Quotes & Leads Table
```sql
CREATE TABLE quote_inquiries (
    id VARCHAR(30) PRIMARY KEY, -- e.g. 'QT-4092'
    client_name VARCHAR(120) NOT NULL,
    client_email VARCHAR(150),
    client_phone VARCHAR(30) NOT NULL,
    service_category VARCHAR(100) NOT NULL,
    package_tier VARCHAR(50),
    budget_range VARCHAR(50),
    timeline_preference VARCHAR(50),
    project_details TEXT NOT NULL,
    status VARCHAR(30) DEFAULT 'NEW', -- 'NEW' | 'CONTACTED' | 'CONVERTED' | 'ARCHIVED'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

---

## 4. Production REST API Endpoints

### 4.1 Orders & Visual Tracking
- `GET /api/v1/orders/:id`  
  Retrieves order details, current 11-stage progress, deliverables, revision balance, and courier logistics.
- `POST /api/v1/orders`  
  Creates a new client project (invoked via `start-project.html`). Emits email and WhatsApp confirmation.
- `PATCH /api/v1/orders/:id/stage`  
  Admin endpoint for Rafiqul Islam to advance stages (1 through 11). Broadcasts update notifications.
- `POST /api/v1/orders/:id/deliverables`  
  Uploads or links final vector source files.
- `POST /api/v1/orders/:id/revisions`  
  Submits client modification notes and increments `revisions_used`.

### 4.2 Free Quotes & Lead Magnets
- `POST /api/v1/quotes`  
  Submits a project brief. Triggers 1-2 hour review SLA notification.
- `POST /api/v1/leads/download`  
  Captures client name/email for free PDF checklists and returns secure download URL.

### 4.3 Verified Client Reviews
- `GET /api/v1/reviews`  
  Returns approved 5-star testimonials.
- `POST /api/v1/reviews`  
  Submits a verified review for moderation.

---

## 5. Payment Gateway Integration Architecture

In Bangladesh and globally, RI Creative Agency accepts payments through **bKash Merchant API**, **Nagad**, and **SSLCommerz** (for Visa/Mastercard/Amex/Internet Banking):

### Payment Sequence:
1. **Invoice Generation**: When project scope is locked (Stage 3), server generates an invoice ID.
2. **Initiate Payment**: Frontend calls `POST /api/v1/payments/bkash/create`.
3. **Execute Payment**: Server validates credentials, generates bKash checkout URL.
4. **Callback & Verification**: bKash Webhook posts to `/api/v1/payments/bkash/callback`. Server calls `/tokenized/checkout/execute` and updates `orders.deposit_paid`.
5. **Stage Progression**: Upon verified 50% deposit or full payment, order automatically advances to Stage 4 (Research & Strategy).

---

## 6. Automated Notification & Email Templates

Automated triggers via SendGrid / Nodemailer with luxury HTML formatting:

1. **Order Confirmation Email**:
   - Subject: `[RI Creative Agency] Order Confirmed: #{{order_id}} — Next Steps & Live Tracking`
   - Content: Order summary, client portal login, expected delivery date, direct WhatsApp link to Rafiqul Islam.
2. **Milestone Stage Advanced Email**:
   - Subject: `[Update] Your Project #{{order_id}} has reached Stage {{stage_number}}: {{stage_name}}`
   - Content: Stage details, screenshot/preview links, review action button.
3. **Final Delivery Handover Email**:
   - Subject: `[Deliverables Ready] #{{order_id}} Vector & High-Res Source Assets Handover`
   - Content: Cloud download link, commercial usage license confirmation, review link.
