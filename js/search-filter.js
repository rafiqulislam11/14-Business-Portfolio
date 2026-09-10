/**
 * RI Creative Agency - Search, Filter & Interactive Dynamic Directory
 * Features Smart Natural Language Intent Search (Point 22), Category Filters,
 * Dynamic Service Card Rendering, and Portfolio Filter Modal.
 */

document.addEventListener("DOMContentLoaded", () => {
  initServiceDirectoryAndSmartSearch();
  initPortfolioDirectoryAndFilter();
  initContactForm();
});

/**
 * Intent Engine for Natural Language Search (Point 22)
 */
const INTENT_RULES = [
  {
    patterns: [/logo/i, /clothing/i, /fashion/i, /brand/i, /identity/i, /t-shirt/i, /apparel/i],
    matchedKeywords: ['logo', 'brand identity', 'business card', 'social media kit', 'stationery', 'vector']
  },
  {
    patterns: [/cv/i, /resume/i, /job/i, /interview/i, /career/i, /cover letter/i, /applicant/i],
    matchedKeywords: ['cv', 'resume', 'career', 'cover letter', 'linkedin', 'job application']
  },
  {
    patterns: [/book/i, /kdp/i, /amazon/i, /publish/i, /kindle/i, /journal/i, /planner/i, /author/i],
    matchedKeywords: ['amazon kdp', 'book cover', 'manuscript formatting', 'paperback', 'kindle', 'isbn']
  },
  {
    patterns: [/website/i, /web/i, /seo/i, /e-commerce/i, /ecommerce/i, /store/i, /online shop/i],
    matchedKeywords: ['website', 'seo', 'wordpress', 'web design', 'landing page', 'e-commerce']
  },
  {
    patterns: [/photo/i, /passport/i, /picture/i, /retouch/i, /print/i, /banner/i, /flyer/i],
    matchedKeywords: ['photo studio', 'passport photo', 'printing', 'retouching', 'background removal', 'flyer']
  },
  {
    patterns: [/fiverr/i, /upwork/i, /gig/i, /freelance/i, /proposal/i, /marketplace/i],
    matchedKeywords: ['marketplace', 'fiverr', 'upwork', 'gig seo', 'freelance proposal', 'profile setup']
  },
  {
    patterns: [/data entry/i, /excel/i, /pdf/i, /word/i, /form filling/i, /research/i],
    matchedKeywords: ['data entry', 'excel', 'pdf conversion', 'web research', 'document formatting']
  }
];

/**
 * 1. Live Search, Smart Intent Matching, and Category Filter for Services
 */
function initServiceDirectoryAndSmartSearch() {
  const container = document.getElementById("services-grid-container");
  const searchInput = document.getElementById("service-search-input");
  const filterPills = document.querySelectorAll(".service-filter-pill");
  const noResultsMsg = document.getElementById("no-services-found");

  if (!container && !document.querySelectorAll(".service-card-item").length) return;

  // Render services dynamically if container is present and empty
  if (container && container.children.length === 0 && window.SITE_DATA && window.SITE_DATA.services) {
    renderServicesCards(container, window.SITE_DATA.services);
  }

  const serviceCards = document.querySelectorAll(".service-card-item");
  if (!serviceCards.length) return;

  let activeCategory = "all";
  let searchQuery = "";

  function filterServices() {
    let matchCount = 0;
    const query = searchQuery.trim().toLowerCase();

    // Check if query triggers an intent rule
    let intentKeywords = [];
    if (query) {
      for (const rule of INTENT_RULES) {
        if (rule.patterns.some(p => p.test(query))) {
          intentKeywords.push(...rule.matchedKeywords);
        }
      }
    }

    serviceCards.forEach(card => {
      const cardCategory = (card.getAttribute("data-category") || "").toLowerCase();
      const cardText = (card.textContent || "").toLowerCase();
      const cardKeywords = (card.getAttribute("data-keywords") || "").toLowerCase();

      // Category matching
      const matchesCategory = activeCategory === "all" ||
                              cardCategory === activeCategory.toLowerCase() ||
                              card.classList.contains(`cat-${activeCategory.toLowerCase()}`);

      // Search matching (Direct text or Smart Intent expansion)
      let matchesSearch = query === "";
      if (query) {
        if (cardText.includes(query) || cardKeywords.includes(query)) {
          matchesSearch = true;
        } else if (intentKeywords.length > 0) {
          matchesSearch = intentKeywords.some(kw => cardText.includes(kw) || cardKeywords.includes(kw));
        }
      }

      if (matchesCategory && matchesSearch) {
        card.style.display = "";
        matchCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (noResultsMsg) {
      noResultsMsg.style.display = matchCount === 0 ? "block" : "none";
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      filterServices();
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.getAttribute("data-filter") || "all";
      filterServices();
    });
  });

  // Check URL query parameters (e.g. services.html?q=logo or ?cat=design)
  const urlParams = new URLSearchParams(window.location.search);
  const qParam = urlParams.get('q');
  const catParam = urlParams.get('cat');
  if (qParam && searchInput) {
    searchInput.value = qParam;
    searchQuery = qParam;
    filterServices();
  }
  if (catParam) {
    const matchingPill = document.querySelector(`.service-filter-pill[data-filter="${catParam}"]`);
    if (matchingPill) matchingPill.click();
  }
}

/**
 * Render service cards in services.html
 */
function renderServicesCards(container, services) {
  const pricingLookup = {
    "creative-design": { price: "৳1,500 / $25", time: "24-48 Hours", rev: "Unlimited" },
    "social-media": { price: "৳2,500 / $35", time: "2-3 Days", rev: "Included" },
    "website-seo": { price: "৳8,000 / $110", time: "5-7 Days", rev: "Priority QA" },
    "amazon-kdp": { price: "৳3,000 / $40", time: "2-4 Days", rev: "KDP Approval" },
    "career-services": { price: "৳800 / $15", time: "24 Hours", rev: "Free Edits" },
    "marketplace": { price: "৳2,000 / $30", time: "2-3 Days", rev: "5 Gigs / Bio" },
    "passive-income": { price: "৳10,000 / $130", time: "7-10 Days", rev: "Full Setup" },
    "print-photo": { price: "৳200 / $5", time: "Instant / 24h", rev: "Proof Checked" },
    "job-applications": { price: "৳300 / $5", time: "Instant / Same Day", rev: "Verified" },
    "courier-support": { price: "Partner Rates", time: "Same Day Dispatch", rev: "Tracking" },
    "training-consultation": { price: "৳1,000 / $15", time: "1-on-1 Hourly", rev: "Practical" }
  };

  container.innerHTML = services.map(s => {
    const meta = pricingLookup[s.id] || { price: "Custom Quote", time: "2-4 Days", rev: "Included" };
    const waUrl = window.SITE_DATA ? window.SITE_DATA.getWhatsAppUrl(s.whatsappMsg) : `https://wa.me/8801310824987?text=${encodeURIComponent(s.whatsappMsg || 'Hello')}`;
    const quoteUrl = `quote.html?service=${encodeURIComponent(s.title)}`;
    const startUrl = `start-project.html?service=${encodeURIComponent(s.title)}`;
    const subtags = (s.subServices || []).slice(0, 5).map(sub => `<span class="subservice-tag">${sub}</span>`).join("");

    return `
      <div class="card service-card service-card-item cat-${(s.category || '').toLowerCase()}" data-category="${(s.category || '').toLowerCase()}" data-keywords="${(s.subServices || []).join(' ')} ${s.title}">
        <div class="service-card-header">
          <div class="service-icon-box">${s.icon}</div>
          <span class="badge badge-primary">${s.badge || s.category}</span>
        </div>
        
        <h3 class="service-card-title">${s.title}</h3>
        <p class="service-card-desc">${s.shortDescription}</p>

        <div class="service-meta-strip" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 0.85rem; font-size: 0.78rem;">
          <span class="badge badge-primary" style="background: rgba(79, 70, 229, 0.1);">💵 From ${meta.price}</span>
          <span class="badge badge-primary" style="background: rgba(6, 182, 212, 0.1); color: var(--brand-secondary);">⏱️ ${meta.time}</span>
          <span class="badge badge-whatsapp" style="font-size: 0.75rem;">✓ ${meta.rev}</span>
        </div>

        <div class="subservice-list" style="margin-bottom: 1.25rem;">
          ${subtags}
          <span class="subservice-tag">+${Math.max(0, (s.subServices || []).length - 5)} More</span>
        </div>

        <div class="service-actions-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.5rem;">
          <a href="${quoteUrl}" class="btn btn-secondary btn-sm" style="font-size: 0.8rem; text-align: center;">Get Free Quote</a>
          <a href="${startUrl}" class="btn btn-primary btn-sm" style="font-size: 0.8rem; text-align: center;">Start Project</a>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem; padding-top: 0.6rem; border-top: 1px solid var(--border-subtle);">
          <a href="${s.slug}" style="font-size: 0.82rem; color: var(--brand-primary); font-weight: 700; text-decoration: none;">View Full Details →</a>
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" style="font-size: 0.78rem; padding: 0.3rem 0.6rem;">
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * 2. Portfolio Gallery Dynamic Rendering, Category Filtering and Detail Modal Viewer
 */
function initPortfolioDirectoryAndFilter() {
  const container = document.getElementById("portfolio-grid-container");
  const filterPills = document.querySelectorAll(".portfolio-filter-pill");
  const modalOverlay = document.getElementById("portfolio-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  if (!container && !document.querySelectorAll(".portfolio-card-item").length) return;

  // Render portfolio items if container is empty
  if (container && container.children.length === 0 && window.SITE_DATA && window.SITE_DATA.portfolio) {
    renderPortfolioCards(container, window.SITE_DATA.portfolio);
  }

  const portfolioCards = document.querySelectorAll(".portfolio-card-item");

  // Category Filtering
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const category = (pill.getAttribute("data-category") || "all").toLowerCase();

      portfolioCards.forEach(card => {
        const itemCat = (card.getAttribute("data-category") || "").toLowerCase();
        if (category === "all" || itemCat === category || card.classList.contains(`cat-${category}`)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Modal Detail View Trigger
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-view-portfolio");
    if (!btn) return;
    e.preventDefault();

    const projectId = btn.getAttribute("data-project-id");
    if (!window.SITE_DATA || !modalOverlay) return;

    const project = window.SITE_DATA.portfolio.find(p => p.id === projectId);
    if (!project) return;

    // Populate modal elements
    const modalTitle = document.getElementById("modal-project-title");
    const modalCategory = document.getElementById("modal-project-category");
    const modalType = document.getElementById("modal-project-type");
    const modalDesc = document.getElementById("modal-project-desc");
    const modalDeliverables = document.getElementById("modal-project-deliverables");
    const modalTags = document.getElementById("modal-project-tags");
    const modalWhatsAppBtn = document.getElementById("modal-whatsapp-btn");

    if (modalTitle) modalTitle.textContent = project.title;
    if (modalCategory) modalCategory.textContent = project.category;
    if (modalType) modalType.textContent = project.type;
    if (modalDesc) modalDesc.textContent = project.description;

    if (modalDeliverables) {
      modalDeliverables.innerHTML = project.deliverables.map(d => `<li>✓ ${d}</li>`).join("");
    }

    if (modalTags) {
      modalTags.innerHTML = project.tags.map(t => `<span class="badge badge-primary">${t}</span>`).join("");
    }

    if (modalWhatsAppBtn) {
      const url = window.SITE_DATA.getWhatsAppUrl(project.whatsappMsg);
      modalWhatsAppBtn.href = url;
    }

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });
}

function renderPortfolioCards(container, portfolio) {
  container.innerHTML = portfolio.map(p => {
    const startProjectUrl = `start-project.html?service=${encodeURIComponent(p.category)}&ref=${encodeURIComponent(p.title)}`;
    return `
      <div class="card portfolio-card portfolio-card-item cat-${(p.categoryKey || '').toLowerCase()}" data-category="${(p.categoryKey || '').toLowerCase()}">
        <div class="portfolio-thumb-wrap" style="position: relative; overflow: hidden; border-radius: var(--radius-md) var(--radius-md) 0 0; aspect-ratio: 16/10; background: var(--bg-secondary);">
          <img src="${p.image}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform var(--transition-normal);">
          <span class="badge badge-primary" style="position: absolute; top: 12px; left: 12px;">${p.category}</span>
        </div>
        <div class="portfolio-card-body" style="padding: 1.25rem;">
          <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--brand-primary); font-weight: 700; margin-bottom: 0.35rem;">${p.type}</div>
          <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem; line-height: 1.35;">${p.title}</h3>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.5;">${p.description}</p>
          
          <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 1.25rem;">
            ${(p.tags || []).slice(0, 3).map(t => `<span class="badge badge-secondary" style="font-size: 0.72rem;">${t}</span>`).join("")}
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
            <button class="btn btn-secondary btn-sm btn-view-portfolio" data-project-id="${p.id}">View Details</button>
            <a href="${startProjectUrl}" class="btn btn-primary btn-sm" style="text-align: center;">Start Similar</a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * 3. Interactive Contact Form with WhatsApp Direct Generator
 */
function initContactForm() {
  const contactForm = document.getElementById("agency-contact-form");
  const successAlert = document.getElementById("form-success-alert");
  const whatsappSendBtn = document.getElementById("btn-send-whatsapp-form");
  const submitBtn = contactForm ? contactForm.querySelector("button[type='submit']") : null;

  if (!contactForm) return;

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name")?.value.trim() || "";
    const email = document.getElementById("contact-email")?.value.trim() || "";
    const phone = document.getElementById("contact-phone")?.value.trim() || "";
    const serviceCategory = document.getElementById("contact-service-category")?.value || "";
    const budget = document.getElementById("contact-budget")?.value || "";
    const message = document.getElementById("contact-message")?.value.trim() || "";

    if (!name || !phone || !serviceCategory) {
      alert("Please fill in your Name, Phone/WhatsApp number, and select a Service Category.");
      return;
    }

    const originalBtnHtml = submitBtn ? submitBtn.innerHTML : "Submit";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>⏳ Sending Email to Founder...</span>`;
    }

    try {
      let result;
      if (window.EmailService) {
        result = await window.EmailService.sendInquiry({
          name,
          phone,
          email,
          service: serviceCategory,
          budget,
          message
        });
      } else {
        result = {
          refId: "RI-" + Math.floor(100000 + Math.random() * 900000),
          emailSent: false,
          data: { name, phone, email, service: serviceCategory, budget, message }
        };
      }

      // Show interactive confirmation modal
      if (window.EmailService && typeof window.EmailService.showConfirmationModal === "function") {
        window.EmailService.showConfirmationModal(result);
      }

      // Display in-page success alert
      if (successAlert) {
        successAlert.innerHTML = `
          <strong style="color: #10b981;">✓ Inquiry Logged (Ref: ${result.refId})</strong>
          <p style="margin: 0.35rem 0 0; font-size: 0.88rem; color: var(--text-secondary);">
            Email formatted for <strong>rafiqulislam.globalwork@gmail.com</strong>. We will review and contact you shortly.
          </p>
        `;
        successAlert.style.display = "block";
        successAlert.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }

      // Prepare direct WhatsApp button action
      if (whatsappSendBtn) {
        whatsappSendBtn.href = result.whatsAppUrl || "#";
      }

      contactForm.reset();
    } catch (err) {
      console.error("Error submitting contact inquiry:", err);
      alert("Something went wrong while submitting. Please contact directly via WhatsApp: 01310-824987");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }
    }
  });
}
