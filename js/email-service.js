/**
 * RI Creative Agency — Central Email & Inquiry Dispatcher Service
 * Single unified service for sending emails, tracking inquiries, and notifying Founder Rafiqul Islam.
 * Author: Rafiqul Islam (Founder & Lead Architect)
 */

(function(window) {
  'use strict';

  const EmailService = {
    config: {
      recipientEmail: 'rafiqulislam.globalwork@gmail.com',
      recipientName: 'Rafiqul Islam',
      agencyName: 'RI Creative Agency',
      phoneDisplay: '01310-824987',
      phoneClean: '8801310824987',
      backendUrl: 'http://localhost:5000/api/send-email',
      formSubmitEndpoint: 'https://formsubmit.co/ajax/rafiqulislam.globalwork@gmail.com'
    },

    /**
     * Send project inquiry or quote request via multiple fallback channels
     * @param {Object} data - { name, phone, email, service, packageTier, budget, timeline, message }
     * @returns {Promise<Object>} - Status and response details
     */
    async sendInquiry(data) {
      const refId = data.refId || ('RI-' + Math.floor(100000 + Math.random() * 900000));
      const timestamp = new Date().toLocaleString();

      const subject = `[Project Inquiry] ${data.service || 'Creative Solution'} - ${data.name} (Ref: ${refId})`;

      const formattedBody = `New Project Inquiry on RI Creative Agency:
==================================================
Reference ID : ${refId}
Timestamp    : ${timestamp}
Client Name  : ${data.name}
Phone/WA     : ${data.phone}
Client Email : ${data.email || 'Not provided'}
Service      : ${data.service || 'General Inquiry'}
Package Tier : ${data.packageTier || 'Standard'}
Budget Range : ${data.budget || 'To be discussed'}
Timeline     : ${data.timeline || 'Flexible'}

Project Details & Requirements:
${data.message || data.notes || 'No extra notes provided.'}
==================================================
Agency Recipient: ${this.config.recipientEmail}
WhatsApp Direct : https://wa.me/${this.config.phoneClean}`;

      // 1. Save to local RIApiService if loaded
      if (window.RIApiService && typeof window.RIApiService.createQuote === 'function') {
        try {
          window.RIApiService.createQuote({
            clientName: data.name,
            clientEmail: data.email,
            clientPhone: data.phone,
            serviceCategory: data.service,
            packageTier: data.packageTier,
            budgetRange: data.budget,
            timeline: data.timeline,
            projectDetails: data.message
          });
        } catch (e) {
          console.warn('RIApiService local store notice:', e);
        }
      }

      let emailSent = false;
      let deliveryMethod = 'direct';
      let serverResponse = null;

      // 2. Try Local / Cloud Backend API first (e.g. Node.js server)
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);

        const res = await fetch(this.config.backendUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            refId,
            ...data,
            subject,
            formattedBody
          }),
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const json = await res.json();
          if (json.success) {
            emailSent = true;
            deliveryMethod = 'backend';
            serverResponse = json;
          }
        }
      } catch (err) {
        // Backend not active on localhost:5000, fallback to FormSubmit.co
      }

      // 3. Try FormSubmit.co AJAX (Dispatches directly to rafiqulislam.globalwork@gmail.com)
      if (!emailSent) {
        try {
          const res = await fetch(this.config.formSubmitEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              _subject: subject,
              _template: 'table',
              _captcha: 'false',
              'Reference ID': refId,
              'Client Name': data.name,
              'Phone / WhatsApp': data.phone,
              'Client Email': data.email || 'Not provided',
              'Service Category': data.service || 'General',
              'Package Tier': data.packageTier || 'Standard',
              'Budget Range': data.budget || 'Flexible',
              'Timeline': data.timeline || 'Flexible',
              'Project Requirements': data.message || data.notes || 'N/A'
            })
          });

          if (res.ok) {
            const json = await res.json();
            if (json.success === 'true' || json.success === true) {
              emailSent = true;
              deliveryMethod = 'formsubmit';
              serverResponse = json;
            }
          }
        } catch (err) {
          console.warn('FormSubmit endpoint error:', err);
        }
      }

      // 4. Build Fallback & Direct Mailer URLs
      const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(this.config.recipientEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedBody)}`;
      const mailtoUrl = `mailto:${encodeURIComponent(this.config.recipientEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedBody)}`;
      const whatsAppUrl = `https://wa.me/${this.config.phoneClean}?text=${encodeURIComponent(`Hello Rafiqul Islam, I submitted inquiry #${refId}:\n- Name: ${data.name}\n- Service: ${data.service || 'General'}\n- Phone: ${data.phone}\n${data.email ? `- Email: ${data.email}\n` : ''}${data.message ? `- Details: ${data.message.slice(0, 100)}...` : ''}`)}`;

      return {
        success: true, // Inquiry is captured and ready
        emailSent,
        deliveryMethod,
        refId,
        subject,
        formattedBody,
        gmailWebUrl,
        mailtoUrl,
        whatsAppUrl,
        data
      };
    },

    /**
     * Display a rich, interactive confirmation modal with multi-channel options
     * @param {Object} result - Output from sendInquiry
     */
    showConfirmationModal(result) {
      // Remove any existing modal
      const existing = document.getElementById('email-inquiry-modal');
      if (existing) existing.remove();

      const modal = document.createElement('div');
      modal.id = 'email-inquiry-modal';
      modal.className = 'agency-modal-overlay active';
      modal.style.zIndex = '99999';

      const emailStatusHtml = result.emailSent
        ? `
          <div style="background: rgba(16, 185, 129, 0.12); border: 1.5px solid #10b981; border-radius: var(--radius-md, 8px); padding: 0.85rem 1rem; margin-bottom: 1.25rem; text-align: left;">
            <div style="display: flex; align-items: center; gap: 0.5rem; color: #059669; font-weight: 700; font-size: 0.95rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Email Dispatched to Founder!</span>
            </div>
            <p style="font-size: 0.82rem; color: var(--text-secondary, #475569); margin: 0.35rem 0 0;">
              Your inquiry has been formatted and sent to <strong>${this.config.recipientEmail}</strong>.
            </p>
          </div>
        `
        : `
          <div style="background: rgba(59, 130, 246, 0.1); border: 1.5px solid #3b82f6; border-radius: var(--radius-md, 8px); padding: 0.85rem 1rem; margin-bottom: 1.25rem; text-align: left;">
            <div style="display: flex; align-items: center; gap: 0.5rem; color: #2563eb; font-weight: 700; font-size: 0.95rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span>Inquiry Registered &amp; Ready to Send!</span>
            </div>
            <p style="font-size: 0.82rem; color: var(--text-secondary, #475569); margin: 0.35rem 0 0;">
              Inquiry saved with Reference ID <strong>${result.refId}</strong>. You can send it directly via Gmail in 1 click below:
            </p>
          </div>
        `;

      modal.innerHTML = `
        <div class="agency-modal-card" style="max-width: 520px; text-align: center; padding: 2rem 1.75rem; border-radius: var(--radius-lg, 12px); background: var(--bg-card, #ffffff); border: 1px solid var(--border-card, #e2e8f0); box-shadow: var(--shadow-xl, 0 20px 25px -5px rgba(0,0,0,0.1));">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: #ffffff; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; box-shadow: 0 8px 16px rgba(37,99,235,0.3);">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>

          <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-primary, #0f172a); margin-bottom: 0.35rem;">
            Project Inquiry Recorded
          </h3>
          <p style="font-size: 0.85rem; color: var(--text-muted, #64748b); margin-bottom: 1.25rem;">
            Reference ID: <strong style="font-family: monospace; color: var(--brand-primary, #2563eb); font-size: 0.95rem;">${result.refId}</strong>
          </p>

          ${emailStatusHtml}

          <!-- Quick Summary Card -->
          <div style="background: var(--bg-surface, #f8fafc); border-radius: var(--radius-md, 8px); padding: 0.75rem 1rem; font-size: 0.82rem; text-align: left; margin-bottom: 1.5rem; line-height: 1.6; border: 1px solid var(--border-subtle, #e2e8f0);">
            <div><strong>Client:</strong> ${result.data.name} (${result.data.phone})</div>
            <div><strong>Service:</strong> ${result.data.service || 'General Creative Solution'}</div>
            ${result.data.email ? `<div><strong>Email:</strong> ${result.data.email}</div>` : ''}
          </div>

          <!-- Action Buttons -->
          <div style="display: flex; flex-direction: column; gap: 0.65rem;">
            <a href="${result.gmailWebUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="justify-content: center; gap: 0.5rem; font-size: 0.9rem; padding: 0.75rem 1rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <span>Send / Open in Gmail Web</span>
            </a>

            <a href="${result.whatsAppUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="justify-content: center; gap: 0.5rem; font-size: 0.9rem; padding: 0.75rem 1rem;">
              <span>💬 Instant WhatsApp Connect (01310-824987)</span>
            </a>

            <div style="display: flex; gap: 0.5rem; margin-top: 0.25rem;">
              <a href="${result.mailtoUrl}" class="btn btn-secondary btn-sm" style="flex: 1; justify-content: center; font-size: 0.8rem;">
                <span>Default Mail App</span>
              </a>
              <button class="btn btn-secondary btn-sm" id="close-inquiry-modal-btn" style="flex: 1; justify-content: center; font-size: 0.8rem;">
                <span>Close Window</span>
              </button>
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      // Close handlers
      modal.querySelector('#close-inquiry-modal-btn')?.addEventListener('click', () => {
        modal.remove();
      });
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
      });
    }
  };

  window.EmailService = EmailService;
})(window);
