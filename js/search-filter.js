/**
 * RI Creative Agency - Search, Filter & Interactive Form Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  initServiceSearchAndFilter();
  initPortfolioFilterAndModal();
  initContactForm();
});

/**
 * 1. Live Search and Category Filter for Services
 */
function initServiceSearchAndFilter() {
  const searchInput = document.getElementById("service-search-input");
  const filterPills = document.querySelectorAll(".service-filter-pill");
  const serviceCards = document.querySelectorAll(".service-card-item");

  if (!serviceCards.length) return;

  let activeCategory = "all";
  let searchQuery = "";

  function filterServices() {
    serviceCards.forEach(card => {
      const cardCategory = (card.getAttribute("data-category") || "").toLowerCase();
      const cardText = (card.textContent || "").toLowerCase();

      const matchesCategory = activeCategory === "all" || cardCategory === activeCategory.toLowerCase();
      const matchesSearch = searchQuery === "" || cardText.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });

    const noResultsMsg = document.getElementById("no-services-found");
    if (noResultsMsg) {
      const visibleCards = Array.from(serviceCards).filter(c => c.style.display !== "none");
      noResultsMsg.style.display = visibleCards.length === 0 ? "block" : "none";
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
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
}

/**
 * 2. Portfolio Category Filtering and Detail Modal Viewer
 */
function initPortfolioFilterAndModal() {
  const filterPills = document.querySelectorAll(".portfolio-filter-pill");
  const portfolioCards = document.querySelectorAll(".portfolio-card-item");
  const modalOverlay = document.getElementById("portfolio-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  // Category Filtering
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const category = (pill.getAttribute("data-category") || "all").toLowerCase();

      portfolioCards.forEach(card => {
        const itemCat = (card.getAttribute("data-category") || "").toLowerCase();
        if (category === "all" || itemCat === category) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Modal Detail View
  const viewDetailBtns = document.querySelectorAll(".btn-view-portfolio");
  viewDetailBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
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

/**
 * 3. Interactive Contact Form with WhatsApp Direct Generator
 */
function initContactForm() {
  const contactForm = document.getElementById("agency-contact-form");
  const successAlert = document.getElementById("form-success-alert");
  const whatsappSendBtn = document.getElementById("btn-send-whatsapp-form");

  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
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

    // Build formatted message for WhatsApp
    const waText = `Hello RI Creative Agency,

My name is: ${name}
Phone/WhatsApp: ${phone}
Email: ${email || "Not provided"}
Interested Service: ${serviceCategory}
Budget Range: ${budget || "To be discussed"}

Project Details:
${message || "I would like to discuss my project."}`;

    // Display success confirmation message
    if (successAlert) {
      successAlert.style.display = "block";
      successAlert.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    // Prepare direct WhatsApp button action
    if (whatsappSendBtn && window.SITE_DATA) {
      whatsappSendBtn.href = window.SITE_DATA.getWhatsAppUrl(waText);
    }

    // Automatically open WhatsApp in new tab after 1 second for user convenience
    setTimeout(() => {
      if (window.SITE_DATA) {
        window.open(window.SITE_DATA.getWhatsAppUrl(waText), "_blank", "noopener,noreferrer");
      }
    }, 800);
  });
}
