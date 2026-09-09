/**
 * RI Creative Agency - Core Application Logic
 * Dark/Light Mode, Mobile Navigation, WhatsApp Routing, and UI Interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initColorPaletteCustomizer();
  initScrollHeader();
  initLiveClock();
  initLanguageSwitcher();
  initMobileNav();
  initMegaDropdown();
  initFaqAccordions();
  initWhatsAppLinks();
  initHeroCarousel();
  updateCurrentYear();
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

