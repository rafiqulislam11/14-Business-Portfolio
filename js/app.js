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
  initAuthAndSupportSystem();
  initClientConversionFeatures();
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
    <button class="quick-dock-support" id="quick-dock-support-btn" aria-label="Open 24/7 Support Desk" title="24/7 Support Desk / হেল্প ও সাপোর্ট">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
      </svg>
      <span data-en="Support" data-bn="সাপোর্ট">${currentLang === "bn" ? "সাপোর্ট" : "Support"}</span>
    </button>
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
  const supportBtn = document.getElementById("quick-dock-support-btn");

  if (supportBtn) {
    supportBtn.addEventListener("click", () => {
      if (window.openSupportModal) {
        window.openSupportModal();
      }
    });
  }

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

/**
 * 14. Authentication & Client Support Desk System
 * - Login / Logout buttons with local session persistence
 * - Client & Admin Demo Accounts (Rafiqul Islam / Tanvir Ahmed)
 * - 24/7 Help Desk & Support Ticket Management (Submit, View status, WhatsApp direct route)
 * - Client Project Deliverables & Orders Portal
 */
function initAuthAndSupportSystem() {
  const currentLang = localStorage.getItem("ri_agency_lang") || "en";

  // Pre-seed default demo tickets if empty
  if (!localStorage.getItem("ri_support_tickets")) {
    const defaultTickets = [
      {
        id: "RI-TICKET-8291",
        name: "Tanvir Ahmed",
        email: "tanvir.client@gmail.com",
        category: "Website & SEO",
        priority: "high",
        subject: "SEO Audit & Speed Optimization for E-commerce Store",
        message: "We need the technical SEO audit results and Core Web Vitals speed optimization report for our upcoming seasonal launch.",
        status: "In Review",
        date: "2026-09-08 04:30 PM",
        assigned: "Rafiqul Islam (Founder)"
      }
    ];
    localStorage.setItem("ri_support_tickets", JSON.stringify(defaultTickets));
  }

  // Toast System
  let toastContainer = document.getElementById("agency-toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "agency-toast-container";
    toastContainer.className = "agency-toast-container";
    document.body.appendChild(toastContainer);
  }

  function showToast(message, icon = "✨") {
    const toast = document.createElement("div");
    toast.className = "agency-toast";
    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(15px) scale(0.95)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  window.showAgencyToast = showToast;

  function getCurrentUser() {
    try {
      const stored = localStorage.getItem("ri_agency_auth_user");
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      return null;
    }
  }

  function loginUser(userData) {
    localStorage.setItem("ri_agency_auth_user", JSON.stringify(userData));
    renderAuthElements();
    closeAuthModal();
    if (window.triggerChomok) {
      window.triggerChomok(window.innerWidth / 2, window.innerHeight / 3, true);
    }
    const welcomeMsg = currentLang === "bn" 
      ? `স্বাগতম, ${userData.name}! আপনি সফলভাবে লগইন করেছেন।`
      : `Welcome back, ${userData.name}! You are now logged in.`;
    showToast(welcomeMsg, "👋");
  }

  function logoutUser() {
    localStorage.removeItem("ri_agency_auth_user");
    renderAuthElements();
    const byeMsg = currentLang === "bn" 
      ? "সফলভাবে লগআউট করা হয়েছে।"
      : "You have been logged out successfully.";
    showToast(byeMsg, "👋");
  }

  function renderAuthElements() {
    const user = getCurrentUser();
    const lang = localStorage.getItem("ri_agency_lang") || "en";

    // 1. Desktop Header Action Integration
    const headerActions = document.querySelector(".header-actions");
    if (headerActions) {
      let authContainer = document.getElementById("header-auth-container");
      if (!authContainer) {
        authContainer = document.createElement("div");
        authContainer.id = "header-auth-container";
        authContainer.className = "auth-nav-container";
        const themeToggle = headerActions.querySelector(".theme-toggle");
        if (themeToggle) {
          headerActions.insertBefore(authContainer, themeToggle);
        } else {
          headerActions.prepend(authContainer);
        }
      }

      if (!user) {
        authContainer.innerHTML = `
          <button class="btn-header-auth" id="header-auth-btn" aria-label="Sign In" title="Log In or Create Account">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span data-en="Login" data-bn="লগইন">${lang === "bn" ? "লগইন" : "Login"}</span>
          </button>
        `;
        document.getElementById("header-auth-btn")?.addEventListener("click", openAuthModal);
      } else {
        const firstName = user.name.split(" ")[0];
        const avatarContent = (user.role === 'admin' || user.avatarImg)
          ? `<img src="${user.avatarImg || 'assets/images/rafiqul-islam-portrait.jpg'}" alt="${user.name}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; object-position: center 20%;">`
          : (user.avatar || "U");

        authContainer.innerHTML = `
          <div class="user-profile-menu-wrap" id="user-profile-menu-wrap">
            <button class="user-profile-btn" id="user-profile-btn" aria-expanded="false" title="Account Menu: ${user.name}">
              <span class="user-avatar-badge" style="padding: 0; overflow: hidden;">${avatarContent}</span>
              <span class="user-name-text">${firstName}</span>
              <span class="user-status-dot online"></span>
              <svg class="user-caret" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="user-dropdown-card" id="user-dropdown-card">
              <div class="user-dropdown-header">
                <div class="user-header-avatar" style="padding: 0; overflow: hidden;">${avatarContent}</div>
                <div class="user-header-details">
                  <span class="user-header-name">${user.name}</span>
                  <span class="user-header-email">${user.email}</span>
                  <span class="user-header-badge ${user.role === 'admin' ? 'badge-admin' : 'badge-client'}">
                    ${user.role === 'admin' ? '👑 Founder & Admin' : '💼 Verified Client'}
                  </span>
                </div>
              </div>
              <div class="user-dropdown-menu">
                <button class="user-menu-item" id="menu-support-btn">
                  <span class="menu-item-icon">🎧</span>
                  <div class="menu-item-text">
                    <strong data-en="24/7 Support Desk" data-bn="সাপোর্ট হেল্প ডেস্ক">${lang === "bn" ? "সাপোর্ট হেল্প ডেস্ক" : "24/7 Support Desk"}</strong>
                    <span data-en="Submit or track support tickets" data-bn="টিকেট জমা দিন বা স্ট্যাটাস দেখুন">${lang === "bn" ? "টিকেট জমা দিন বা স্ট্যাটাস দেখুন" : "Submit or track support tickets"}</span>
                  </div>
                </button>
                <button class="user-menu-item" id="menu-portal-btn">
                  <span class="menu-item-icon">📊</span>
                  <div class="menu-item-text">
                    <strong data-en="${user.role === 'admin' ? 'Agency Projects Hub' : 'My Orders & Projects'}" data-bn="${user.role === 'admin' ? 'এজেন্সি প্রজেক্ট হাব' : 'আমার অর্ডার ও প্রজেক্ট'}">${user.role === 'admin' ? (lang === "bn" ? "এজেন্সি প্রজেক্ট হাব" : "Agency Projects Hub") : (lang === "bn" ? "আমার অর্ডার ও প্রজেক্ট" : "My Orders & Projects")}</strong>
                    <span data-en="Live progress & deliverables" data-bn="কাজের অগ্রগতি ও ডেলিভারি ফাইল">${lang === "bn" ? "কাজের অগ্রগতি ও ডেলিভারি ফাইল" : "Live progress & deliverables"}</span>
                  </div>
                </button>
              </div>
              <div class="user-dropdown-footer">
                <button class="user-logout-btn" id="user-logout-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                  <span data-en="Log Out" data-bn="লগআউট">${lang === "bn" ? "লগআউট" : "Log Out"}</span>
                </button>
              </div>
            </div>
          </div>
        `;

        const wrap = document.getElementById("user-profile-menu-wrap");
        const profileBtn = document.getElementById("user-profile-btn");
        const logoutBtn = document.getElementById("user-logout-btn");
        const supportBtn = document.getElementById("menu-support-btn");
        const portalBtn = document.getElementById("menu-portal-btn");

        profileBtn?.addEventListener("click", (e) => {
          e.stopPropagation();
          wrap?.classList.toggle("active");
        });

        logoutBtn?.addEventListener("click", () => {
          logoutUser();
        });

        supportBtn?.addEventListener("click", () => {
          wrap?.classList.remove("active");
          openSupportModal();
        });

        portalBtn?.addEventListener("click", () => {
          wrap?.classList.remove("active");
          openProjectPortalModal();
        });
      }
    }

    // 2. Mobile Drawer Integration
    const drawerBody = document.querySelector(".drawer-body");
    if (drawerBody) {
      let drawerAuth = document.getElementById("drawer-auth-box");
      if (!drawerAuth) {
        drawerAuth = document.createElement("div");
        drawerAuth.id = "drawer-auth-box";
        drawerAuth.style.padding = "1rem 1.25rem";
        drawerAuth.style.borderTop = "1px solid var(--border-subtle)";
        drawerAuth.style.marginTop = "1rem";
        drawerBody.appendChild(drawerAuth);
      }

      if (!user) {
        drawerAuth.innerHTML = `
          <button class="btn btn-primary" id="drawer-auth-btn" style="width: 100%; justify-content: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span data-en="Client Login / Register" data-bn="লগইন / রেজিস্টার">${lang === "bn" ? "লগইন / রেজিস্টার" : "Client Login / Register"}</span>
          </button>
        `;
        document.getElementById("drawer-auth-btn")?.addEventListener("click", () => {
          document.getElementById("drawer-close-btn")?.click();
          openAuthModal();
        });
      } else {
        const drawerAvatarContent = (user.role === 'admin' || user.avatarImg)
          ? `<img src="${user.avatarImg || 'assets/images/rafiqul-islam-portrait.jpg'}" alt="${user.name}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; object-position: center 20%;">`
          : (user.avatar || "U");

        drawerAuth.innerHTML = `
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <span class="user-avatar-badge" style="padding: 0; overflow: hidden;">${drawerAvatarContent}</span>
              <div>
                <div style="font-weight: 700; font-size: 0.88rem; color: var(--text-primary);">${user.name}</div>
                <div style="font-size: 0.74rem; color: var(--text-muted);">${user.email}</div>
              </div>
            </div>
            <span class="user-header-badge ${user.role === 'admin' ? 'badge-admin' : 'badge-client'}">${user.role === 'admin' ? 'Admin' : 'Client'}</span>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.75rem;">
            <button class="btn btn-secondary btn-sm" id="drawer-support-btn" style="font-size: 0.8rem; justify-content: center;">🎧 Support</button>
            <button class="btn btn-secondary btn-sm" id="drawer-portal-btn" style="font-size: 0.8rem; justify-content: center;">📊 Projects</button>
          </div>
          <button class="user-logout-btn" id="drawer-logout-btn" style="width: 100%;">
            <span data-en="Log Out" data-bn="লগআউট">${lang === "bn" ? "লগআউট" : "Log Out"}</span>
          </button>
        `;
        document.getElementById("drawer-logout-btn")?.addEventListener("click", logoutUser);
        document.getElementById("drawer-support-btn")?.addEventListener("click", () => {
          document.getElementById("drawer-close-btn")?.click();
          openSupportModal();
        });
        document.getElementById("drawer-portal-btn")?.addEventListener("click", () => {
          document.getElementById("drawer-close-btn")?.click();
          openProjectPortalModal();
        });
      }
    }
  }

  // Close dropdown on outside click
  document.addEventListener("click", (e) => {
    const wrap = document.getElementById("user-profile-menu-wrap");
    if (wrap && wrap.classList.contains("active") && !wrap.contains(e.target)) {
      wrap.classList.remove("active");
    }
  });

  // Modal 1: Auth Modal
  function createAuthModal() {
    if (document.getElementById("auth-modal-overlay")) return;
    const modal = document.createElement("div");
    modal.id = "auth-modal-overlay";
    modal.className = "agency-modal-overlay";
    modal.innerHTML = `
      <div class="agency-modal-card">
        <div class="agency-modal-header">
          <div class="agency-modal-title-wrap">
            <span class="agency-modal-icon">🔐</span>
            <div>
              <div class="agency-modal-title" data-en="RI Client &amp; Partner Portal" data-bn="আরআই ক্লায়েন্ট ও পার্টনার পোর্টাল">RI Client &amp; Partner Portal</div>
              <div class="agency-modal-subtitle" data-en="Access your project dashboard, files &amp; support" data-bn="প্রজেক্ট ড্যাশবোর্ড, ফাইল ও সাপোর্ট অ্যাক্সেস করুন">Access your project dashboard, files &amp; support</div>
            </div>
          </div>
          <button class="agency-modal-close" id="auth-modal-close-btn" aria-label="Close">✕</button>
        </div>
        <div class="agency-modal-body">
          <!-- Auth Tabs -->
          <div class="auth-tabs-nav">
            <button class="auth-tab-btn active" id="tab-btn-signin" data-en="Sign In" data-bn="লগইন">Sign In</button>
            <button class="auth-tab-btn" id="tab-btn-signup" data-en="Create Account" data-bn="নতুন একাউন্ট">Create Account</button>
          </div>

          <!-- Quick 1-Click Demo Logins -->
          <div style="margin-bottom: 0.75rem;">
            <div style="font-size: 0.76rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.45rem; text-transform: uppercase; letter-spacing: 0.5px;">
              ⚡ <span data-en="Instant Demo Logins" data-bn="১-ক্লিক ডেমো লগইন">Instant Demo Logins</span>
            </div>
            <div class="auth-demo-grid">
              <button class="auth-demo-card" id="demo-login-admin" type="button">
                <span class="auth-demo-badge">👑 Admin Mode</span>
                <span class="auth-demo-name">Rafiqul Islam</span>
                <span class="auth-demo-sub">Founder &amp; Owner</span>
              </button>
              <button class="auth-demo-card" id="demo-login-client" type="button">
                <span class="auth-demo-badge" style="color: #059669;">💼 Client Mode</span>
                <span class="auth-demo-name">Tanvir Ahmed</span>
                <span class="auth-demo-sub">Active Client</span>
              </button>
            </div>
          </div>

          <!-- Sign In Form -->
          <form id="auth-signin-form">
            <div class="agency-form-group">
              <label class="agency-form-label" data-en="Email or Phone" data-bn="ইমেইল বা ফোন">Email or Phone</label>
              <input type="text" class="agency-form-input" id="signin-email" placeholder="e.g. client@example.com" required value="tanvir.client@gmail.com">
            </div>
            <div class="agency-form-group">
              <label class="agency-form-label" data-en="Password" data-bn="পাসওয়ার্ড">Password</label>
              <div class="password-input-wrap">
                <input type="password" class="agency-form-input" id="signin-password" placeholder="Enter your password" required value="123456">
                <button type="button" class="password-toggle-eye" id="toggle-pwd-signin" aria-label="Show password">👁️</button>
              </div>
            </div>
            <button type="submit" class="agency-submit-btn" data-en="Sign In to Portal →" data-bn="পোর্টাল এ প্রবেশ করুন →">Sign In to Portal →</button>
          </form>

          <!-- Sign Up Form -->
          <form id="auth-signup-form" style="display: none;">
            <div class="agency-form-group">
              <label class="agency-form-label" data-en="Full Name" data-bn="আপনার পূর্ণ নাম">Full Name</label>
              <input type="text" class="agency-form-input" id="signup-name" placeholder="e.g. Mahmudul Hasan" required>
            </div>
            <div class="agency-form-group">
              <label class="agency-form-label" data-en="Email Address" data-bn="ইমেইল ঠিকানা">Email Address</label>
              <input type="email" class="agency-form-input" id="signup-email" placeholder="e.g. mahmud@example.com" required>
            </div>
            <div class="agency-form-group">
              <label class="agency-form-label" data-en="Create Password" data-bn="নতুন পাসওয়ার্ড">Create Password</label>
              <input type="password" class="agency-form-input" id="signup-password" placeholder="At least 6 characters" required>
            </div>
            <button type="submit" class="agency-submit-btn" data-en="Register &amp; Access Portal →" data-bn="একাউন্ট খুলুন ও শুরু করুন →">Register &amp; Access Portal →</button>
          </form>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Tab switcher
    const tabSignin = document.getElementById("tab-btn-signin");
    const tabSignup = document.getElementById("tab-btn-signup");
    const formSignin = document.getElementById("auth-signin-form");
    const formSignup = document.getElementById("auth-signup-form");

    tabSignin?.addEventListener("click", () => {
      tabSignin.classList.add("active");
      tabSignup.classList.remove("active");
      formSignin.style.display = "block";
      formSignup.style.display = "none";
    });

    tabSignup?.addEventListener("click", () => {
      tabSignup.classList.add("active");
      tabSignin.classList.remove("active");
      formSignin.style.display = "none";
      formSignup.style.display = "block";
    });

    // Password Eye toggle
    const togglePwd = document.getElementById("toggle-pwd-signin");
    const pwdInput = document.getElementById("signin-password");
    togglePwd?.addEventListener("click", () => {
      const isPwd = pwdInput.type === "password";
      pwdInput.type = isPwd ? "text" : "password";
      togglePwd.textContent = isPwd ? "🙈" : "👁️";
    });

    // Close handlers
    document.getElementById("auth-modal-close-btn")?.addEventListener("click", closeAuthModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeAuthModal();
    });

    // Demo Accounts Click
    document.getElementById("demo-login-admin")?.addEventListener("click", () => {
      loginUser({
        name: "Rafiqul Islam",
        email: "rafiqulislam.globalwork@gmail.com",
        role: "admin",
        avatar: "RI",
        avatarImg: "assets/images/rafiqul-islam-portrait.jpg",
        phone: "01310-824987"
      });
    });

    document.getElementById("demo-login-client")?.addEventListener("click", () => {
      loginUser({
        name: "Tanvir Ahmed",
        email: "tanvir.client@gmail.com",
        role: "client",
        avatar: "TA",
        phone: "+8801712345678"
      });
    });

    // Form Submit
    formSignin?.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("signin-email").value.trim();
      const name = email.split("@")[0].replace(".", " ");
      const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
      const initials = (formattedName.split(" ")[0][0] + (formattedName.split(" ")[1] ? formattedName.split(" ")[1][0] : "")).toUpperCase();
      loginUser({
        name: formattedName,
        email: email,
        role: email.toLowerCase().includes("rafiqul") ? "admin" : "client",
        avatar: initials || "CL",
        phone: "01310-824987"
      });
    });

    formSignup?.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("signup-name").value.trim();
      const email = document.getElementById("signup-email").value.trim();
      const initials = (name.split(" ")[0][0] + (name.split(" ")[1] ? name.split(" ")[1][0] : "")).toUpperCase();
      loginUser({
        name: name,
        email: email,
        role: "client",
        avatar: initials || "CL",
        phone: ""
      });
    });
  }

  function openAuthModal() {
    const modal = document.getElementById("auth-modal-overlay");
    if (modal) modal.classList.add("active");
  }

  function closeAuthModal() {
    const modal = document.getElementById("auth-modal-overlay");
    if (modal) modal.classList.remove("active");
  }

  window.openAuthModal = openAuthModal;
  window.closeAuthModal = closeAuthModal;

  // Modal 2: 24/7 Support Desk
  function createSupportModal() {
    if (document.getElementById("support-system-modal")) return;
    const modal = document.createElement("div");
    modal.id = "support-system-modal";
    modal.className = "agency-modal-overlay";
    modal.innerHTML = `
      <div class="agency-modal-card modal-card-lg">
        <div class="agency-modal-header">
          <div class="agency-modal-title-wrap">
            <span class="agency-modal-icon">🎧</span>
            <div>
              <div class="agency-modal-title" data-en="24/7 Client Support Desk" data-bn="২৪/৭ ক্লায়েন্ট সাপোর্ট ডেস্ক">24/7 Client Support Desk</div>
              <div class="agency-modal-subtitle" data-en="Direct Ticket Tracking &amp; Assistance from Rafiqul Islam" data-bn="রফিকুল ইসলাম ও সাপোর্ট টিমের সরাসরি সহায়তা">Direct Ticket Tracking &amp; Assistance from Rafiqul Islam</div>
            </div>
          </div>
          <button class="agency-modal-close" id="support-modal-close-btn" aria-label="Close">✕</button>
        </div>

        <div class="support-tabs-nav">
          <button class="support-tab-btn active" id="tab-support-submit" data-en="🎫 Submit Ticket" data-bn="🎫 নতুন টিকেট">🎫 Submit Ticket</button>
          <button class="support-tab-btn" id="tab-support-tickets">
            <span data-en="📋 My Tickets" data-bn="📋 টিকেট হিস্টোরি">📋 My Tickets</span>
            <span class="support-tab-count" id="support-ticket-counter">1</span>
          </button>
          <button class="support-tab-btn" id="tab-support-instant" data-en="⚡ Instant Hotline" data-bn="⚡ সরাসরি হটলাইন">⚡ Instant Hotline</button>
        </div>

        <div class="agency-modal-body">
          <!-- Tab 1: Submit Ticket -->
          <div id="support-view-submit">
            <form id="support-ticket-form">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div class="agency-form-group">
                  <label class="agency-form-label" data-en="Your Name" data-bn="আপনার নাম">Your Name</label>
                  <input type="text" class="agency-form-input" id="ticket-input-name" required placeholder="e.g. Tanvir Ahmed">
                </div>
                <div class="agency-form-group">
                  <label class="agency-form-label" data-en="Email or Phone" data-bn="ইমেইল বা ফোন">Email or Phone</label>
                  <input type="text" class="agency-form-input" id="ticket-input-contact" required placeholder="e.g. 01310-824987">
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 1rem;">
                <div class="agency-form-group">
                  <label class="agency-form-label" data-en="Service Category" data-bn="সার্ভিস বিভাগ">Service Category</label>
                  <select class="agency-form-select" id="ticket-input-category" required>
                    <option value="Website &amp; SEO">🌐 Website &amp; SEO Support</option>
                    <option value="Amazon KDP">📚 Amazon KDP Publishing</option>
                    <option value="Graphic Design">🎨 Graphic &amp; Brand Design</option>
                    <option value="Active Marketplaces">💼 Marketplaces (Fiverr, Upwork)</option>
                    <option value="Social Media">📱 Social Media Services</option>
                    <option value="Career &amp; CV">📄 Career &amp; CV Services</option>
                    <option value="Billing &amp; Quotation">💳 Billing, Payment &amp; Quotes</option>
                    <option value="General Inquiry">💬 General Inquiry</option>
                  </select>
                </div>
                <div class="agency-form-group">
                  <label class="agency-form-label" data-en="Priority Level" data-bn="জরুরী মাত্রা">Priority Level</label>
                  <div class="ticket-priority-grid">
                    <button type="button" class="ticket-priority-opt active" data-priority="normal">🟢 Normal</button>
                    <button type="button" class="ticket-priority-opt" data-priority="high">🟡 High</button>
                    <button type="button" class="ticket-priority-opt" data-priority="urgent">🔴 Urgent</button>
                  </div>
                </div>
              </div>

              <div class="agency-form-group">
                <label class="agency-form-label" data-en="Subject / Topic" data-bn="বিষয় / টপিক">Subject / Topic</label>
                <input type="text" class="agency-form-input" id="ticket-input-subject" required placeholder="e.g. Update request on website hero banner">
              </div>

              <div class="agency-form-group">
                <label class="agency-form-label" data-en="Detailed Description" data-bn="বিস্তারিত বিবরণ">Detailed Description</label>
                <textarea class="agency-form-textarea" id="ticket-input-msg" required placeholder="Explain your requirement or issue clearly..."></textarea>
              </div>

              <button type="submit" class="agency-submit-btn" data-en="Submit Support Ticket 🚀" data-bn="সাপোর্ট টিকেট জমা দিন 🚀">Submit Support Ticket 🚀</button>
            </form>
          </div>

          <!-- Tab 2: Tickets List -->
          <div id="support-view-tickets" style="display: none;">
            <div class="tickets-list-wrap" id="tickets-container-list">
              <!-- Injected dynamically -->
            </div>
          </div>

          <!-- Tab 3: Instant Hotline -->
          <div id="support-view-instant" style="display: none;">
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="padding: 1.25rem; border-radius: var(--radius-md); background: var(--bg-card); border: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
                <div>
                  <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 0.25rem;">WhatsApp Direct Support</h4>
                  <p style="font-size: 0.85rem; color: var(--text-secondary);">Chat directly with Founder Rafiqul Islam for instant quote, emergency support or consult.</p>
                  <span style="font-size: 0.78rem; font-weight: 700; color: #10b981;">● Typical response time: under 5 minutes</span>
                </div>
                <a href="https://wa.me/8801310824987?text=Hello%20Rafiqul%20Islam,%20I%20need%20urgent%20support%20regarding%20my%20project." target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div style="padding: 1.15rem; border-radius: var(--radius-md); background: var(--bg-card); border: 1px solid var(--border-subtle);">
                  <div style="font-size: 1.3rem; margin-bottom: 0.5rem;">📞</div>
                  <strong style="color: var(--text-primary); font-size: 0.92rem; display: block; margin-bottom: 0.2rem;">Direct Mobile Call</strong>
                  <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 0.75rem;">01310-824987 (+8801310824987)</p>
                  <a href="tel:01310824987" class="btn btn-secondary btn-sm">Call Now</a>
                </div>

                <div style="padding: 1.15rem; border-radius: var(--radius-md); background: var(--bg-card); border: 1px solid var(--border-subtle);">
                  <div style="font-size: 1.3rem; margin-bottom: 0.5rem;">✉️</div>
                  <strong style="color: var(--text-primary); font-size: 0.92rem; display: block; margin-bottom: 0.2rem;">Official Priority Email</strong>
                  <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 0.75rem;">rafiqulislam.globalwork@gmail.com</p>
                  <a href="mailto:rafiqulislam.globalwork@gmail.com?subject=Support%20Inquiry%20-%20RI%20Creative%20Agency" class="btn btn-secondary btn-sm">Send Email</a>
                </div>
              </div>

              <div style="padding: 1rem; border-radius: var(--radius-md); background: var(--bg-secondary); font-size: 0.82rem; color: var(--text-muted); line-height: 1.5;">
                📍 <strong>Physical Lab &amp; Office:</strong> Jamirdia, Bhaluka, Mymensingh, Bangladesh.<br>
                ⏰ <strong>Active Support Window:</strong> 7 Days a week, 9:00 AM – 11:00 PM (Bangladesh Time GMT+6).
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Tab Navigation
    const tabSubmit = document.getElementById("tab-support-submit");
    const tabTickets = document.getElementById("tab-support-tickets");
    const tabInstant = document.getElementById("tab-support-instant");

    const viewSubmit = document.getElementById("support-view-submit");
    const viewTickets = document.getElementById("support-view-tickets");
    const viewInstant = document.getElementById("support-view-instant");

    function switchSupportTab(tabName) {
      tabSubmit.classList.toggle("active", tabName === "submit");
      tabTickets.classList.toggle("active", tabName === "tickets");
      tabInstant.classList.toggle("active", tabName === "instant");

      viewSubmit.style.display = tabName === "submit" ? "block" : "none";
      viewTickets.style.display = tabName === "tickets" ? "block" : "none";
      viewInstant.style.display = tabName === "instant" ? "block" : "none";

      if (tabName === "tickets") renderTicketsList();
    }

    tabSubmit?.addEventListener("click", () => switchSupportTab("submit"));
    tabTickets?.addEventListener("click", () => switchSupportTab("tickets"));
    tabInstant?.addEventListener("click", () => switchSupportTab("instant"));

    // Priority pills
    let currentPriority = "normal";
    const priorityOpts = modal.querySelectorAll(".ticket-priority-opt");
    priorityOpts.forEach(opt => {
      opt.addEventListener("click", () => {
        priorityOpts.forEach(o => o.classList.remove("active"));
        opt.classList.add("active");
        currentPriority = opt.getAttribute("data-priority") || "normal";
      });
    });

    // Close handlers
    document.getElementById("support-modal-close-btn")?.addEventListener("click", closeSupportModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeSupportModal();
    });

    // Submit ticket form handler
    const form = document.getElementById("support-ticket-form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("ticket-input-name").value.trim();
      const contact = document.getElementById("ticket-input-contact").value.trim();
      const category = document.getElementById("ticket-input-category").value;
      const subject = document.getElementById("ticket-input-subject").value.trim();
      const msg = document.getElementById("ticket-input-msg").value.trim();

      const ticketId = "RI-TICKET-" + Math.floor(1000 + Math.random() * 9000);
      const newTicket = {
        id: ticketId,
        name: name,
        email: contact,
        category: category,
        priority: currentPriority,
        subject: subject,
        message: msg,
        status: "Open",
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" }),
        assigned: "Rafiqul Islam (Founder)"
      };

      const existing = JSON.parse(localStorage.getItem("ri_support_tickets") || "[]");
      existing.unshift(newTicket);
      localStorage.setItem("ri_support_tickets", JSON.stringify(existing));

      form.reset();
      showToast(`Ticket ${ticketId} created successfully! Assigned to Rafiqul Islam.`, "🎫");
      if (window.triggerChomok) {
        window.triggerChomok(window.innerWidth / 2, window.innerHeight / 2, true);
      }
      switchSupportTab("tickets");
    });
  }

  function renderTicketsList() {
    const user = getCurrentUser();
    const tickets = JSON.parse(localStorage.getItem("ri_support_tickets") || "[]");
    const container = document.getElementById("tickets-container-list");
    const counter = document.getElementById("support-ticket-counter");
    if (counter) counter.textContent = tickets.length;
    if (!container) return;

    if (tickets.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
          <span style="font-size: 2.5rem; display: block; margin-bottom: 0.5rem;">📭</span>
          <strong>No support tickets found</strong>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">Submit a ticket above to get direct assistance from Rafiqul Islam.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = tickets.map((t, idx) => {
      const isResolved = t.status.toLowerCase() === "resolved";
      const statusClass = isResolved ? "status-resolved" : (t.status.toLowerCase().includes("review") ? "status-review" : "status-open");
      const priorityEmoji = t.priority === "urgent" ? "🔴 Urgent" : (t.priority === "high" ? "🟡 High" : "🟢 Normal");
      const waText = encodeURIComponent(`Hello Rafiqul Islam, regarding my Support Ticket ${t.id} (${t.subject}): `);

      const adminActions = user && user.role === "admin" ? `
        <button class="btn btn-secondary btn-sm" onclick="window.toggleTicketStatus(${idx})" style="font-size: 0.75rem; padding: 0.25rem 0.6rem;">
          ${isResolved ? "↺ Re-open Ticket" : "✓ Mark Resolved"}
        </button>
      ` : "";

      return `
        <div class="ticket-item-card">
          <div class="ticket-item-header">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <span class="ticket-item-id">${t.id}</span>
              <span style="font-size: 0.75rem; color: var(--text-muted);">• ${t.category}</span>
              <span style="font-size: 0.72rem; font-weight: 700;">${priorityEmoji}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span class="ticket-badge-status ${statusClass}">${t.status}</span>
              ${adminActions}
            </div>
          </div>
          <div class="ticket-item-subject">${t.subject}</div>
          <div class="ticket-item-msg">${t.message}</div>
          <div class="ticket-item-footer">
            <span>👤 ${t.name} (${t.email}) • 📅 ${t.date}</span>
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <span>Assigned: <strong>${t.assigned}</strong></span>
              <a href="https://wa.me/8801310824987?text=${waText}" target="_blank" rel="noopener noreferrer" style="color: #10b981; font-weight: 700; text-decoration: underline;">WhatsApp Follow-up →</a>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  window.toggleTicketStatus = function(idx) {
    const tickets = JSON.parse(localStorage.getItem("ri_support_tickets") || "[]");
    if (tickets[idx]) {
      tickets[idx].status = tickets[idx].status === "Resolved" ? "In Review" : "Resolved";
      localStorage.setItem("ri_support_tickets", JSON.stringify(tickets));
      renderTicketsList();
      showToast(`Ticket ${tickets[idx].id} status updated to ${tickets[idx].status}`, "✓");
    }
  };

  function openSupportModal() {
    const modal = document.getElementById("support-system-modal");
    if (modal) {
      modal.classList.add("active");
      const user = getCurrentUser();
      const nameInput = document.getElementById("ticket-input-name");
      const emailInput = document.getElementById("ticket-input-contact");
      if (user && nameInput && !nameInput.value) {
        nameInput.value = user.name;
      }
      if (user && emailInput && !emailInput.value) {
        emailInput.value = user.email || user.phone;
      }
      const tickets = JSON.parse(localStorage.getItem("ri_support_tickets") || "[]");
      const counter = document.getElementById("support-ticket-counter");
      if (counter) counter.textContent = tickets.length;
    }
  }

  function closeSupportModal() {
    const modal = document.getElementById("support-system-modal");
    if (modal) modal.classList.remove("active");
  }

  window.openSupportModal = openSupportModal;
  window.closeSupportModal = closeSupportModal;

  // Modal 3: Project & Orders Portal
  function createProjectPortalModal() {
    if (document.getElementById("client-portal-modal")) return;
    const modal = document.createElement("div");
    modal.id = "client-portal-modal";
    modal.className = "agency-modal-overlay";
    modal.innerHTML = `
      <div class="agency-modal-card modal-card-lg">
        <div class="agency-modal-header">
          <div class="agency-modal-title-wrap">
            <span class="agency-modal-icon">📊</span>
            <div>
              <div class="agency-modal-title" data-en="Active Client Projects &amp; Deliverables" data-bn="অ্যাক্টিভ ক্লায়েন্ট প্রজেক্ট ও ডেলিভারি">Active Client Projects &amp; Deliverables</div>
              <div class="agency-modal-subtitle" data-en="Live sprint tracking, asset downloads &amp; milestones" data-bn="প্রজেক্টের অগ্রগতি, ফাইল ও ডেলিভারি ট্র্যাকিং">Live sprint tracking, asset downloads &amp; milestones</div>
            </div>
          </div>
          <button class="agency-modal-close" id="portal-modal-close-btn" aria-label="Close">✕</button>
        </div>
        <div class="agency-modal-body">
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <!-- Project 1 -->
            <div style="padding: 1.25rem; border-radius: var(--radius-md); background: var(--bg-card); border: 1px solid var(--border-card);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                <strong style="color: var(--text-primary); font-size: 1rem;">1. Full-Stack Agency Website Design &amp; SEO</strong>
                <span class="status-open ticket-badge-status">In Progress (85%)</span>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem;">Custom high-converting website design, responsive layouts, 3D luxury shadows, and technical SEO structure.</p>
              <div style="height: 8px; border-radius: 4px; background: var(--border-subtle); overflow: hidden; margin-bottom: 0.85rem;">
                <div style="width: 85%; height: 100%; background: var(--brand-gradient);"></div>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; color: var(--text-muted);">
                <span>Lead: Rafiqul Islam • Next: Final Speed QA</span>
                <button class="btn btn-secondary btn-sm" onclick="window.openSupportModal(); document.getElementById('portal-modal-close-btn').click();">Request Modification</button>
              </div>
            </div>

            <!-- Project 2 -->
            <div style="padding: 1.25rem; border-radius: var(--radius-md); background: var(--bg-card); border: 1px solid var(--border-card);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                <strong style="color: var(--text-primary); font-size: 1rem;">2. Amazon KDP Low-Content Book Formatting &amp; Cover</strong>
                <span class="status-resolved ticket-badge-status">Completed &amp; Delivered</span>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem;">Print-ready 300 DPI PDF interior layout, barcode calculation, and high-converting glossy cover wrap.</p>
              <div style="height: 8px; border-radius: 4px; background: var(--border-subtle); overflow: hidden; margin-bottom: 0.85rem;">
                <div style="width: 100%; height: 100%; background: #10b981;"></div>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; color: var(--text-muted);">
                <span>Delivered on: 2026-09-07 • Formats: PDF, PNG, AI</span>
                <a href="https://wa.me/8801310824987?text=Hello%20Rafiqul%20Islam,%20please%20resend%20the%20Amazon%20KDP%20deliverables." target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">Download Assets (GDrive)</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById("portal-modal-close-btn")?.addEventListener("click", closeProjectPortalModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeProjectPortalModal();
    });
  }

  function openProjectPortalModal() {
    const modal = document.getElementById("client-portal-modal");
    if (modal) modal.classList.add("active");
  }

  function closeProjectPortalModal() {
    const modal = document.getElementById("client-portal-modal");
    if (modal) modal.classList.remove("active");
  }

  window.openProjectPortalModal = openProjectPortalModal;
  window.closeProjectPortalModal = closeProjectPortalModal;

  // Global trigger for any button with .open-support-modal
  document.querySelectorAll(".open-support-modal").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      openSupportModal();
    });
  });
}

/**
 * ==========================================================================
 * RI CREATIVE AGENCY - CLIENT CONVERSION & WORKFLOW MODULES
 * Visual 11-Stage Order Tracker, Project Wizard, Quotes, Revisions, Reviews
 * ==========================================================================
 */
function initClientConversionFeatures() {
  createLeadMagnetModal();
  createRevisionModal();
  createReviewModal();
  initOrderTrackerHandlers();
  initProjectWizard();
  initDedicatedQuoteForm();
  initBeforeAfterSliders();
  initDashboardController();
  initAdminController();
  initChecklistDownloadButtons();
}

/**
 * 1. Visual 11-Stage Order Tracker Renderer
 */
function renderVisualOrderTracker(order, targetContainer) {
  if (!targetContainer) return;

  if (!order) {
    targetContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-card); border-radius: var(--radius-lg);">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
        <h3 style="font-size: 1.25rem; color: var(--text-primary); margin-bottom: 0.5rem;" data-en="Order Not Found" data-bn="অর্ডারটি পাওয়া যায়নি">Order Not Found</h3>
        <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto 1.5rem; font-size: 0.9rem;" data-en="Please verify your Order ID (e.g., RI-1001, RI-1002, RI-1003) or contact Rafiqul Islam directly on WhatsApp." data-bn="অনুগ্রহ করে আপনার অর্ডার আইডি (যেমন: RI-1001, RI-1002) যাচাই করুন অথবা সরাসরি হোয়াটসঅ্যাপে যোগাযোগ করুন।">Please verify your Order ID (e.g., RI-1001, RI-1002, RI-1003) or contact Rafiqul Islam directly on WhatsApp.</p>
        <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-secondary btn-sm" onclick="window.lookupOrderById('RI-1001')">Try Sample: RI-1001</button>
          <button class="btn btn-secondary btn-sm" onclick="window.lookupOrderById('RI-1002')">Try Sample: RI-1002</button>
          <a href="https://wa.me/8801310824987?text=Hello%20Rafiqul%20Islam,%20I%20need%20help%20tracking%20my%20order." target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">WhatsApp Help</a>
        </div>
      </div>
    `;
    return;
  }

  const stages = (window.SITE_DATA && window.SITE_DATA.orderTrackingStages) || [
    { stage: 1, nameEn: "Quote Requested", icon: "📝" },
    { stage: 2, nameEn: "Requirements Clarification", icon: "📋" },
    { stage: 3, nameEn: "Project Brief Lock", icon: "🔒" },
    { stage: 4, nameEn: "Research & Strategy", icon: "💡" },
    { stage: 5, nameEn: "Draft Ready", icon: "🎨" },
    { stage: 6, nameEn: "Client Review", icon: "👀" },
    { stage: 7, nameEn: "Revisions & Polish", icon: "✏️" },
    { stage: 8, nameEn: "Final QA Check", icon: "🔍" },
    { stage: 9, nameEn: "Client Final Approval", icon: "✅" },
    { stage: 10, nameEn: "Files Handover", icon: "📦" },
    { stage: 11, nameEn: "Completed & Review", icon: "⭐" }
  ];

  const currentStage = order.currentStage || 5;
  const progressPercent = Math.min(100, Math.round((currentStage / 11) * 100));

  const stagesHtml = stages.map(st => {
    let stateClass = "pending";
    let statusText = "Upcoming";

    if (st.stage < currentStage) {
      stateClass = "completed";
      statusText = "Completed ✓";
    } else if (st.stage === currentStage) {
      stateClass = "active";
      statusText = "In Progress ⚡";
    }

    return `
      <div class="stage-node ${stateClass}" title="Stage ${st.stage}: ${st.nameEn} (${statusText})">
        <div class="stage-circle">${st.stage < currentStage ? '✓' : st.icon}</div>
        <div class="stage-info">
          <div class="stage-name">${st.nameEn}</div>
          <div class="stage-status-text">${statusText}</div>
        </div>
      </div>
    `;
  }).join("");

  const deliverablesHtml = (order.deliverables && order.deliverables.length > 0)
    ? order.deliverables.map(d => `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 0.8rem; background: var(--bg-secondary); border-radius: var(--radius-sm); margin-bottom: 0.5rem; font-size: 0.85rem;">
          <span style="font-weight: 600; color: var(--text-primary); display: flex; align-items: center; gap: 0.4rem;">📁 ${d.title}</span>
          <a href="${d.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="padding: 0.25rem 0.65rem; font-size: 0.78rem;">${d.format || 'Download'}</a>
        </div>
      `).join("")
    : `<p style="font-size: 0.85rem; color: var(--text-muted);">Deliverables will be unlocked upon final QA completion.</p>`;

  const courierHtml = order.courierInfo
    ? `
      <div style="margin-top: 1rem; padding: 0.85rem; background: rgba(6, 182, 212, 0.08); border: 1px solid rgba(6, 182, 212, 0.25); border-radius: var(--radius-sm); font-size: 0.84rem;">
        <div style="font-weight: 700; color: var(--brand-secondary); margin-bottom: 0.35rem;">🚚 Third-Party Courier Coordination</div>
        <p style="margin: 0; color: var(--text-secondary); line-height: 1.4;">
          Coordinated via <strong>${order.courierInfo.partner}</strong> • Tracking Code: <strong style="font-family: var(--font-mono);">${order.courierInfo.trackingCode}</strong> • Status: <strong>${order.courierInfo.status}</strong>
        </p>
        <p style="margin: 0.35rem 0 0; font-size: 0.75rem; color: var(--text-muted);">
          * Note: Delivery is handled through independent third-party courier services.
        </p>
      </div>
    `
    : ``;

  const waEscalateText = encodeURIComponent(`Hello Rafiqul Islam, regarding my order ${order.id} (${order.serviceName}): I would like an update on current Stage ${currentStage}.`);

  targetContainer.innerHTML = `
    <div class="tracking-wrapper">
      <div class="tracking-header-bar">
        <div>
          <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
            <span class="order-code-badge">ORDER ${order.id}</span>
            <span style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary);">${order.serviceName}</span>
            <span style="font-size: 0.8rem; font-weight: 700; padding: 0.25rem 0.65rem; background: var(--accent-badge-bg); color: var(--brand-primary); border-radius: var(--radius-full);">${order.packageTier || 'STANDARD ⭐'}</span>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0.4rem 0 0;">
            Client: <strong>${order.clientName}</strong> • Placed: ${order.createdAt || '2026-09-08'} • Target Delivery: <strong>${order.estimatedDelivery || 'In Progress'}</strong>
          </p>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
          <button class="btn btn-secondary btn-sm" onclick="window.openRevisionModal('${order.id}')">✏️ Request Revision</button>
          <a href="https://wa.me/8801310824987?text=${waEscalateText}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="background: #10b981; border-color: #10b981;">WhatsApp Lead</a>
        </div>
      </div>

      <div class="tracking-progress-overall">
        <div class="progress-labels">
          <span>Overall Workflow Progress (Stage ${currentStage} of 11)</span>
          <span style="color: var(--brand-primary);">${progressPercent}% Completed</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill-bar" style="width: ${progressPercent}%;"></div>
        </div>
      </div>

      <!-- 11-Stage Pipeline -->
      <div class="stages-pipeline">
        ${stagesHtml}
      </div>

      <!-- Overview Breakdown -->
      <div class="order-overview-box">
        <div class="overview-item">
          <span>Project Lead</span>
          <strong>${order.assignedLead || 'Rafiqul Islam (Lead Strategist)'}</strong>
        </div>
        <div class="overview-item">
          <span>Current Stage Action</span>
          <strong style="color: var(--brand-primary);">${order.currentStageName || 'Stage ' + currentStage}</strong>
        </div>
        <div class="overview-item">
          <span>Revision Status</span>
          <strong>${order.revisionsUsed || 0} / ${order.revisionsMax || 'Unlimited'} Used</strong>
        </div>
        <div class="overview-item">
          <span>Project Investment</span>
          <strong>${order.priceBDT || 'Standard Quote'}</strong>
        </div>
      </div>

      ${courierHtml}

      <!-- Actions & Deliverables -->
      <div class="tracking-actions-area">
        <div class="action-card">
          <h4>📦 Project Deliverables & Handover</h4>
          <div>${deliverablesHtml}</div>
          <div style="margin-top: 1rem; font-size: 0.78rem; color: var(--text-muted);">
            Includes full source assets, print-ready files, and commercial usage handover.
          </div>
        </div>

        <div class="action-card">
          <h4>💬 Need Adjustments or Consultation?</h4>
          <p>
            Have feedback on the latest draft? Submit structured revision notes or hop on a direct WhatsApp call with Rafiqul Islam.
          </p>
          <div style="display: flex; gap: 0.65rem; flex-wrap: wrap;">
            <button class="btn btn-secondary btn-sm" onclick="window.openRevisionModal('${order.id}')">Submit Revision Notes</button>
            <button class="btn btn-outline btn-sm" onclick="window.openReviewModal()">⭐ Leave Agency Review</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * 2. Order Lookup Handlers
 */
function initOrderTrackerHandlers() {
  const searchBtn = document.getElementById("track-order-search-btn");
  const searchInput = document.getElementById("track-order-input");
  const resultContainer = document.getElementById("order-tracking-result-container");

  const performLookup = (orderId) => {
    if (!orderId) {
      if (window.showToast) window.showToast("Please enter an Order ID", "⚠️");
      return;
    }
    const cleanId = orderId.trim().toUpperCase();
    const order = window.RIApiService ? window.RIApiService.getOrderById(cleanId) : null;
    
    if (resultContainer) {
      renderVisualOrderTracker(order, resultContainer);
      resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  window.lookupOrderById = (id) => {
    if (searchInput) searchInput.value = id;
    performLookup(id);
  };

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => performLookup(searchInput.value));
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") performLookup(searchInput.value);
    });
  }

  // Check URL parameters for ?order=RI-XXXX
  const urlParams = new URLSearchParams(window.location.search);
  const paramOrderId = urlParams.get("order");
  if (paramOrderId && resultContainer) {
    lookupOrderById(paramOrderId);
  }
}

/**
 * 3. 6-Step Project Start Wizard Controller
 */
function initProjectWizard() {
  const wizardForm = document.getElementById("project-wizard-form");
  if (!wizardForm) return;

  let currentStep = 1;
  const totalSteps = 6;

  const stepTabs = document.querySelectorAll(".wizard-step-tab");
  const stepPanes = document.querySelectorAll(".wizard-pane");
  const prevBtn = document.getElementById("wizard-prev-btn");
  const nextBtn = document.getElementById("wizard-next-btn");
  const submitBtn = document.getElementById("wizard-submit-btn");

  const updateWizardUI = () => {
    stepPanes.forEach(p => p.classList.remove("active"));
    const activePane = document.querySelector(`.wizard-pane[data-step="${currentStep}"]`);
    if (activePane) activePane.classList.add("active");

    stepTabs.forEach(t => {
      const stepVal = parseInt(t.getAttribute("data-step"), 10);
      t.classList.remove("active", "completed");
      if (stepVal === currentStep) {
        t.classList.add("active");
      } else if (stepVal < currentStep) {
        t.classList.add("completed");
      }
    });

    if (prevBtn) prevBtn.style.display = currentStep > 1 ? "inline-flex" : "none";
    if (nextBtn) nextBtn.style.display = currentStep < totalSteps ? "inline-flex" : "none";
    if (submitBtn) submitBtn.style.display = currentStep === totalSteps ? "inline-flex" : "none";

    // If on Step 6, update summary review card
    if (currentStep === 6) {
      updateWizardSummary();
    }
  };

  const updateWizardSummary = () => {
    const summaryBox = document.getElementById("wizard-summary-content");
    if (!summaryBox) return;

    const selectedService = document.querySelector('input[name="wizard_service"]:checked')?.value || "Creative Design & Branding";
    const selectedPackage = document.querySelector('input[name="wizard_package"]:checked')?.value || "STANDARD ⭐ (Most Popular)";
    const clientName = document.getElementById("wz-name")?.value || "Valued Client";
    const clientPhone = document.getElementById("wz-phone")?.value || "01310-824987";
    const clientEmail = document.getElementById("wz-email")?.value || "client@example.com";
    const timeline = document.querySelector('input[name="wizard_timeline"]:checked')?.value || "Standard Delivery";

    summaryBox.innerHTML = `
      <div style="background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem; font-size: 0.9rem; line-height: 1.6;">
        <div style="margin-bottom: 0.5rem;"><strong>Selected Service:</strong> ${selectedService}</div>
        <div style="margin-bottom: 0.5rem;"><strong>Package Tier:</strong> <span style="color: var(--brand-primary); font-weight: 700;">${selectedPackage}</span></div>
        <div style="margin-bottom: 0.5rem;"><strong>Client Name:</strong> ${clientName}</div>
        <div style="margin-bottom: 0.5rem;"><strong>Contact Details:</strong> ${clientPhone} • ${clientEmail}</div>
        <div style="margin-bottom: 0.5rem;"><strong>Timeline Preference:</strong> ${timeline}</div>
        <div style="margin-top: 0.85rem; padding-top: 0.85rem; border-top: 1px dashed var(--border-subtle); font-size: 0.82rem; color: var(--text-secondary);">
          ✓ 100% Satisfaction Guarantee • Direct WhatsApp Updates • Official Milestone Tracking
        </div>
      </div>
    `;
  };

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      // Step validations
      if (currentStep === 1) {
        const checked = document.querySelector('input[name="wizard_service"]:checked');
        if (!checked) {
          if (window.showToast) window.showToast("Please select a primary service category", "⚠️");
          return;
        }
      } else if (currentStep === 2) {
        const checked = document.querySelector('input[name="wizard_package"]:checked');
        if (!checked) {
          if (window.showToast) window.showToast("Please select your preferred package tier", "⚠️");
          return;
        }
      } else if (currentStep === 4) {
        const nameVal = document.getElementById("wz-name")?.value.trim();
        const phoneVal = document.getElementById("wz-phone")?.value.trim();
        if (!nameVal || !phoneVal) {
          if (window.showToast) window.showToast("Please provide your name and WhatsApp/phone number", "⚠️");
          return;
        }
      }

      if (currentStep < totalSteps) {
        currentStep++;
        updateWizardUI();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentStep > 1) {
        currentStep--;
        updateWizardUI();
      }
    });
  }

  stepTabs.forEach(t => {
    t.addEventListener("click", () => {
      const targetStep = parseInt(t.getAttribute("data-step"), 10);
      if (targetStep <= currentStep) {
        currentStep = targetStep;
        updateWizardUI();
      }
    });
  });

  wizardForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const selectedService = document.querySelector('input[name="wizard_service"]:checked')?.value || "Creative Design & Branding";
    const selectedPackage = document.querySelector('input[name="wizard_package"]:checked')?.value || "STANDARD ⭐";
    const clientName = document.getElementById("wz-name")?.value || "Client";
    const clientPhone = document.getElementById("wz-phone")?.value || "";
    const clientEmail = document.getElementById("wz-email")?.value || "";
    const requirements = document.getElementById("wz-requirements")?.value || "";

    const newOrder = window.RIApiService ? window.RIApiService.createOrder({
      serviceName: selectedService,
      packageTier: selectedPackage,
      clientName: clientName,
      clientPhone: clientPhone,
      clientEmail: clientEmail,
      requirements: requirements,
      estimatedDelivery: "3-5 Business Days",
      priceBDT: "Custom Transparent Invoice",
      currentStage: 1,
      currentStageName: "Quote Requested / Initiated"
    }) : { id: "RI-" + Math.floor(1000 + Math.random() * 9000) };

    // Dispatch background email notification to Founder
    if (window.EmailService) {
      window.EmailService.sendInquiry({
        name: clientName,
        phone: clientPhone,
        email: clientEmail,
        service: selectedService,
        packageTier: selectedPackage,
        message: requirements,
        refId: newOrder.id
      }).catch(err => console.warn("Email dispatch notice:", err));
    }

    const successModal = document.createElement("div");
    successModal.className = "agency-modal-overlay active";
    successModal.innerHTML = `
      <div class="agency-modal-card" style="max-width: 520px; text-align: center; padding: 2.5rem 2rem;">
        <div style="font-size: 3.5rem; margin-bottom: 1rem;">🎉</div>
        <h3 style="font-size: 1.4rem; color: var(--text-primary); margin-bottom: 0.5rem;">Project Successfully Initialized!</h3>
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1.5rem;">
          Your official order tracking ID is <strong style="font-family: var(--font-mono); color: var(--brand-primary); font-size: 1.1rem;">${newOrder.id}</strong>. Rafiqul Islam has received your brief via email and will review your specifications immediately.
        </p>
        <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
          <a href="track-order.html?order=${newOrder.id}" class="btn btn-primary">Track Order Live →</a>
          <a href="https://wa.me/8801310824987?text=Hello%20Rafiqul%20Islam,%20I%20just%20started%20project%20${newOrder.id}%20for%20${encodeURIComponent(selectedService)}." target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="background: #10b981; color: #ffffff; border-color: #10b981;">WhatsApp Notice</a>
        </div>
      </div>
    `;
    document.body.appendChild(successModal);
  });

  // Make selectable cards interactive
  document.querySelectorAll(".selectable-card").forEach(card => {
    card.addEventListener("click", () => {
      const parentGrid = card.closest(".selectable-cards-grid");
      if (parentGrid) {
        parentGrid.querySelectorAll(".selectable-card").forEach(c => c.classList.remove("selected"));
      }
      card.classList.add("selected");
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  updateWizardUI();
}

/**
 * 4. Dedicated Free Quote Form Submission
 */
function initDedicatedQuoteForm() {
  const quoteForm = document.getElementById("dedicated-quote-form");
  if (!quoteForm) return;

  quoteForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("q-name")?.value.trim();
    const email = document.getElementById("q-email")?.value.trim();
    const phone = document.getElementById("q-phone")?.value.trim();
    const service = document.getElementById("q-service")?.value;
    const packageTier = document.getElementById("q-package")?.value || "Standard";
    const budget = document.getElementById("q-budget")?.value || "Flexible";
    const timeline = document.getElementById("q-timeline")?.value || "1-2 Weeks";
    const details = document.getElementById("q-details")?.value.trim();

    if (!name || !phone || !details) {
      if (window.showToast) window.showToast("Please fill in your name, contact and project details", "⚠️");
      return;
    }

    const submitBtn = quoteForm.querySelector("button[type='submit']");
    const originalBtnText = submitBtn ? submitBtn.innerHTML : "Submit";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>⏳ Sending Email &amp; Quote Request...</span>`;
    }

    try {
      let result;
      if (window.EmailService) {
        result = await window.EmailService.sendInquiry({
          name,
          email,
          phone,
          service,
          packageTier,
          budget,
          timeline,
          message: details
        });
      } else {
        result = {
          refId: "QT-" + Math.floor(1000 + Math.random() * 9000),
          emailSent: false,
          data: { name, email, phone, service, packageTier, budget, timeline, message: details }
        };
      }

      // Show interactive confirmation modal
      if (window.EmailService && typeof window.EmailService.showConfirmationModal === "function") {
        window.EmailService.showConfirmationModal(result);
      }

      quoteForm.reset();
    } catch (err) {
      console.error("Quote submit error:", err);
      alert("Something went wrong while sending your quote. Please contact directly via WhatsApp: 01310-824987");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }
  });
}

/**
 * 5. Lead Magnet / Free Checklist Download Modal
 */
function createLeadMagnetModal() {
  if (document.getElementById("lead-magnet-modal")) return;

  const modal = document.createElement("div");
  modal.id = "lead-magnet-modal";
  modal.className = "agency-modal-overlay";
  modal.innerHTML = `
    <div class="agency-modal-card" style="max-width: 460px;">
      <div class="agency-modal-header">
        <div class="agency-modal-title-wrap">
          <span class="agency-modal-icon">📥</span>
          <div>
            <div class="agency-modal-title" id="lm-modal-title">Download Free Guide</div>
            <div class="agency-modal-subtitle">Instant PDF Checklist by RI Creative Agency</div>
          </div>
        </div>
        <button class="agency-modal-close" onclick="window.closeLeadMagnetModal()">✕</button>
      </div>
      <div class="agency-modal-body">
        <p id="lm-modal-desc" style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1.25rem;">
          Enter your name and email to receive the direct download link immediately.
        </p>
        <form id="lead-magnet-form" style="display: flex; flex-direction: column; gap: 1rem;">
          <input type="hidden" id="lm-resource-id" value="">
          <div class="input-group-custom">
            <label>Your Full Name *</label>
            <input type="text" id="lm-name" class="input-custom" placeholder="e.g. Rafiqul Islam" required>
          </div>
          <div class="input-group-custom">
            <label>Work Email Address *</label>
            <input type="email" id="lm-email" class="input-custom" placeholder="name@company.com" required>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Download Free Checklist (Instant PDF)</button>
        </form>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById("lead-magnet-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("lm-resource-id")?.value;
    const name = document.getElementById("lm-name")?.value;
    const email = document.getElementById("lm-email")?.value;

    if (window.RIApiService) {
      window.RIApiService.captureLead({ resourceId: id, name, email });
    }

    window.closeLeadMagnetModal();
    if (window.showToast) window.showToast("Checklist download started! Thank you.", "✓");

    // Synthetic PDF download trigger
    const dummyA = document.createElement("a");
    dummyA.href = "assets/images/portfolio_mockup.jpg";
    dummyA.download = `RI-Creative-Agency-${id || 'Checklist'}.pdf`;
    document.body.appendChild(dummyA);
    dummyA.click();
    dummyA.remove();
  });
}

function openLeadMagnetModal(resourceId) {
  const modal = document.getElementById("lead-magnet-modal");
  if (!modal) return;

  const resource = (window.SITE_DATA && window.SITE_DATA.freeResources)
    ? window.SITE_DATA.freeResources.find(r => r.id === resourceId)
    : null;

  if (resource) {
    document.getElementById("lm-modal-title").textContent = resource.titleEn;
    document.getElementById("lm-modal-desc").textContent = resource.descriptionEn;
    document.getElementById("lm-resource-id").value = resource.id;
  }

  modal.classList.add("active");
}

function closeLeadMagnetModal() {
  document.getElementById("lead-magnet-modal")?.classList.remove("active");
}

window.openLeadMagnetModal = openLeadMagnetModal;
window.closeLeadMagnetModal = closeLeadMagnetModal;

function initChecklistDownloadButtons() {
  document.querySelectorAll(".magnet-download-btn, .btn-download-resource").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const resId = btn.getAttribute("data-resource-id") || "kdp-checklist";
      openLeadMagnetModal(resId);
    });
  });
}

/**
 * 6. Revision Request Modal
 */
function createRevisionModal() {
  if (document.getElementById("revision-request-modal")) return;

  const modal = document.createElement("div");
  modal.id = "revision-request-modal";
  modal.className = "agency-modal-overlay";
  modal.innerHTML = `
    <div class="agency-modal-card" style="max-width: 500px;">
      <div class="agency-modal-header">
        <div class="agency-modal-title-wrap">
          <span class="agency-modal-icon">✏️</span>
          <div>
            <div class="agency-modal-title">Request Project Revision</div>
            <div class="agency-modal-subtitle">Dedicated Milestone & Draft Adjustments</div>
          </div>
        </div>
        <button class="agency-modal-close" onclick="window.closeRevisionModal()">✕</button>
      </div>
      <div class="agency-modal-body">
        <form id="revision-request-form" style="display: flex; flex-direction: column; gap: 1rem;">
          <div class="input-group-custom">
            <label>Order ID *</label>
            <input type="text" id="rev-order-id" class="input-custom" placeholder="e.g. RI-1001" required>
          </div>
          <div class="input-group-custom">
            <label>Detailed Revision Notes *</label>
            <textarea id="rev-notes" class="input-custom" rows="4" placeholder="Be as specific as possible: e.g. change accent color to cyan, increase font size of hero headline..." required></textarea>
          </div>
          <div class="input-group-custom">
            <label>Reference Link / Google Drive / Screenshot (Optional)</label>
            <input type="url" id="rev-link" class="input-custom" placeholder="https://drive.google.com/...">
          </div>
          <button type="submit" class="btn btn-primary btn-block">Submit Revision Notes</button>
        </form>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById("revision-request-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const orderId = document.getElementById("rev-order-id")?.value.trim().toUpperCase();
    const notes = document.getElementById("rev-notes")?.value.trim();
    const link = document.getElementById("rev-link")?.value.trim();

    if (window.RIApiService) {
      const res = window.RIApiService.requestRevision(orderId, { notes, link });
      if (res.success) {
        if (window.showToast) window.showToast(`Revision logged for ${orderId}! Stage updated.`, "✓");
        const container = document.getElementById("order-tracking-result-container");
        if (container) {
          renderVisualOrderTracker(res.order, container);
        }
      } else {
        if (window.showToast) window.showToast(res.message, "⚠️");
      }
    }

    window.closeRevisionModal();
  });
}

function openRevisionModal(orderId) {
  const modal = document.getElementById("revision-request-modal");
  if (!modal) return;
  if (orderId) {
    const input = document.getElementById("rev-order-id");
    if (input) input.value = orderId;
  }
  modal.classList.add("active");
}

function closeRevisionModal() {
  document.getElementById("revision-request-modal")?.classList.remove("active");
}

window.openRevisionModal = openRevisionModal;
window.closeRevisionModal = closeRevisionModal;

/**
 * 7. Client Review Submission Modal
 */
function createReviewModal() {
  if (document.getElementById("review-submit-modal")) return;

  const modal = document.createElement("div");
  modal.id = "review-submit-modal";
  modal.className = "agency-modal-overlay";
  modal.innerHTML = `
    <div class="agency-modal-card" style="max-width: 480px;">
      <div class="agency-modal-header">
        <div class="agency-modal-title-wrap">
          <span class="agency-modal-icon">⭐</span>
          <div>
            <div class="agency-modal-title">Leave a Verified Client Review</div>
            <div class="agency-modal-subtitle">Share your experience working with RI Creative Agency</div>
          </div>
        </div>
        <button class="agency-modal-close" onclick="window.closeReviewModal()">✕</button>
      </div>
      <div class="agency-modal-body">
        <form id="review-submit-form" style="display: flex; flex-direction: column; gap: 1rem;">
          <div class="input-group-custom">
            <label>Rating</label>
            <select id="rev-rating" class="input-custom">
              <option value="5">⭐⭐⭐⭐⭐ 5 Stars - Exceptional Quality & Speed</option>
              <option value="4">⭐⭐⭐⭐ 4 Stars - Very Good Experience</option>
              <option value="3">⭐⭐⭐ 3 Stars - Average Service</option>
            </select>
          </div>
          <div class="input-group-custom">
            <label>Your Name & Title *</label>
            <input type="text" id="rev-client-name" class="input-custom" placeholder="e.g. Tanvir Ahmed, Founder at Bloom Attire" required>
          </div>
          <div class="input-group-custom">
            <label>Service Provided *</label>
            <input type="text" id="rev-service-tag" class="input-custom" placeholder="e.g. Brand Identity & Packaging Design" required>
          </div>
          <div class="input-group-custom">
            <label>Your Review / Testimonial *</label>
            <textarea id="rev-text" class="input-custom" rows="3" placeholder="How did RI Creative Agency help your brand or project?" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Publish Review</button>
        </form>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById("review-submit-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const rating = parseInt(document.getElementById("rev-rating")?.value || "5", 10);
    const clientName = document.getElementById("rev-client-name")?.value.trim();
    const serviceTag = document.getElementById("rev-service-tag")?.value.trim();
    const text = document.getElementById("rev-text")?.value.trim();

    if (window.RIApiService) {
      window.RIApiService.addReview({ rating, clientName, serviceTag, text });
    }

    if (window.showToast) window.showToast("Review submitted successfully! Thank you.", "✓");
    window.closeReviewModal();
  });
}

function openReviewModal() {
  document.getElementById("review-submit-modal")?.classList.add("active");
}

function closeReviewModal() {
  document.getElementById("review-submit-modal")?.classList.remove("active");
}

window.openReviewModal = openReviewModal;
window.closeReviewModal = closeReviewModal;

/**
 * 8. Before / After Interactive Comparison Slider
 */
function initBeforeAfterSliders() {
  const cards = document.querySelectorAll(".before-after-card");

  cards.forEach(card => {
    const wrap = card.querySelector(".comparison-images-wrap");
    const afterImg = card.querySelector(".comp-img.after");
    const handle = card.querySelector(".comparison-slider-handle");

    if (!wrap || !afterImg || !handle) return;

    let isDown = false;

    const setPosition = (clientX) => {
      const rect = wrap.getBoundingClientRect();
      let offsetX = clientX - rect.left;
      if (offsetX < 0) offsetX = 0;
      if (offsetX > rect.width) offsetX = rect.width;
      const percentage = (offsetX / rect.width) * 100;

      afterImg.style.clipPath = `polygon(${percentage}% 0, 100% 0, 100% 100%, ${percentage}% 100%)`;
      handle.style.left = `${percentage}%`;
    };

    wrap.addEventListener("mousedown", (e) => {
      isDown = true;
      setPosition(e.clientX);
    });

    window.addEventListener("mouseup", () => { isDown = false; });
    window.addEventListener("mousemove", (e) => {
      if (isDown) setPosition(e.clientX);
    });

    wrap.addEventListener("touchstart", (e) => {
      isDown = true;
      if (e.touches[0]) setPosition(e.touches[0].clientX);
    });

    window.addEventListener("touchend", () => { isDown = false; });
    wrap.addEventListener("touchmove", (e) => {
      if (isDown && e.touches[0]) setPosition(e.touches[0].clientX);
    });
  });
}

/**
 * 9. Client Dashboard Controller (dashboard.html)
 */
function initDashboardController() {
  const container = document.getElementById("client-dashboard-orders-container");
  if (!container) return;

  const orders = window.RIApiService ? window.RIApiService.getOrders() : [];
  const metricsTotal = document.getElementById("dash-stat-total-orders");
  const metricsActive = document.getElementById("dash-stat-active-orders");
  const metricsDelivered = document.getElementById("dash-stat-delivered-orders");

  const activeCount = orders.filter(o => o.currentStage < 11).length;
  const deliveredCount = orders.filter(o => o.currentStage >= 10).length;

  if (metricsTotal) metricsTotal.textContent = orders.length;
  if (metricsActive) metricsActive.textContent = activeCount;
  if (metricsDelivered) metricsDelivered.textContent = deliveredCount;

  if (orders.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 2rem; color: var(--text-muted);">
          No active projects found. <a href="start-project.html" style="color: var(--brand-primary); font-weight: 700;">Start a Project Now →</a>
        </td>
      </tr>
    `;
    return;
  }

  container.innerHTML = orders.map(ord => {
    const isDone = ord.currentStage >= 10;
    const badgeClass = isDone ? 'ticket-badge-status status-resolved' : 'ticket-badge-status status-open';
    const stageLabel = `Stage ${ord.currentStage || 1}: ${ord.currentStageName || 'In Progress'}`;

    return `
      <tr>
        <td><strong style="font-family: var(--font-mono); color: var(--brand-primary);">${ord.id}</strong></td>
        <td>
          <div style="font-weight: 700; color: var(--text-primary);">${ord.serviceName}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">${ord.packageTier || 'Standard'}</div>
        </td>
        <td><span class="${badgeClass}">${stageLabel}</span></td>
        <td>${ord.estimatedDelivery || 'In Progress'}</td>
        <td>${ord.priceBDT || 'Quote'}</td>
        <td>
          <div style="display: flex; gap: 0.4rem;">
            <a href="track-order.html?order=${ord.id}" class="btn btn-secondary btn-sm">Track</a>
            <button class="btn btn-outline btn-sm" onclick="window.openRevisionModal('${ord.id}')">Revise</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

/**
 * 10. Admin Management Controller (admin.html)
 */
function initAdminController() {
  const container = document.getElementById("admin-orders-table-body");
  if (!container) return;

  const renderAdminOrders = () => {
    const orders = window.RIApiService ? window.RIApiService.getOrders() : [];
    const quotes = window.RIApiService ? window.RIApiService.getQuotes() : [];

    const statOrders = document.getElementById("admin-stat-orders");
    const statActive = document.getElementById("admin-stat-active");
    const statQuotes = document.getElementById("admin-stat-quotes");

    if (statOrders) statOrders.textContent = orders.length;
    if (statActive) statActive.textContent = orders.filter(o => o.currentStage < 11).length;
    if (statQuotes) statQuotes.textContent = quotes.length;

    container.innerHTML = orders.map(ord => {
      const stageOptions = [1,2,3,4,5,6,7,8,9,10,11].map(s => `
        <option value="${s}" ${ord.currentStage === s ? 'selected' : ''}>Stage ${s}</option>
      `).join("");

      return `
        <tr>
          <td><strong style="font-family: var(--font-mono);">${ord.id}</strong></td>
          <td>
            <div style="font-weight: 700;">${ord.clientName}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">${ord.clientPhone || ''}</div>
          </td>
          <td>${ord.serviceName}</td>
          <td>
            <select class="input-custom" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;" onchange="window.adminUpdateStage('${ord.id}', this.value)">
              ${stageOptions}
            </select>
          </td>
          <td>${ord.estimatedDelivery || 'In Progress'}</td>
          <td>
            <div style="display: flex; gap: 0.35rem;">
              <a href="track-order.html?order=${ord.id}" target="_blank" class="btn btn-secondary btn-sm" style="padding: 0.25rem 0.5rem;">View</a>
              <button class="btn btn-primary btn-sm" style="padding: 0.25rem 0.5rem; background: #10b981; border-color: #10b981;" onclick="window.adminAddDeliverablePrompt('${ord.id}')">+ File</button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  };

  window.adminUpdateStage = (orderId, newStage) => {
    if (window.RIApiService) {
      window.RIApiService.updateOrderStatus(orderId, parseInt(newStage, 10), `Updated by Rafiqul Islam to Stage ${newStage}`);
      if (window.showToast) window.showToast(`Order ${orderId} updated to Stage ${newStage}`, "✓");
      renderAdminOrders();
    }
  };

  window.adminAddDeliverablePrompt = (orderId) => {
    const title = prompt("Deliverable Title (e.g., Final Vector Logo Pack):");
    if (!title) return;
    const url = prompt("Asset URL (e.g. Google Drive link or file URL):", "https://drive.google.com");
    if (!url) return;

    if (window.RIApiService) {
      window.RIApiService.addDeliverable(orderId, { title, url, format: "ZIP / PDF" });
      if (window.showToast) window.showToast(`Deliverable attached to ${orderId}!`, "✓");
      renderAdminOrders();
    }
  };

  renderAdminOrders();
}



