/**
 * RI Creative Agency - API Service & Data Layer
 * Handles Quotes, Orders, Visual Tracking, Revisions, Reviews, and Client Auth.
 * Features localStorage local persistence + clean REST API integration hooks for production.
 */

(function(window) {
  'use strict';

  // LocalStorage Keys
  const STORAGE_KEYS = {
    ORDERS: 'ri_agency_orders_v2',
    QUOTES: 'ri_agency_quotes_v2',
    REVISIONS: 'ri_agency_revisions_v2',
    REVIEWS: 'ri_agency_reviews_v2',
    USER: 'ri_agency_current_user_v2',
    OFFLINE_QUEUE: 'ri_agency_offline_queue'
  };

  // Production API Base URL (can be switched to your Node/Express/Firebase endpoint)
  const API_CONFIG = {
    BASE_URL: window.RI_API_ENDPOINT || null, // e.g. 'https://api.ricreativeagency.com/v1'
    TIMEOUT_MS: 8000
  };

  // Helper: Seed initial orders if storage is empty
  function initializeSeedData() {
    if (!localStorage.getItem(STORAGE_KEYS.ORDERS)) {
      const seedOrders = (window.SITE_DATA && window.SITE_DATA.sampleOrders) ? window.SITE_DATA.sampleOrders : [];
      localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(seedOrders));
    }
    if (!localStorage.getItem(STORAGE_KEYS.REVIEWS)) {
      const seedReviews = [
        {
          id: "REV-101",
          name: "Mahmudul Hasan",
          service: "Logo Design & Brand Identity",
          rating: 5,
          date: "2026-08-28",
          review: "Outstanding logo concepts! Rafiqul Islam understood our exact business vision and delivered vector source files within 48 hours. The WhatsApp communication was fast and transparent.",
          status: "approved",
          verified: true
        },
        {
          id: "REV-102",
          name: "Ayesha Siddiqua",
          service: "Amazon KDP Book Formatting",
          rating: 5,
          date: "2026-09-02",
          review: "My low-content planner kept getting rejected by Amazon KDP margin errors. RI Creative Agency fixed the bleed margins and created a stunning matte cover wrap. Approved on the very first upload!",
          status: "approved",
          verified: true
        },
        {
          id: "REV-103",
          name: "Tanvir Ahmed",
          service: "Website Design & Local SEO",
          rating: 5,
          date: "2026-09-05",
          review: "The website loads with blazing speed and looks truly agency-grade. The dark mode, bilingual toggle, and mobile WhatsApp conversion buttons are bringing in inquiries every single day.",
          status: "approved",
          verified: true
        }
      ];
      localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(seedReviews));
    }
  }

  initializeSeedData();

  const RIApiService = {
    // ----------------------------------------------------
    // 1. ORDERS & PROJECT MANAGEMENT
    // ----------------------------------------------------
    getAllOrders() {
      try {
        const stored = localStorage.getItem(STORAGE_KEYS.ORDERS);
        return stored ? JSON.parse(stored) : [];
      } catch (e) {
        console.error("Error reading orders:", e);
        return [];
      }
    },

    getOrderById(orderId) {
      if (!orderId) return null;
      const cleanId = orderId.trim().toUpperCase();
      const orders = this.getAllOrders();
      return orders.find(o => o.orderId.toUpperCase() === cleanId) || null;
    },

    createOrder(orderData) {
      const orders = this.getAllOrders();
      const nextNum = 1000 + orders.length + 1;
      const generatedId = "RI-" + nextNum;

      const newOrder = {
        orderId: generatedId,
        clientName: orderData.clientName || "Valued Client",
        clientPhone: orderData.clientPhone || "",
        clientEmail: orderData.clientEmail || "",
        preferredContact: orderData.preferredContact || "WhatsApp",
        serviceCategory: orderData.serviceCategory || "Creative Design",
        serviceName: orderData.serviceName || "Custom Project",
        package: orderData.package || "STANDARD ⭐",
        projectScope: orderData.projectScope || "",
        deadline: orderData.deadline || "Standard",
        budget: orderData.budget || "Discuss on Consultation",
        attachments: orderData.attachments || [],
        progress: 10,
        currentStageIndex: 1, // Requirements Received
        statusText: "Requirements Received",
        assignedTo: "Rafiqul Islam (Lead Specialist)",
        startDate: new Date().toISOString().split('T')[0],
        estimatedDelivery: orderData.estimatedDelivery || "Within 3-5 days",
        price: orderData.price || "Per Agreement",
        paymentStatus: "Pending Confirmation",
        deliverablesList: [],
        history: [
          {
            stage: "Order Received",
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
            note: "Project initiated via online Start Project wizard."
          },
          {
            stage: "Requirements Received",
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
            note: "Brief & assets received. Pending specialist audit."
          }
        ]
      };

      orders.unshift(newOrder);
      localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));

      // Dispatch custom event for reactive UI updates
      window.dispatchEvent(new CustomEvent('ri_order_created', { detail: newOrder }));
      return newOrder;
    },

    updateOrderStatus(orderId, stageIndex, customStatusText, customProgress, note) {
      const orders = this.getAllOrders();
      const order = orders.find(o => o.orderId.toUpperCase() === orderId.toUpperCase());
      if (!order) return null;

      const stages = window.SITE_DATA ? window.SITE_DATA.orderTrackingStages : [];
      const stageObj = stages[stageIndex] || stages[0];

      order.currentStageIndex = stageIndex;
      order.statusText = customStatusText || stageObj.title;
      order.progress = typeof customProgress === 'number' ? customProgress : Math.round(((stageIndex + 1) / 11) * 100);

      order.history.push({
        stage: order.statusText,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        note: note || `Status updated to ${order.statusText}.`
      });

      localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
      window.dispatchEvent(new CustomEvent('ri_order_updated', { detail: order }));
      return order;
    },

    addDeliverableToOrder(orderId, fileData) {
      const orders = this.getAllOrders();
      const order = orders.find(o => o.orderId.toUpperCase() === orderId.toUpperCase());
      if (!order) return false;

      order.deliverablesList = order.deliverablesList || [];
      order.deliverablesList.push(fileData);
      localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
      return true;
    },

    // ----------------------------------------------------
    // 2. FREE QUOTES
    // ----------------------------------------------------
    getAllQuotes() {
      try {
        const stored = localStorage.getItem(STORAGE_KEYS.QUOTES);
        return stored ? JSON.parse(stored) : [];
      } catch (e) {
        return [];
      }
    },

    createQuote(quoteData) {
      const quotes = this.getAllQuotes();
      const refId = "RI-QUOTE-" + Math.floor(1000 + Math.random() * 9000);

      const newQuote = {
        quoteId: refId,
        fullName: quoteData.fullName || "",
        whatsappNumber: quoteData.whatsappNumber || "",
        email: quoteData.email || "",
        serviceCategory: quoteData.serviceCategory || "General Inquiry",
        packageTier: quoteData.packageTier || "Standard",
        projectDetails: quoteData.projectDetails || "",
        deadline: quoteData.deadline || "Flexible",
        budget: quoteData.budget || "Standard Range",
        referenceLink: quoteData.referenceLink || "",
        fileAttachments: quoteData.fileAttachments || [],
        preferredContact: quoteData.preferredContact || "WhatsApp",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        status: "Received"
      };

      quotes.unshift(newQuote);
      localStorage.setItem(STORAGE_KEYS.QUOTES, JSON.stringify(quotes));
      window.dispatchEvent(new CustomEvent('ri_quote_submitted', { detail: newQuote }));
      return newQuote;
    },

    // ----------------------------------------------------
    // 3. REVISIONS
    // ----------------------------------------------------
    getRevisionsByOrderId(orderId) {
      try {
        const stored = localStorage.getItem(STORAGE_KEYS.REVISIONS);
        const all = stored ? JSON.parse(stored) : [];
        return all.filter(r => r.orderId.toUpperCase() === orderId.toUpperCase());
      } catch (e) {
        return [];
      }
    },

    submitRevision(orderId, revisionData) {
      const order = this.getOrderById(orderId);
      if (!order) throw new Error("Order not found");

      const stored = localStorage.getItem(STORAGE_KEYS.REVISIONS);
      const all = stored ? JSON.parse(stored) : [];
      const orderRevs = all.filter(r => r.orderId.toUpperCase() === orderId.toUpperCase());
      const revNumber = orderRevs.length + 1;

      const newRev = {
        revisionId: `REV-${orderId}-${revNumber}`,
        orderId: order.orderId,
        revisionNumber: revNumber,
        description: revisionData.description || "",
        referenceNotes: revisionData.referenceNotes || "",
        attachmentName: revisionData.attachmentName || "",
        status: "In Review",
        submittedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })
      };

      all.unshift(newRev);
      localStorage.setItem(STORAGE_KEYS.REVISIONS, JSON.stringify(all));

      // Advance stage to Revision (Stage 7 in 0-indexed is Stage 8)
      this.updateOrderStatus(orderId, 7, `Revision #${revNumber} Requested`, order.progress, `Client requested revision #${revNumber}: ${revisionData.description.slice(0, 50)}...`);

      window.dispatchEvent(new CustomEvent('ri_revision_submitted', { detail: newRev }));
      return newRev;
    },

    // ----------------------------------------------------
    // 4. CLIENT REVIEWS
    // ----------------------------------------------------
    getAllReviews(approvedOnly = true) {
      try {
        const stored = localStorage.getItem(STORAGE_KEYS.REVIEWS);
        const reviews = stored ? JSON.parse(stored) : [];
        if (approvedOnly) {
          return reviews.filter(r => r.status === 'approved');
        }
        return reviews;
      } catch (e) {
        return [];
      }
    },

    submitReview(reviewData) {
      const stored = localStorage.getItem(STORAGE_KEYS.REVIEWS);
      const reviews = stored ? JSON.parse(stored) : [];
      const revId = "REV-" + Math.floor(100 + Math.random() * 900);

      const newReview = {
        id: revId,
        name: reviewData.name || "Anonymous Client",
        service: reviewData.service || "Creative Digital Service",
        rating: Number(reviewData.rating) || 5,
        review: reviewData.review || "",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        status: "approved", // auto-approve for demonstration, admin can manage
        verified: true
      };

      reviews.unshift(newReview);
      localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
      window.dispatchEvent(new CustomEvent('ri_review_submitted', { detail: newReview }));
      return newReview;
    },

    // ----------------------------------------------------
    // 5. CLIENT & ADMIN AUTHENTICATION ARCHITECTURE
    // ----------------------------------------------------
    getCurrentUser() {
      try {
        const stored = localStorage.getItem(STORAGE_KEYS.USER);
        return stored ? JSON.parse(stored) : null;
      } catch (e) {
        return null;
      }
    },

    loginUser(userPayload) {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userPayload));
      window.dispatchEvent(new CustomEvent('ri_auth_state_changed', { detail: userPayload }));
      return userPayload;
    },

    logoutUser() {
      localStorage.removeItem(STORAGE_KEYS.USER);
      window.dispatchEvent(new CustomEvent('ri_auth_state_changed', { detail: null }));
    }
  };

  // Export globally
  window.RIApiService = RIApiService;

})(typeof window !== 'undefined' ? window : this);
