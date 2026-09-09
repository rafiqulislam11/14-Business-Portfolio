/**
 * RI Creative Agency - Core Application Logic
 * Dark/Light Mode, Mobile Navigation, WhatsApp Routing, and UI Interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
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

