/**
 * RI Creative Agency - Core Application Logic
 * Dark/Light Mode, Mobile Navigation, WhatsApp Routing, and UI Interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initColorPaletteCustomizer();
  initFloatingQuickDock();
  initScrollHeader();
  initLiveClock();
  initLanguageSwitcher();
  initMobileNav();
  initMegaDropdown();
  initFaqAccordions();
  initWhatsAppLinks();
  initHeroCarousel();
  updateCurrentYear();
  initClickChomokEffect();
});

/**
 * 1. Dark / Light Mode with LocalStorage Persistence
 */
function initTheme() {
  const themeToggleBtns = document.querySelectorAll(".theme-toggle");
  const storedTheme = localStorage.getItem("ri_agency_theme");
  const systemPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  // Set initial theme
  const initialTheme = storedTheme || (systemPrefersDark ? "dark" : "light");
  applyTheme(initialTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("ri_agency_theme", newTheme);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const themeToggleBtns = document.querySelectorAll(".theme-toggle");
  
  themeToggleBtns.forEach(btn => {
    if (theme === "dark") {
      btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
      btn.setAttribute("aria-label", "Switch to Light Mode");
      btn.setAttribute("title", "Switch to Light Mode");
    } else {
      btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
      btn.setAttribute("aria-label", "Switch to Dark Mode");
      btn.setAttribute("title", "Switch to Dark Mode");
    }
  });
}

/**
 * 2. Sticky Header Scroll Effect
 */
function initScrollHeader() {
  const header = document.querySelector(".header-wrapper") || document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/**
 * 3. Mega Menu Dropdown Behaviors
 */
function initMegaDropdown() {
  const dropdown = document.querySelector(".nav-item-dropdown");
  if (!dropdown) return;

  const toggleBtn = dropdown.querySelector(".dropdown-toggle");
  if (!toggleBtn) return;

  // Toggle on click for touch / keyboard
  toggleBtn.addEventListener("click", (e) => {
    // If on a page where user clicks to toggle rather than navigate
    if (window.innerWidth <= 992) return;
    // On desktop, allow clicking to visit services.html or toggle dropdown on touch
    if (e.pointerType === "touch") {
      e.preventDefault();
      dropdown.classList.toggle("show-dropdown");
    }
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("show-dropdown");
    }
  });

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      dropdown.classList.remove("show-dropdown");
    }
  });
}

/**
 * 4. Responsive Mobile Navigation Drawer
 */
function initMobileNav() {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const drawerOverlay = document.getElementById("mobile-drawer-overlay");
  const drawerCloseBtn = document.getElementById("drawer-close-btn");
  const servicesToggle = document.getElementById("drawer-services-toggle");
  const servicesContent = document.getElementById("drawer-services-content");

  if (!menuToggle) return;

  const openDrawer = () => {
    if (mobileDrawer) mobileDrawer.classList.add("open");
    if (drawerOverlay) drawerOverlay.classList.add("active");
    menuToggle.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    if (mobileDrawer) mobileDrawer.classList.remove("open");
    if (drawerOverlay) drawerOverlay.classList.remove("active");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  menuToggle.addEventListener("click", () => {
    if (mobileDrawer && mobileDrawer.classList.contains("open")) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener("click", closeDrawer);
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener("click", closeDrawer);
  }

  // Close drawer on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer && mobileDrawer.classList.contains("open")) {
      closeDrawer();
    }
  });

  // Services Accordion inside Mobile Drawer
  if (servicesToggle && servicesContent) {
    servicesToggle.addEventListener("click", () => {
      const isOpen = servicesToggle.classList.toggle("open");
      servicesContent.classList.toggle("open", isOpen);
      servicesToggle.setAttribute("aria-expanded", isOpen);
    });
  }
}

/**
 * 3. FAQ Accordion Handler
 */
function initFaqAccordions() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question-btn");
    if (!questionBtn) return;

    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Optional: Close others
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove("active");
      });

      item.classList.toggle("active", !isActive);
      questionBtn.setAttribute("aria-expanded", !isActive);
    });
  });
}

/**
 * 4. Automatic Contextual WhatsApp Links
 */
function initWhatsAppLinks() {
  const elements = document.querySelectorAll("[data-whatsapp-msg]");
  elements.forEach(el => {
    const customMsg = el.getAttribute("data-whatsapp-msg");
    const url = window.SITE_DATA ? window.SITE_DATA.getWhatsAppUrl(customMsg) : `https://wa.me/8801310824987?text=${encodeURIComponent(customMsg)}`;
    if (el.tagName.toLowerCase() === "a") {
      el.href = url;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    } else {
      el.addEventListener("click", () => {
        window.open(url, "_blank", "noopener,noreferrer");
      });
    }
  });
}

/**
 * 5. Update Current Year
 */
function updateCurrentYear() {
  const yearSpans = document.querySelectorAll(".current-year");
  const year = new Date().getFullYear();
  yearSpans.forEach(span => {
    span.textContent = year;
  });
}

/**
 * 6. Live Digital Clock (Bangladesh Standard Time BST / GMT+6)
 */
function initLiveClock() {
  const clockElements = document.querySelectorAll(".clock-time");
  if (!clockElements.length) return;

  const toBengaliDigits = (str) => {
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return str.replace(/[0-9]/g, (d) => bnDigits[d]);
  };

  const updateClock = () => {
    const now = new Date();
    const options = {
      timeZone: "Asia/Dhaka",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    };
    
    try {
      const formatter = new Intl.DateTimeFormat("en-US", options);
      let timeString = formatter.format(now);
      
      const currentLang = document.documentElement.getAttribute("lang") || "en";
      if (currentLang === "bn") {
        timeString = toBengaliDigits(timeString);
      }

      clockElements.forEach(el => {
        el.textContent = timeString;
      });
    } catch (e) {
      const hours = String(now.getHours() % 12 || 12).padStart(2, "0");
      const mins = String(now.getMinutes()).padStart(2, "0");
      const secs = String(now.getSeconds()).padStart(2, "0");
      const ampm = now.getHours() >= 12 ? "PM" : "AM";
      let timeString = `${hours}:${mins}:${secs} ${ampm}`;
      if (document.documentElement.getAttribute("lang") === "bn") {
        timeString = toBengaliDigits(timeString);
      }
      clockElements.forEach(el => {
        el.textContent = timeString;
      });
    }
  };

  window.triggerClockUpdate = updateClock;
  updateClock();
  setInterval(updateClock, 1000);
}

/**
 * 7. Full-Feature Bilingual Engine (English & Bengali)
 */
function initLanguageSwitcher() {
  const langToggleBtns = document.querySelectorAll(".lang-switch-btn, .lang-toggle-btn");
  const storedLang = localStorage.getItem("ri_agency_lang") || "en";

  const setLanguage = (lang) => {
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("ri_agency_lang", lang);

    // Update active state on language pills
    document.querySelectorAll(".lang-pill, .lang-option").forEach(pill => {
      const pillLang = pill.getAttribute("data-lang-val") || pill.getAttribute("data-lang");
      if (pillLang === lang) {
        pill.classList.add("active");
      } else {
        pill.classList.remove("active");
      }
    });

    // Translate all DOM elements with data-en & data-bn
    const translatables = document.querySelectorAll("[data-en][data-bn]");
    translatables.forEach(el => {
      let translation = el.getAttribute(`data-${lang}`);
      if (!translation) return;

      // Decode any HTML entities so &amp; becomes &, &lt; becomes <, etc.
      translation = translation
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'");

      if (el.tagName.toLowerCase() === "input" || el.tagName.toLowerCase() === "textarea") {
        if (el.hasAttribute("placeholder")) {
          el.setAttribute("placeholder", translation);
        }
      } else {
        // If translation contains HTML tags (like <br>, <span>, <strong>)
        if (translation.includes("<") && translation.includes(">")) {
          el.innerHTML = translation;
        } else {
          // If element has a child .trans-text span
          const textSpan = el.querySelector(".trans-text");
          if (textSpan) {
            textSpan.textContent = translation;
          } else if (el.children.length === 0) {
            el.textContent = translation;
          } else {
            // If element has icon or badge + text node, update only text node
            const nodes = Array.from(el.childNodes);
            const textNode = nodes.find(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim().length > 0);
            if (textNode) {
              textNode.textContent = translation;
            } else {
              el.innerHTML = translation;
            }
          }
        }
      }
    });

    // Re-render live clock digits immediately
    if (typeof window.triggerClockUpdate === "function") {
      window.triggerClockUpdate();
    }

    // Re-render carousel counter digits immediately
    if (typeof window.triggerSlideCounterUpdate === "function") {
      window.triggerSlideCounterUpdate();
    }
  };

  // Initial setup
  setLanguage(storedLang);

  langToggleBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const currentLang = document.documentElement.getAttribute("lang") || "en";
      const targetPill = e.target.closest(".lang-pill, .lang-option");
      let nextLang = currentLang === "en" ? "bn" : "en";
      if (targetPill) {
        const clickedVal = targetPill.getAttribute("data-lang-val") || targetPill.getAttribute("data-lang");
        if (clickedVal) nextLang = clickedVal;
      }
      setLanguage(nextLang);
    });
  });
}

/**
 * 8. Interactive Hero Carousel Slider
 */
function initHeroCarousel() {
  const sliderTrack = document.getElementById("hero-slider-track");
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".slider-dot");
  const prevBtn = document.getElementById("slider-prev-btn");
  const nextBtn = document.getElementById("slider-next-btn");
  const counterCurrent = document.getElementById("slider-counter-current");
  const counterTotal = document.getElementById("slider-counter-total");

  if (!sliderTrack || !slides.length) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoPlayTimer = null;
  const slideInterval = 5500; // 5.5 seconds

  const toBengaliDigits = (num) => {
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return String(num).padStart(2, '0').replace(/[0-9]/g, (d) => bnDigits[d]);
  };

  const updateSlideCounter = () => {
    const isBengali = document.documentElement.getAttribute("lang") === "bn";
    if (counterCurrent) {
      counterCurrent.textContent = isBengali ? toBengaliDigits(currentIndex + 1) : String(currentIndex + 1).padStart(2, '0');
    }
    if (counterTotal) {
      counterTotal.textContent = isBengali ? toBengaliDigits(totalSlides) : String(totalSlides).padStart(2, '0');
    }
  };

  window.triggerSlideCounterUpdate = updateSlideCounter;

  const updateSlide = (index) => {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentIndex = index;

    // Slide the track
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update active class on slides
    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });

    // Update dots
    dots.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.add("active");
        dot.setAttribute("aria-current", "true");
      } else {
        dot.classList.remove("active");
        dot.removeAttribute("aria-current");
      }
    });

    // Update counter
    updateSlideCounter();
  };

  const nextSlide = () => {
    updateSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    updateSlide(currentIndex - 1);
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayTimer = setInterval(nextSlide, slideInterval);
  };

  const stopAutoPlay = () => {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  };

  // Event Listeners for Arrows
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      startAutoPlay();
    });
  }

  // Dots click navigation
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const targetIdx = parseInt(dot.getAttribute("data-slide-to"), 10);
      if (!isNaN(targetIdx)) {
        updateSlide(targetIdx);
        startAutoPlay();
      }
    });
  });

  // Pause on mouse hover
  const sliderContainer = document.querySelector(".hero-slider-section");
  if (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", stopAutoPlay);
    sliderContainer.addEventListener("mouseleave", startAutoPlay);
  }

  // Touch Swipe for Mobile
  let touchStartX = 0;
  let touchEndX = 0;

  sliderTrack.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoPlay();
  }, { passive: true });

  sliderTrack.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    startAutoPlay();
  }, { passive: true });

  // Keyboard navigation (Left / Right keys when focused in slider)
  if (sliderContainer) {
    sliderContainer.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
        startAutoPlay();
      } else if (e.key === "ArrowRight") {
        nextSlide();
        startAutoPlay();
      }
    });
  }

  // Initialize first slide
  updateSlide(0);
  startAutoPlay();
}

/**
 * 11. Interactive Live Theme & Color Palette Customizer
 */
const RI_PALETTES = {
  aurora: {
    id: "aurora",
    nameEn: "Cyber Aurora",
    nameBn: "সাইবার অরোরা",
    descEn: "Electric Indigo & Vivid Cyan (Default Notun Style)",
    descBn: "ইলেকট্রিক ইন্ডিগো ও সায়ান (নতুন স্টাইল)",
    dots: ["#4f46e5", "#06b6d4", "#ec4899"],
    primary: "#4f46e5"
  },
  amethyst: {
    id: "amethyst",
    nameEn: "Royal Amethyst",
    nameBn: "রয়্যাল অ্যামিথিস্ট",
    descEn: "Imperial Purple & Fuchsia Rose",
    descBn: "ইম্পেরিয়াল পার্পল ও ফুসিয়া রোজ",
    dots: ["#7c3aed", "#ec4899", "#f43f5e"],
    primary: "#7c3aed"
  },
  sapphire: {
    id: "sapphire",
    nameEn: "Ocean Sapphire",
    nameBn: "ওশান স্যাফায়ার",
    descEn: "Vivid Cobalt & Ocean Mint Teal",
    descBn: "কোবাল্ট ব্লু ও ওশান মিন্ট টিল",
    dots: ["#0284c7", "#0d9488", "#38bdf8"],
    primary: "#0284c7"
  },
  emerald: {
    id: "emerald",
    nameEn: "Emerald Obsidian",
    nameBn: "এমেরাল্ড ওবসিডিয়ান",
    descEn: "Cyber Emerald & Mint Jade",
    descBn: "সাইবার এমেরাল্ড ও মিন্ট জেড",
    dots: ["#059669", "#10b981", "#34d399"],
    primary: "#059669"
  },
  sunset: {
    id: "sunset",
    nameEn: "Sunset Amber",
    nameBn: "সানসেট অ্যাম্বার",
    descEn: "Solar Amber & Crimson Flame",
    descBn: "সোলার গোল্ড ও ক্রিমসন ফ্লেম",
    dots: ["#ea580c", "#f59e0b", "#f43f5e"],
    primary: "#ea580c"
  }
};

function initColorPaletteCustomizer() {
  const currentLang = localStorage.getItem("ri_agency_lang") || "en";
  const storedPalette = localStorage.getItem("ri_theme_palette") || "aurora";
  const storedCustomColor = localStorage.getItem("ri_custom_brand_color") || "#4f46e5";
  const isChomokEnabled = localStorage.getItem("ri_click_chomok") !== "disabled";

  // Apply initial palette immediately
  applySitePalette(storedPalette, storedCustomColor);

  // Inject header palette button into .header-actions if not already present
  const headerActions = document.querySelector(".header-actions");
  if (headerActions && !document.getElementById("palette-header-btn")) {
    const paletteHeaderBtn = document.createElement("button");
    paletteHeaderBtn.className = "palette-header-btn";
    paletteHeaderBtn.id = "palette-header-btn";
    paletteHeaderBtn.setAttribute("aria-label", "Color Palette Settings");
    paletteHeaderBtn.setAttribute("title", "Customize Website Colors / কালার পরিবর্তন করুন");
    paletteHeaderBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`;

    const themeToggle = headerActions.querySelector(".theme-toggle");
    if (themeToggle) {
      headerActions.insertBefore(paletteHeaderBtn, themeToggle.nextSibling);
    } else {
      headerActions.prepend(paletteHeaderBtn);
    }
  }

  // Inject floating launcher button if not present
  if (!document.getElementById("palette-launcher-btn")) {
    const floatBtn = document.createElement("button");
    floatBtn.className = "palette-launcher-float";
    floatBtn.id = "palette-launcher-btn";
    floatBtn.setAttribute("aria-label", "Customize Website Colors");
    floatBtn.setAttribute("title", "Customize Website Colors / কালার পরিবর্তন করুন");
    floatBtn.innerHTML = `
      <span class="palette-launcher-icon">🎨</span>
      <span class="palette-launcher-text" data-en="Theme Colors" data-bn="থিম কালার">${currentLang === "bn" ? "থিম কালার" : "Theme Colors"}</span>
    `;
    document.body.appendChild(floatBtn);
  }

  // Inject modal drawer overlay if not present
  if (!document.getElementById("palette-drawer-overlay")) {
    const overlay = document.createElement("div");
    overlay.className = "palette-drawer-overlay";
    overlay.id = "palette-drawer-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Color Palette Customizer");

    const presetsHtml = Object.values(RI_PALETTES).map(p => `
      <button class="palette-preset-item ${p.id === storedPalette ? "active" : ""}" data-palette-id="${p.id}">
        <div class="palette-item-left">
          <div class="palette-preview-dots">
            ${p.dots.map(color => `<span class="palette-dot" style="background-color: ${color}"></span>`).join("")}
          </div>
          <div>
            <span class="palette-name" data-en="${p.nameEn}" data-bn="${p.nameBn}">${currentLang === "bn" ? p.nameBn : p.nameEn}</span>
            <span class="palette-desc" data-en="${p.descEn}" data-bn="${p.descBn}">${currentLang === "bn" ? p.descBn : p.descEn}</span>
          </div>
        </div>
        <svg class="palette-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </button>
    `).join("");

    overlay.innerHTML = `
      <div class="palette-drawer-card">
        <div class="palette-drawer-header">
          <div class="palette-drawer-title">
            <span>🎨</span>
            <span data-en="Theme &amp; Color Style" data-bn="থিম ও কালার স্টাইল">${currentLang === "bn" ? "থিম ও কালার স্টাইল" : "Theme &amp; Color Style"}</span>
          </div>
          <button class="palette-drawer-close" id="palette-drawer-close-btn" aria-label="Close customizer">✕</button>
        </div>

        <div class="palette-drawer-body">
          <div>
            <div class="palette-section-label">
              <span>✨</span>
              <span data-en="Preset Luxury Styles" data-bn="লাক্সারি কালার স্টাইলসমূহ">${currentLang === "bn" ? "লাক্সারি কালার স্টাইলসমূহ" : "Preset Luxury Styles"}</span>
            </div>
            <div class="palette-presets-list" id="palette-presets-list">
              ${presetsHtml}
            </div>
          </div>

          <div>
            <div class="palette-section-label">
              <span>🎛️</span>
              <span data-en="Custom Primary Accent" data-bn="কাস্টম অ্যাকসেন্ট কালার">${currentLang === "bn" ? "কাস্টম অ্যাকসেন্ট কালার" : "Custom Primary Accent"}</span>
            </div>
            <div class="palette-custom-box">
              <div class="palette-custom-left">
                <span class="palette-custom-title" data-en="Pick Custom Brand Color" data-bn="পছন্দের কালার সিলেক্ট করুন">${currentLang === "bn" ? "পছন্দের কালার সিলেক্ট করুন" : "Pick Custom Brand Color"}</span>
                <span class="palette-custom-subtitle" data-en="Generates dynamic matching gradients" data-bn="স্বয়ংক্রিয়ভাবে গ্র্যাডিয়েন্ট তৈরি হবে">${currentLang === "bn" ? "স্বয়ংক্রিয়ভাবে গ্র্যাডিয়েন্ট তৈরি হবে" : "Generates dynamic matching gradients"}</span>
              </div>
              <input type="color" class="palette-color-input" id="palette-custom-color-input" value="${storedCustomColor}" title="Choose color">
            </div>
          </div>

          <div>
            <div class="palette-section-label">
              <span>✨</span>
              <span data-en="Mouse Click Magic Sparkles" data-bn="মাউস ক্লিক ম্যাজিক চমক">${currentLang === "bn" ? "মাউস ক্লিক ম্যাজিক চমক" : "Mouse Click Magic Sparkles"}</span>
            </div>
            <div class="palette-chomok-box">
              <div class="palette-custom-left">
                <span class="palette-custom-title" data-en="Dazzling Click FX" data-bn="ক্লিক চমক ইফেক্ট">${currentLang === "bn" ? "ক্লিক চমক ইফেক্ট" : "Dazzling Click FX"}</span>
                <span class="palette-custom-subtitle" data-en="Sparkling stars &amp; shockwaves on click" data-bn="ক্লিক করলেই ঝলমলে তারা ও আলোর রিং ছড়াবে">${currentLang === "bn" ? "ক্লিক করলেই ঝলমলে তারা ও আলোর রিং ছড়াবে" : "Sparkling stars &amp; shockwaves on click"}</span>
              </div>
              <div style="display: flex; gap: 0.5rem; align-items: center;">
                <button class="palette-test-chomok-btn" id="palette-test-chomok-btn" type="button" title="Test Sparkles">✨ Test</button>
                <label class="chomok-switch" title="Toggle Click Sparkles">
                  <input type="checkbox" id="chomok-toggle-input" ${isChomokEnabled ? "checked" : ""}>
                  <span class="chomok-slider"></span>
                </label>
              </div>
            </div>
          </div>

          <div class="palette-drawer-footer">
            <button class="palette-reset-btn" id="palette-reset-btn" data-en="↺ Reset Default" data-bn="↺ ডিফল্ট কালার">${currentLang === "bn" ? "↺ ডিফল্ট কালার" : "↺ Reset Default"}</button>
            <button class="palette-done-btn" id="palette-done-btn" data-en="Apply &amp; Close" data-bn="সেভ ও বন্ধ করুন">${currentLang === "bn" ? "সেভ ও বন্ধ করুন" : "Apply &amp; Close"}</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
  }

  // Attach Event Handlers
  const overlay = document.getElementById("palette-drawer-overlay");
  const openBtns = [document.getElementById("palette-launcher-btn"), document.getElementById("palette-header-btn")].filter(Boolean);
  const closeBtn = document.getElementById("palette-drawer-close-btn");
  const doneBtn = document.getElementById("palette-done-btn");
  const resetBtn = document.getElementById("palette-reset-btn");
  const customInput = document.getElementById("palette-custom-color-input");
  const chomokToggle = document.getElementById("chomok-toggle-input");
  const testChomokBtn = document.getElementById("palette-test-chomok-btn");

  const openDrawer = () => {
    if (overlay) overlay.classList.add("active");
  };

  const closeDrawer = () => {
    if (overlay) overlay.classList.remove("active");
  };

  openBtns.forEach(btn => btn.addEventListener("click", openDrawer));
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (doneBtn) doneBtn.addEventListener("click", closeDrawer);

  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeDrawer();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay && overlay.classList.contains("active")) {
      closeDrawer();
    }
  });

  // Preset button clicks
  const presetItems = document.querySelectorAll(".palette-preset-item");
  presetItems.forEach(item => {
    item.addEventListener("click", () => {
      const paletteId = item.getAttribute("data-palette-id");
      applySitePalette(paletteId);
      presetItems.forEach(pi => pi.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // Custom color input handler
  if (customInput) {
    customInput.addEventListener("input", (e) => {
      const color = e.target.value;
      applySitePalette("custom", color);
      presetItems.forEach(pi => pi.classList.remove("active"));
    });
  }

  // Click Chomok Toggle and Test
  if (chomokToggle) {
    chomokToggle.addEventListener("change", (e) => {
      const enabled = e.target.checked;
      localStorage.setItem("ri_click_chomok", enabled ? "enabled" : "disabled");
      if (enabled && window.triggerChomok) {
        const rect = chomokToggle.getBoundingClientRect();
        window.triggerChomok(rect.left + rect.width / 2, rect.top + rect.height / 2, true);
      }
    });
  }

  if (testChomokBtn) {
    testChomokBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const rect = testChomokBtn.getBoundingClientRect();
      if (window.triggerChomok) {
        window.triggerChomok(rect.left + rect.width / 2, rect.top + rect.height / 2, true);
      }
    });
  }

  // Reset to default
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      applySitePalette("aurora");
      presetItems.forEach(pi => {
        if (pi.getAttribute("data-palette-id") === "aurora") {
          pi.classList.add("active");
        } else {
          pi.classList.remove("active");
        }
      });
      if (customInput) customInput.value = "#4f46e5";
      if (chomokToggle) chomokToggle.checked = true;
      localStorage.setItem("ri_click_chomok", "enabled");
    });
  }
}

function applySitePalette(paletteId, customColor) {
  const root = document.documentElement;
  
  if (paletteId === "custom" && customColor) {
    root.setAttribute("data-palette", "custom");
    localStorage.setItem("ri_theme_palette", "custom");
    localStorage.setItem("ri_custom_brand_color", customColor);

    // Generate dynamic complementary gradient and glow
    root.style.setProperty("--brand-primary", customColor);
    root.style.setProperty("--brand-primary-hover", customColor);
    root.style.setProperty("--accent-badge-text", customColor);
    root.style.setProperty("--shadow-glow", `0 0 32px ${customColor}50`);
    root.style.setProperty("--brand-gradient", `linear-gradient(135deg, ${customColor} 0%, #06b6d4 100%)`);
    root.style.setProperty("--brand-gradient-text", `linear-gradient(135deg, ${customColor} 0%, #06b6d4 50%, #ec4899 100%)`);
  } else {
    // Clear inline overrides so CSS tokens take over
    root.style.removeProperty("--brand-primary");
    root.style.removeProperty("--brand-primary-hover");
    root.style.removeProperty("--accent-badge-text");
    root.style.removeProperty("--shadow-glow");
    root.style.removeProperty("--brand-gradient");
    root.style.removeProperty("--brand-gradient-text");

    const validPalette = RI_PALETTES[paletteId] ? paletteId : "aurora";
    root.setAttribute("data-palette", validPalette);
    localStorage.setItem("ri_theme_palette", validPalette);
  }
}

/**
 * 12. Ultra-Slim Floating Quick-Action Dock & Back-to-Top Controller
 */
function initFloatingQuickDock() {
  if (document.getElementById("floating-quick-dock")) return;

  const currentLang = localStorage.getItem("ri_agency_lang") || "en";
  const quickDock = document.createElement("div");
  quickDock.className = "floating-quick-dock";
  quickDock.id = "floating-quick-dock";

  quickDock.innerHTML = `
    <a href="https://wa.me/8801310824987?text=Hello%20RI%20Creative%20Agency,%20I%20would%20like%20to%20consult%20about%20a%20project." target="_blank" rel="noopener noreferrer" class="quick-dock-cta" aria-label="Direct WhatsApp Consultation" title="WhatsApp Direct Chat">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.058-2.221-.572-1.747-.723-2.87-2.502-2.957-2.617-.087-.116-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/></svg>
      <span data-en="Chat with Us" data-bn="হোয়াটসঅ্যাপে কথা বলুন">${currentLang === "bn" ? "হোয়াটসঅ্যাপে কথা বলুন" : "Chat with Us"}</span>
    </a>
    <button class="back-to-top-btn" id="back-to-top-btn" aria-label="Scroll back to top" title="Back to Top / পেজের উপরে যান">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    </button>
  `;

  document.body.appendChild(quickDock);

  const backToTopBtn = document.getElementById("back-to-top-btn");

  const toggleScrollBtn = () => {
    if (window.scrollY > 280) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", toggleScrollBtn, { passive: true });
  toggleScrollBtn();

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/**
 * 13. Dazzling Click Magic FX (মাউস ক্লিক চমক ও স্পার্কলস)
 * High-performance 60fps hardware-accelerated Canvas Particle Burst
 * Expanding shockwaves, rotating 4-point golden/neon stars, glowing orbs, & optical flash
 */
function initClickChomokEffect() {
  if (document.getElementById("click-chomok-canvas")) return;

  const canvas = document.createElement("canvas");
  canvas.id = "click-chomok-canvas";
  canvas.setAttribute("aria-hidden", "true");
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  let dpr = window.devicePixelRatio || 1;
  let width = window.innerWidth;
  let height = window.innerHeight;

  function resizeCanvas() {
    dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }

  window.addEventListener("resize", resizeCanvas, { passive: true });
  resizeCanvas();

  const particles = [];
  const shockwaves = [];
  const coreFlashes = [];
  let isLoopRunning = false;

  function getActivePaletteColors() {
    const computed = getComputedStyle(document.documentElement);
    const primary = computed.getPropertyValue("--brand-primary").trim() || "#4f46e5";
    return [
      primary,
      "#ffffff", // diamond white
      "#fbbf24", // radiant sunburst gold
      "#06b6d4", // vibrant cyan
      "#ec4899", // hot neon pink
      "#a855f7", // cosmic violet
      "#34d399", // mint emerald
      "#f97316"  // warm electric amber
    ];
  }

  // Draw 4-point diamond star (✨)
  function drawDiamondStar(cx, cy, spikes, outerR, innerR, rot, color, alpha) {
    let angle = (Math.PI / 2) * 3 + rot;
    const step = Math.PI / spikes;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerR);
    for (let i = 0; i < spikes; i++) {
      let x = cx + Math.cos(angle) * outerR;
      let y = cy + Math.sin(angle) * outerR;
      ctx.lineTo(x, y);
      angle += step;
      x = cx + Math.cos(angle) * innerR;
      y = cy + Math.sin(angle) * innerR;
      ctx.lineTo(x, y);
      angle += step;
    }
    ctx.lineTo(cx, cy - outerR);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
    ctx.shadowBlur = 10;
    ctx.shadowColor = color;
    ctx.fill();
    ctx.restore();
  }

  // Draw Glowing Orb
  function drawGlowOrb(cx, cy, radius, color, alpha) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, Math.max(0.5, radius), 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
    ctx.shadowBlur = 8;
    ctx.shadowColor = color;
    ctx.fill();
    ctx.restore();
  }

  // Draw Spark Line
  function drawSparkStreak(x, y, vx, vy, length, color, alpha) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - vx * length, y - vy * length);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.8;
    ctx.lineCap = "round";
    ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
    ctx.shadowBlur = 6;
    ctx.shadowColor = color;
    ctx.stroke();
    ctx.restore();
  }

  function createChomokBurst(x, y, isSuper = false) {
    const isEnabled = localStorage.getItem("ri_click_chomok") !== "disabled";
    if (!isEnabled) return;

    const colors = getActivePaletteColors();
    const particleCount = isSuper ? 34 : 20;

    // 1. Center Optical Core Flash
    coreFlashes.push({
      x: x,
      y: y,
      radius: 6,
      maxRadius: isSuper ? 38 : 26,
      color: colors[0],
      alpha: 0.95,
      decay: 0.08
    });

    // 2. Shockwave Rings
    shockwaves.push({
      x: x,
      y: y,
      radius: 4,
      maxRadius: isSuper ? 68 : 50,
      lineWidth: isSuper ? 3.2 : 2.4,
      color: colors[0],
      alpha: 0.9,
      speed: isSuper ? 4.2 : 3.4
    });

    if (isSuper) {
      shockwaves.push({
        x: x,
        y: y,
        radius: 2,
        maxRadius: 42,
        lineWidth: 1.6,
        color: "#ffffff",
        alpha: 0.8,
        speed: 2.8
      });
    }

    // 3. Particles (Stars, Orbs, Sparks)
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.5;
      const speed = (isSuper ? 3.5 : 2.5) + Math.random() * (isSuper ? 6.5 : 5.0);
      const color = colors[Math.floor(Math.random() * colors.length)];
      const randType = Math.random();
      const type = randType < 0.4 ? "star" : (randType < 0.72 ? "orb" : "spark");

      particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        type: type,
        color: color,
        alpha: 1,
        size: (type === "star" ? 3.5 : (type === "orb" ? 2.8 : 2.0)) + Math.random() * 3.5,
        rot: Math.random() * Math.PI,
        rotSpeed: (Math.random() - 0.5) * 0.28,
        gravity: 0.07,
        friction: 0.935,
        decay: 0.02 + Math.random() * 0.016
      });
    }

    // Start render loop if not running
    if (!isLoopRunning) {
      isLoopRunning = true;
      requestAnimationFrame(renderLoop);
    }
  }

  function renderLoop() {
    ctx.clearRect(0, 0, width, height);

    // Render Core Flashes
    for (let i = coreFlashes.length - 1; i >= 0; i--) {
      const f = coreFlashes[i];
      f.radius += (f.maxRadius - f.radius) * 0.3;
      f.alpha -= f.decay;

      if (f.alpha <= 0) {
        coreFlashes.splice(i, 1);
        continue;
      }

      ctx.save();
      const grad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, Math.max(1, f.radius));
      grad.addColorStop(0, `rgba(255, 255, 255, ${f.alpha})`);
      grad.addColorStop(0.4, `${f.color}${Math.round(f.alpha * 200).toString(16).padStart(2, "0")}`);
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(f.x, f.y, Math.max(1, f.radius), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // Render Shockwaves
    for (let i = shockwaves.length - 1; i >= 0; i--) {
      const sw = shockwaves[i];
      sw.radius += sw.speed;
      const progress = sw.radius / sw.maxRadius;
      const currentAlpha = Math.max(0, sw.alpha * (1 - progress));

      if (progress >= 1 || currentAlpha <= 0.02) {
        shockwaves.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
      ctx.strokeStyle = sw.color;
      ctx.lineWidth = Math.max(0.4, sw.lineWidth * (1 - progress * 0.7));
      ctx.globalAlpha = currentAlpha;
      ctx.shadowBlur = 12;
      ctx.shadowColor = sw.color;
      ctx.stroke();
      ctx.restore();
    }

    // Render Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= p.friction;
      p.vy = p.vy * p.friction + p.gravity;
      p.rot += p.rotSpeed;
      p.alpha -= p.decay;
      p.size *= 0.985;

      if (p.alpha <= 0.02 || p.size <= 0.5) {
        particles.splice(i, 1);
        continue;
      }

      if (p.type === "star") {
        drawDiamondStar(p.x, p.y, 4, p.size * 2, p.size * 0.65, p.rot, p.color, p.alpha);
      } else if (p.type === "orb") {
        drawGlowOrb(p.x, p.y, p.size, p.color, p.alpha);
      } else {
        drawSparkStreak(p.x, p.y, p.vx, p.vy, 2.2, p.color, p.alpha);
      }
    }

    // Keep running only if there are active elements
    if (particles.length > 0 || shockwaves.length > 0 || coreFlashes.length > 0) {
      requestAnimationFrame(renderLoop);
    } else {
      isLoopRunning = false;
      ctx.clearRect(0, 0, width, height);
    }
  }

  // Global pointer / click trigger
  window.addEventListener("pointerdown", (e) => {
    // Ignore right clicks
    if (e.button !== undefined && e.button !== 0) return;

    // Check if clicked an interactive element for Super Chomok
    const targetEl = e.target && e.target.closest ? e.target.closest("button, a, .btn, .card, .service-card, .trust-item, .portfolio-card, .process-card, .package-card, .faq-item, .quick-dock-cta, .subservice-tag") : null;
    const isSuper = Boolean(targetEl);

    createChomokBurst(e.clientX, e.clientY, isSuper);

    // Apply tactile optical ripple flash to the clicked element
    if (targetEl) {
      const rect = targetEl.getBoundingClientRect();
      const relX = ((e.clientX - rect.left) / (rect.width || 1)) * 100;
      const relY = ((e.clientY - rect.top) / (rect.height || 1)) * 100;
      targetEl.style.setProperty("--click-x", `${relX}%`);
      targetEl.style.setProperty("--click-y", `${relY}%`);
      targetEl.classList.remove("chomok-pop-effect");
      void targetEl.offsetWidth; // force reflow
      targetEl.classList.add("chomok-pop-effect");
      setTimeout(() => {
        targetEl.classList.remove("chomok-pop-effect");
      }, 480);
    }
  }, { passive: true });

  // Expose trigger globally for programmatic use
  window.triggerChomok = createChomokBurst;
}

