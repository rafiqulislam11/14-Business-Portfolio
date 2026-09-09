/**
 * RI Creative Agency - Central Data Store & Configuration
 * Single Source of Truth for Services, Platforms, Portfolio, FAQs, and Business Meta
 */

const SITE_DATA = {
  business: {
    name: "RI Creative Agency",
    shortName: "RI Agency",
    founder: "Rafiqul Islam",
    founderTitle: "Founder & Creative Digital Professional",
    phoneDisplay: "01310-824987",
    phoneClean: "8801310824987",
    email: "rafiqulislam.globalwork@gmail.com",
    website: "www.ricreativeagency.com",
    location: "Jamirdia, Hobirbari, Bhaluka, Mymensingh, Bangladesh",
    addressShort: "Jamirdia, Bhaluka, Mymensingh",
    tagline: "Creative Solutions. Digital Growth. Business Success.",
    supportingStatement: "Designing Brands, Building Digital Businesses & Creating Online Opportunities.",
    establishedYear: "2026",
    socialLinks: {
      facebook: "https://facebook.com/ricreativeagency",
      instagram: "https://instagram.com/ricreativeagency",
      linkedin: "https://linkedin.com/in/rafiqul-islam-ri",
      youtube: "https://youtube.com/@ricreativeagency",
      tiktok: "https://tiktok.com/@ricreativeagency",
      twitter: "https://x.com/ricreativeagency",
      pinterest: "https://pinterest.com/ricreativeagency",
      telegram: "https://t.me/ricreativeagency"
    }
  },

  // Helper for generating dynamic WhatsApp links
  getWhatsAppUrl(customText) {
    const defaultText = "Hello RI Creative Agency, I would like to know more about your services.";
    const text = customText || defaultText;
    return `https://wa.me/${this.business.phoneClean}?text=${encodeURIComponent(text)}`;
  },

  // 13 Master Service Categories with 20 Sub-Services Each
  services: [
    {
      id: "social-media",
      title: "Social Media Services",
      slug: "social-media.html",
      badge: "Organic & Paid Growth",
      category: "Marketing",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
      shortDescription: "Strategic branding, multi-platform account setup, tailored content creation, and audience engagement across 15+ major social networks.",
      ctaText: "Grow Your Social Presence",
      whatsappMsg: "Hello RI Creative Agency, I am interested in your Social Media Services for my business.",
      platforms: ["Facebook", "Instagram", "LinkedIn", "YouTube", "TikTok", "X / Twitter", "Pinterest", "Snapchat", "Threads", "Reddit", "Telegram", "WhatsApp Business", "Discord", "Quora", "Medium"],
      subServices: [
        "Social Media Account Setup",
        "Profile Optimization & Audit",
        "Business Page Architecture",
        "Social Media Brand Identity",
        "Content Strategy & Theme Planning",
        "Monthly Content Calendar Planning",
        "High-Converting Post Design",
        "Persuasive Caption Writing",
        "Targeted Hashtag Research",
        "Reels & Shorts Growth Strategy",
        "YouTube Video & Channel SEO",
        "LinkedIn Personal Profile Optimization",
        "LinkedIn Business Page Branding",
        "Organic Audience Growth Strategy",
        "Community Engagement & Interaction",
        "Paid Social Media Ad Campaign Support",
        "Targeted Lead Generation Setup",
        "In-depth Competitor Strategy Research",
        "Comprehensive Social Media Management",
        "Monthly Analytics & Content Reporting"
      ],
      problemsSolved: [
        "Inconsistent posting and lack of content strategy",
        "Unprofessional looking social media profiles that fail to convert visitors",
        "Low engagement and stagnant organic follower growth",
        "Time constraints preventing regular multi-platform community management"
      ],
      benefits: [
        "Cohesive visual branding across all personal or company profiles",
        "Predictable content calendars with ready-to-publish graphics and captions",
        "Increased brand credibility and direct social inquiries",
        "Time saved through structured workflow and monthly scheduling"
      ],
      process: [
        { step: "01", title: "Brand Discovery", desc: "Audit existing profiles and define target audience persona." },
        { step: "02", title: "Visual & Content Blueprint", desc: "Develop templates, color schemes, tone of voice, and monthly themes." },
        { step: "03", title: "Production & Optimization", desc: "Design high-resolution posts, write captions, and optimize bios/keywords." },
        { step: "04", title: "Publishing & Review", desc: "Schedule posts, monitor audience interaction, and deliver analytics." }
      ],
      faqs: [
        { q: "Which platforms do you support?", a: "We work across Facebook, Instagram, LinkedIn, YouTube, TikTok, X, Pinterest, WhatsApp Business, Threads, and more." },
        { q: "Do you provide graphic design for posts?", a: "Yes, every package includes custom-branded graphic designs and short-form video strategies." },
        { q: "Do you guarantee specific follower numbers?", a: "No. We do not make artificial or bot-based follower claims. We focus on authentic branding and targeted engagement that builds genuine business relationships." }
      ]
    },

    {
      id: "marketplace",
      title: "Active Marketplace Services",
      slug: "marketplace.html",
      badge: "Freelance & Marketplace",
      category: "Freelancing",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
      shortDescription: "Professional profile setup, gig creation, SEO optimization, and winning proposal strategies for Fiverr, Upwork, Freelancer, and top global platforms.",
      ctaText: "Start Selling Online",
      whatsappMsg: "Hello RI Creative Agency, I am interested in Active Marketplace Services to optimize my freelance profile.",
      platforms: ["Fiverr", "Upwork", "Freelancer", "PeoplePerHour", "Guru", "Contra", "Toptal", "99designs", "DesignCrowd", "Workana", "Truelancer", "Legiit"],
      subServices: [
        "Fiverr Profile Setup & Verification Guidance",
        "Fiverr High-Converting Gig Creation",
        "Fiverr Gig SEO & Keyword Placement",
        "Fiverr Gig Thumbnail & Video Design",
        "Upwork Profile Architecture & Setup",
        "Upwork Profile Overview & Title Optimization",
        "Upwork Customized Winning Proposal Writing",
        "Freelancer.com Complete Profile Setup",
        "Interactive Digital Portfolio Showcase Creation",
        "Tiered Service Package & Pricing Strategy",
        "Marketplace High-Demand Keyword Research",
        "Marketplace Competitor & Top Seller Analysis",
        "Product/Service Listing Optimization",
        "Listing Description & FAQ Drafting",
        "Strategic Package Pricing Formulation",
        "Professional Marketplace Branding & Badging",
        "Client Communication & Inquiry Guidance",
        "Freelance Lead Generation Strategy",
        "Marketplace Business Consultation",
        "Ongoing Profile Maintenance & Updates"
      ],
      problemsSolved: [
        "New freelancer profiles getting zero impressions or clicks",
        "Poorly structured gig titles, descriptions, and weak keywords",
        "Weak proposals that get ignored by international clients",
        "Unclear pricing tiers and lack of professional portfolio presentation"
      ],
      benefits: [
        "SEO-optimized gig descriptions matching exact buyer search queries",
        "Eye-catching gig thumbnails designed for maximum click-through rate",
        "Structured proposals highlighting value and client-specific problem solving",
        "Complete compliance with marketplace terms of service"
      ],
      process: [
        { step: "01", title: "Skill & Niche Assessment", desc: "Identify your strongest marketable skills and competitive advantage." },
        { step: "02", title: "Market & Keyword Research", desc: "Analyze high-performing competitors and buyer search intent." },
        { step: "03", title: "Profile & Gig Asset Creation", desc: "Draft bio, service tiers, descriptions, portfolio cards, and thumbnails." },
        { step: "04", title: "Launch & Proposal Blueprint", desc: "Publish optimized listings and implement proposal templates." }
      ],
      faqs: [
        { q: "Do you guarantee orders or income on Fiverr/Upwork?", a: "No legitimate service can guarantee orders or income. Marketplace success depends on buyer demand, your responsiveness, quality of work, and ongoing delivery." },
        { q: "Can you help me write custom Upwork proposals?", a: "Yes, we formulate tailored proposal structures and cover letter templates tailored to your specific service niche." }
      ]
    },

    {
      id: "ecommerce-marketplaces",
      title: "E-Commerce & Digital Marketplace Services",
      slug: "marketplace.html",
      badge: "Store Setup & Optimization",
      category: "E-Commerce",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
      shortDescription: "Complete store setup, product research, high-converting descriptions, mockups, and SEO across Etsy, Shopify, eBay, Gumroad, and creative hubs.",
      ctaText: "Build Your Online Store",
      whatsappMsg: "Hello RI Creative Agency, I want to build or optimize my E-Commerce / Digital Product Store.",
      platforms: ["Amazon", "Etsy", "eBay", "Shopify", "WooCommerce", "Redbubble", "TeePublic", "Society6", "Creative Market", "Creative Fabrica", "Design Bundles", "Envato", "Gumroad", "Payhip", "Sellfy"],
      subServices: [
        "Online Store Setup & Configuration",
        "Store Visual Branding & Banner Design",
        "Accurate Product Listing & Cataloging",
        "High-Converting Product Description Writing",
        "In-depth Keyword & Search Tag Research",
        "Profitable Product Research & Validation",
        "Search Engine Optimization (SEO) for Listings",
        "Digital Product Files Preparation & Licensing",
        "Photorealistic Product Mockup Generation",
        "Store Navigation & Category Optimization",
        "Product Variation & Inventory Configuration",
        "Listing Title & Bullet Points SEO Optimization",
        "Product Feature Graphics & Infographics",
        "Backend Metadata & Tag Configuration",
        "Multi-Platform Marketing Strategy Planning",
        "Google Analytics & Basic Tracking Setup",
        "Checkout & Conversion Rate Optimization",
        "Ongoing Store Maintenance & Catalog Updates",
        "Listing Content Refresh & Seasonal Updates",
        "1-on-1 Marketplace Business Consultation"
      ],
      problemsSolved: [
        "Overwhelming technical hurdles when launching an online or digital store",
        "Dull product listings with poor photography, descriptions, or tags",
        "Lack of clarity on digital file delivery and licensing setups",
        "Zero organic search visibility within competitive marketplace algorithms"
      ],
      benefits: [
        "Clean, professional storefront that builds immediate customer trust",
        "Search-optimized product tags and keyword-rich descriptions",
        "Ready-to-deliver digital product zip packages and download templates",
        "Streamlined customer purchasing experience from search to checkout"
      ],
      process: [
        { step: "01", title: "Platform Selection", desc: "Select the ideal marketplace (Etsy, Gumroad, Shopify) for your product types." },
        { step: "02", title: "Store Branding", desc: "Design logos, banners, policy pages, and cohesive store aesthetics." },
        { step: "03", title: "Listing Creation", desc: "Produce mockups, write SEO titles, bullet points, and description copy." },
        { step: "04", title: "Launch & Analytics", desc: "Publish verified listings and configure store analytics." }
      ],
      faqs: [
        { q: "Can I sell digital products like templates and graphics?", a: "Yes, we specialize in digital product stores on Gumroad, Etsy, Payhip, and Creative Market." },
        { q: "Do you provide product mockups?", a: "Yes, we generate premium photorealistic mockups on modern devices and print materials." }
      ]
    },

    {
      id: "passive-income",
      title: "Passive Income Site Services",
      slug: "passive-income.html",
      badge: "Digital Assets & Web Properties",
      category: "Web Publishing",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
      shortDescription: "Architecting sustainable digital assets, niche blogs, affiliate portals, resource directories, and ad-monetized content properties with responsible standards.",
      ctaText: "Build Your Digital Asset",
      whatsappMsg: "Hello RI Creative Agency, I want to build a content website/digital asset for long-term growth.",
      platforms: ["WordPress", "Blogger", "Wix", "Webflow", "Framer", "Squarespace", "Shopify", "WooCommerce"],
      subServices: [
        "Niche Authority Website Architecture",
        "High-Performance Blog Website Setup",
        "Affiliate Marketing Comparison Website",
        "Ad-Monetization Optimized Content Site",
        "Digital Download & Template Website",
        "Online Course & Learning Portal Structure",
        "Subscription & Membership Site Framework",
        "Curated Resource & Tools Directory Site",
        "Local Business Directory Website",
        "High-Conversion Lead Generation Site",
        "Software / Asset Download Landing Pages",
        "Personal Branding & Creator Hub",
        "Company Business Presence Website",
        "High-Converting Sales Landing Page",
        "Complete On-Page & Technical SEO Setup",
        "Targeted Keyword Search Intent Research",
        "Editorial Content Strategy & Silo Planning",
        "Google Search Console & Bing Webmaster Setup",
        "Google Analytics 4 & Event Tracking Setup",
        "Website Security, Backup & Maintenance"
      ],
      problemsSolved: [
        "Starting websites without a clear monetization architecture",
        "Slow, unoptimized themes that fail Google Core Web Vitals",
        "Missing search console setups and unindexed pages",
        "Poor content hierarchy that confuses readers and search engines"
      ],
      benefits: [
        "Fast, mobile-responsive website built on dependable CMS platforms",
        "Structured content silos designed for natural organic search ranking",
        "Proper legal pages (Privacy Policy, Affiliate Disclosure, Terms)",
        "Turnkey setup with clean administrative management"
      ],
      process: [
        { step: "01", title: "Niche & Model Strategy", desc: "Select suitable monetization model (AdSense, Affiliate, Digital Product)." },
        { step: "02", title: "Site Architecture & Design", desc: "Configure domain, hosting, SSL, modern theme, and branding." },
        { step: "03", title: "SEO Silos & Sample Content", desc: "Build category silos, navigation menus, and publish initial pillar content." },
        { step: "04", title: "Compliance & Webmaster Launch", desc: "Submit XML sitemaps, verify analytics, and provide maintenance guides." }
      ],
      faqs: [
        { q: "Is passive income guaranteed?", a: "No income is guaranteed. Results vary by niche, content quality, traffic, marketing strategy, and platform policies. We build the professional digital infrastructure; growth requires consistent value delivery." },
        { q: "Which CMS is best for a content website?", a: "WordPress is generally the most versatile and scalable for content and affiliate sites, though Blogger, Wix, or Framer can be ideal depending on your budget and preferences." }
      ]
    },

    {
      id: "amazon-kdp",
      title: "Amazon KDP Services",
      slug: "amazon-kdp.html",
      badge: "Kindle & Print Publishing",
      category: "Publishing",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
      shortDescription: "End-to-end self-publishing support on Amazon KDP: niche research, manuscript formatting, interior layout, cover design, and listing upload.",
      ctaText: "Publish Your Book",
      whatsappMsg: "Hello RI Creative Agency, I am interested in your Amazon KDP Publishing Services.",
      platforms: ["Amazon KDP", "Kindle Direct Publishing", "Createspace/Amazon Print", "Audible Audio", "IngramSpark", "Draft2Digital"],
      subServices: [
        "Comprehensive KDP Niche & Market Research",
        "High-Demand Low-Competition Niche Identification",
        "KDP Targeted 7 Backend Keyword Research",
        "Compelling Book Title & Subtitle Optimization",
        "HTML-Formatted Book Description Writing",
        "Amazon Category & Metadata Strategy",
        "Manuscript Proofing & Layout Preparation",
        "Kindle eBook Responsive Formatting (EPUB/KPF)",
        "Paperback Print-Ready PDF Formatting",
        "Hardcover Case-Laminate Print Formatting",
        "Custom Book Interior Layout & Typography",
        "High-Resolution Print & eBook Cover Design",
        "Guided Journal & Prompt Book Creation",
        "Productivity Planner & Logbook Design",
        "Children & Adult Coloring Book Creation",
        "Low-Content Notebook & Sketchbook Design",
        "Medium-Content Activity & Puzzle Book Design",
        "Amazon KDP Step-by-Step Upload Support",
        "A+ Content Brand Showcase Banner Design",
        "Author Central Profile Setup & Optimization"
      ],
      problemsSolved: [
        "Rejection by Amazon KDP due to margin, bleed, or spine calculation errors",
        "Unprofessional covers that fail to stand out in Amazon search results",
        "Selecting over-saturated niches with zero organic discovery",
        "Complex eBook formatting bugs causing distorted layout on Kindle devices"
      ],
      benefits: [
        "100% KDP-compliant interior and cover PDF files guaranteed to pass review",
        "Professional commercial typography with proper gutters, bleeds, and headers",
        "Optimized 7-keyword slots and category mapping for search discovery",
        "Complete publishing guidance from file prep to live publication"
      ],
      process: [
        { step: "01", title: "Niche & Keyword Blueprint", desc: "Research market demand, customer reviews, and competitors on Amazon." },
        { step: "02", title: "Interior Layout & Typesetting", desc: "Format clean margins, page numbers, headers, and chapter art." },
        { step: "03", title: "Cover Design & Spine Calculator", desc: "Design front, back, and spine matching exact page count specifications." },
        { step: "04", title: "Upload & Quality Approval", desc: "Guide uploading to KDP dashboard, previewing files, and hitting publish." }
      ],
      faqs: [
        { q: "Do you guarantee book sales or Amazon bestseller rank?", a: "No. We never guarantee book sales or ranking. Amazon sales depend on market interest, your book's topic, marketing, and reviews. We ensure technical perfection and professional presentation." },
        { q: "What files do you deliver?", a: "We deliver print-ready PDF files for paperback/hardcover covers and interiors, plus EPUB/KPF files for Kindle eBooks." }
      ]
    },

    {
      id: "creative-design",
      title: "Creative & Graphic Design Services",
      slug: "creative-design.html",
      badge: "Brand Identity & Visuals",
      category: "Design",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
      shortDescription: "Distinctive logo design, complete corporate identity, marketing collateral, social graphics, book covers, and vector artwork designed to build memorable brands.",
      ctaText: "Create My Brand",
      whatsappMsg: "Hello RI Creative Agency, I would like to create a brand design / graphic project.",
      platforms: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva Pro", "InDesign", "Vector Formats (AI, EPS, SVG, PDF)"],
      subServices: [
        "Unique Custom Logo Design & Concepts",
        "Complete Brand Identity & Style Guidelines",
        "Luxury Business Card & Stationery Design",
        "Corporate Promotional Flyer Design",
        "Multi-page Tri-fold & Bi-fold Brochure Design",
        "High-Impact Marketing Poster Design",
        "Digital & Billboard Banner Design",
        "Social Media Post & Story Templates",
        "High-CTR YouTube Thumbnail Design",
        "YouTube Channel Art & Banner Design",
        "Facebook Page Header & Event Cover",
        "Instagram Grid & Carousel Aesthetic Design",
        "Modern Product Label & Packaging Design",
        "Box, Bottle & Pouch Packaging Graphics",
        "Commercial Book Cover & Novel Design",
        "Amazon KDP Paperback & Hardcover Design",
        "Corporate PowerPoint Presentation Design",
        "Data Visualization & Infographic Design",
        "Vector Redraw & High-Res Image Tracing",
        "Print-Ready CMYK Design Production"
      ],
      problemsSolved: [
        "Generic, clip-art logos that don't convey authority or trust",
        "Pixelated low-resolution graphics unsuitable for print",
        "Inconsistent brand colors and fonts across marketing channels",
        "Low click-through rates on YouTube videos and social promotions"
      ],
      benefits: [
        "100% custom vector files that can be scaled infinitely without quality loss",
        "Full commercial rights and source files (AI, PSD, PDF, PNG, SVG)",
        "Harmonious color palettes and typography rules for your business",
        "Fast turnaround with dedicated revisions"
      ],
      process: [
        { step: "01", title: "Creative Brief", desc: "Clarify brand essence, target audience, and visual references." },
        { step: "02", title: "Concept Exploration", desc: "Design distinct visual directions and initial mockups." },
        { step: "03", title: "Refinement & Details", desc: "Polish typography, geometry, color palettes, and alignments." },
        { step: "04", title: "Master File Delivery", desc: "Export ready-to-use print CMYK and screen RGB files with source assets." }
      ],
      faqs: [
        { q: "Do you deliver vector source files?", a: "Yes, you receive AI, EPS, SVG, PDF, and high-resolution transparent PNG files." },
        { q: "Can I use the design commercially?", a: "Yes, you own full commercial usage rights for all approved custom designs." }
      ]
    },

    {
      id: "website-seo",
      title: "Website Design & Development",
      slug: "website-seo.html",
      badge: "Modern Web & Tech",
      category: "Development",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
      shortDescription: "Fast, responsive, mobile-friendly websites, corporate portfolios, e-commerce stores, and landing pages engineered for speed and search engine visibility.",
      ctaText: "Build My Website",
      whatsappMsg: "Hello RI Creative Agency, I am interested in building a modern Website for my business.",
      platforms: ["HTML5 / CSS3 / Modern JS", "WordPress", "WooCommerce", "Shopify", "Webflow", "PHP / Static Generators"],
      subServices: [
        "Modern Corporate Business Website",
        "Creative Agency & Freelancer Portfolio",
        "Full-Featured Agency Web Architecture",
        "E-Commerce Online Store Development",
        "High-Converting Product Landing Page",
        "Custom WordPress Theme Configuration",
        "Content & Editorial Blog Website Setup",
        "Affiliate & Review Website Development",
        "Amazon KDP Author & Book Showcase Website",
        "Personal Brand & Executive Web Profile",
        "Online Coaching & Education Website",
        "Local Service & Clinic Business Website",
        "Fully Fluid Responsive Mobile Layouts",
        "Modern UI/UX Prototyping & Interface Design",
        "Complete Website Redesign & Modernization",
        "On-Page Technical SEO Architecture Setup",
        "Speed Optimization & Core Web Vitals Fixes",
        "Mobile-First Touch Navigation Optimization",
        "Security Hardening, SSL & Backup Setup",
        "1-on-1 Website Architecture Consultation"
      ],
      problemsSolved: [
        "Outdated websites that look broken or distorted on modern mobile devices",
        "Slow loading speeds that cause visitors to bounce before seeing your offer",
        "Lack of clear call-to-action buttons leading to lost customer leads",
        "Cluttered code and lack of basic meta tags preventing search indexing"
      ],
      benefits: [
        "Lightweight, clean semantic code delivering near-instant page loads",
        "Tailored conversion paths pointing visitors directly to your WhatsApp and email",
        "Search engine friendly structure with clean URLs and schema readiness",
        "Easy content updating and ongoing maintenance support"
      ],
      process: [
        { step: "01", title: "Structure & Wireframe", desc: "Plan sitemap, content sections, user journey, and CTA placement." },
        { step: "02", title: "UI/UX Styling", desc: "Design custom visual system, typography, colors, and responsive layouts." },
        { step: "03", title: "Development & Optimization", desc: "Build clean code, interactive features, speed optimization, and forms." },
        { step: "04", title: "Quality Audit & Launch", desc: "Test across desktop, tablet, and mobile browsers before live deployment." }
      ],
      faqs: [
        { q: "Will my website work properly on mobile phones?", a: "Yes, every website is built mobile-first and tested rigorously on all screen sizes." },
        { q: "Can I connect my own domain name?", a: "Yes, we help you connect custom domains, SSL certificates, and hosting environments." }
      ]
    },

    {
      id: "seo-marketing",
      title: "SEO & Digital Marketing",
      slug: "website-seo.html",
      badge: "Search & Visibility",
      category: "Marketing",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
      shortDescription: "Strategic search engine optimization, keyword research, local search visibility, and digital marketing strategies to reach qualified prospective clients.",
      ctaText: "Grow My Business",
      whatsappMsg: "Hello RI Creative Agency, I want to improve my SEO and Digital Marketing visibility.",
      platforms: ["Google Search", "Google Search Console", "Google Analytics 4", "Bing Webmaster", "YouTube SEO", "Local Maps"],
      subServices: [
        "Comprehensive Website SEO Audit",
        "On-Page Content & Heading Structure SEO",
        "Technical SEO & Crawl Error Remediation",
        "Search Intent & Keyword Difficulty Research",
        "Content Gap & Pillar Strategy SEO",
        "Google Business Profile & Local Search SEO",
        "Social Media Organic Marketing Strategy",
        "Content Marketing & Editorial Strategy",
        "Digital Marketing Roadmap Development",
        "Competitor Traffic & Keyword Analysis",
        "Google Search Console Indexing Setup",
        "Google Analytics 4 Event & Goal Tracking",
        "Meta Title, Description & OpenGraph Optimization",
        "Image Compression & Descriptive Alt Tag SEO",
        "Internal Linking Architecture Planning",
        "YouTube Video Tags, Descriptions & SEO",
        "Marketplace & E-Commerce Listing SEO",
        "Conversion Funnel & Landing Page Optimization",
        "Organic B2B & B2C Lead Generation Setup",
        "Strategic Digital Marketing Consultation"
      ],
      problemsSolved: [
        "Websites not appearing when potential customers search for relevant services",
        "Targeting overly competitive keywords that take years to rank",
        "Missing Google Search Console setup resulting in uncrawled pages",
        "High traffic with zero inquiries due to weak conversion optimization"
      ],
      benefits: [
        "Targeted keyword roadmap focused on high-intent buyer queries",
        "Clean technical foundation ensuring search engine bots index every page",
        "Enhanced local discovery for clients seeking services in your area",
        "Data-driven insights via properly configured Google Analytics 4"
      ],
      process: [
        { step: "01", title: "SEO Baseline Audit", desc: "Evaluate existing site health, indexing status, and keyword rankings." },
        { step: "02", title: "Keyword & Competitor Mapping", desc: "Identify low-difficulty, high-conversion commercial keywords." },
        { step: "03", title: "On-Page & Technical Fixes", desc: "Optimize headers, meta tags, schema, speed, and internal links." },
        { step: "04", title: "Performance Review", desc: "Monitor search impressions, clicks, and conversion improvements." }
      ],
      faqs: [
        { q: "Do you guarantee #1 ranking on Google?", a: "No reputable SEO professional guarantees #1 rankings. Google's algorithm evaluates hundreds of dynamic signals. We apply proven, ethical white-hat SEO best practices." },
        { q: "How long does SEO take to show results?", a: "Search engine indexing and rank accumulation typically takes several weeks to months of continuous quality content and optimization." }
      ]
    },

    {
      id: "career-services",
      title: "Professional / Career Services",
      slug: "career-services.html",
      badge: "Career & Identity",
      category: "Professional",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>`,
      shortDescription: "Executive CV writing, modern resume design, ATS optimization, LinkedIn profile branding, professional bio drafting, and executive presentations.",
      ctaText: "Upgrade My Professional Profile",
      whatsappMsg: "Hello RI Creative Agency, I want to upgrade my CV / LinkedIn / Professional Profile.",
      platforms: ["ATS Systems", "LinkedIn", "Microsoft Word", "Google Docs", "Adobe InDesign", "PowerPoint / Keynote"],
      subServices: [
        "Professional CV Writing & Structuring",
        "Modern Clean Resume Layout Design",
        "ATS (Applicant Tracking System) CV Optimization",
        "Persuasive Job Application Cover Letter",
        "LinkedIn Profile Complete Optimization",
        "LinkedIn Executive Personal Branding",
        "Corporate Job Application Advisory",
        "Online International Job Application Guidance",
        "Freelancer Marketplace Bio & Profile Setup",
        "Visual Career Portfolio Creation",
        "Executive Personal Branding Blueprint",
        "Compelling Professional Biography Writing",
        "Client Proposal & Quotation Letter Drafting",
        "Document Formatting & Typographic Styling",
        "Interactive PDF Editing & Form Creation",
        "High-Speed Accurate Data Entry Services",
        "Microsoft Excel Spreadsheets & Formulas",
        "Executive PowerPoint Slide Deck Design",
        "Corporate Document & Report Layout",
        "Career Identity & Digital Presence Setup"
      ],
      problemsSolved: [
        "Unformatted, wordy resumes rejected automatically by ATS software",
        "Generic cover letters that fail to highlight unique candidate value",
        "Incomplete LinkedIn profiles that recruiters overlook",
        "Disorganized spreadsheets and unformatted business documents"
      ],
      benefits: [
        "Clean, elegant ATS-friendly formatting that passes automated screenings",
        "Impact-driven bullet points emphasizing quantifiable accomplishments",
        "Polished LinkedIn banner and headline that attract relevant opportunities",
        "Editable source files (DOCX, PDF, PPTX) for easy personal updates"
      ],
      process: [
        { step: "01", title: "Career Consultation", desc: "Gather career history, achievements, target job roles, and industries." },
        { step: "02", title: "Content Drafting", desc: "Write impact-oriented descriptions, skill summaries, and ATS keywords." },
        { step: "03", title: "Visual Typography & Styling", desc: "Format with modern, clean executive typography and clear sectioning." },
        { step: "04", title: "Review & Source Delivery", desc: "Deliver ATS-ready PDF and editable Word DOCX files." }
      ],
      faqs: [
        { q: "Is the CV compatible with ATS (Applicant Tracking Systems)?", a: "Yes, we structure resumes with standard headings, single-column parsing, and keyword matching to ensure maximum ATS compatibility." },
        { q: "Do you deliver an editable file?", a: "Yes, you receive both print-ready PDF and editable Microsoft Word/DOCX formats." }
      ]
    },

    {
      id: "print-photo",
      title: "Photo / Print / Local Digital Services",
      slug: "print-photo.html",
      badge: "Studio & Print",
      category: "Studio",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
      shortDescription: "Studio-quality photo editing, passport/ID sizing, background removal, document scanning, color/B&W printing, and design-to-print production.",
      ctaText: "Get Creative & Print Service",
      whatsappMsg: "Hello RI Creative Agency, I need Photo Editing or Printing / Local Digital Services.",
      platforms: ["Studio Printing", "Adobe Photoshop", "Epson / Canon Precision Print", "High-DPI Flatbed Scanning"],
      subServices: [
        "Official Passport Photo Sizing & Preparation",
        "Professional Portrait Photo Retouching",
        "Precision Background Removal & Transparent PNG",
        "Facial Blemish & Lighting Skin Retouching",
        "National ID / Visa Photo Specification Setup",
        "High-Quality Document Laser Printing",
        "Vibrant Color Graphic & Photo Printing",
        "Crisp Black & White High-Volume Printing",
        "Business Card & Badge Printing Support",
        "Flyer, Leaflet & Marketing Material Printing",
        "Event Poster & Presentation Printing",
        "Professional CV / Resume Crisp Printing",
        "Document Thermal Lamination & Sealing",
        "High-Resolution Multi-page Document Scanning",
        "Official Document Formatting & Digitalization",
        "Digital Photo Restoration & Enhancements",
        "Creative Design-to-Print Preparation",
        "CMYK Color Calibration for Print Houses",
        "Local Photo Studio Consultation Support",
        "Document Logistics & Courier Bagging"
      ],
      problemsSolved: [
        "Visa or passport photos rejected for incorrect dimensions or background lighting",
        "Low quality prints with washed-out colors or blurry text",
        "Faded or damaged physical photos needing digital preservation",
        "Need for fast, reliable local printing and document sealing"
      ],
      benefits: [
        "Exact visa & passport specifications for international embassies and government portals",
        "Studio-calibrated color printing on premium paper stock",
        "Archival document scanning to searchable PDF formats",
        "Fast local turnaround in Jamirdia, Bhaluka, Mymensingh"
      ],
      process: [
        { step: "01", title: "Asset Intake", desc: "Receive physical document or digital file via WhatsApp/Email." },
        { step: "02", title: "Digital Pre-Press & Retouching", desc: "Adjust lighting, crop to specifications, and set 300 DPI resolution." },
        { step: "03", title: "Print / Digital Export", desc: "Print on calibrated photo paper or export high-res digital files." },
        { step: "04", title: "Collection or Dispatch", desc: "Handover in studio or package for secure courier dispatch." }
      ],
      faqs: [
        { q: "Where are local print and studio services provided?", a: "Directly from our studio location in Jamirdia, Hobirbari, Bhaluka, Mymensingh." },
        { q: "Can you prepare visa photos for specific embassies?", a: "Yes, we format to exact measurements (2x2 inch, 35x45 mm, white or blue background) as required by foreign embassies." }
      ]
    },

    {
      id: "job-applications",
      title: "Online Job Application Services",
      slug: "job-applications.html",
      badge: "Form & Circular Support",
      category: "Assistance",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
      shortDescription: "Guidance on government and private job circulars, accurate online application form filling, digital signature/photo formatting, and admit card download assistance.",
      ctaText: "Apply Online",
      whatsappMsg: "Hello RI Creative Agency, I need assistance with an Online Job Application.",
      platforms: ["Government Recruitment Portals (Teletalk/BPSC)", "Private Corporate Portals", "Bank Recruitment Systems"],
      subServices: [
        "Job Circular Eligibility & Requirement Guidance",
        "Online Application Portal Form Assistance",
        "Accurate Application Form Data Entry",
        "Required Educational & Work Document Preparation",
        "CV & Experience Certificate File Uploads",
        "Exact 300x300 Photo & 300x80 Signature Resizing",
        "Pre-Submission Application Review & Verification",
        "Application Fee Payment Guidance & Verification",
        "Application Tracking & User ID / PIN Safeguarding",
        "Admit Card Download & Print Guidance",
        "Applicant Professional Email Communication",
        "Correction & Re-submission Advisory Support"
      ],
      problemsSolved: [
        "Confusing online portal interfaces leading to data entry mistakes",
        "Application rejections caused by wrong photo or signature pixel dimensions",
        "Missed deadlines due to payment SMS or server issues",
        "Lost applicant tracking credentials or confusion regarding admit cards"
      ],
      benefits: [
        "Meticulous verification of all personal and academic records before submission",
        "Exact pixel and kilobyte image compression compliant with government servers",
        "Clear record keeping of User ID, password, and transaction confirmation",
        "Prompt assistance when admit cards are released"
      ],
      process: [
        { step: "01", title: "Circular Review", desc: "Check deadlines, age limits, and eligibility criteria." },
        { step: "02", title: "Document & Photo Prep", desc: "Digitize and resize photo, signature, and educational certificates." },
        { step: "03", title: "Careful Portal Entry", desc: "Fill all form fields accurately and cross-check information." },
        { step: "04", title: "Submission & Confirmation", desc: "Download applicant copy, assist fee payment, and store credentials." }
      ],
      faqs: [
        { q: "Do you guarantee job selection or interview calls?", a: "No. We never claim guaranteed job selection. Our service assists strictly with accurate form filling, technical document preparation, and submission compliance." },
        { q: "How do I provide my documents?", a: "You can send clear photos of your certificates via WhatsApp or bring physical copies to our office." }
      ]
    },

    {
      id: "courier-support",
      title: "Courier / Delivery Support",
      slug: "courier-support.html",
      badge: "Logistics & Shipping",
      category: "Logistics",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
      shortDescription: "Professional document courier preparation, parcel packaging, correct address formatting, shipping label generation, and dispatch tracking assistance.",
      ctaText: "Prepare My Delivery",
      whatsappMsg: "Hello RI Creative Agency, I need Courier / Delivery Support for my document/parcel.",
      platforms: ["SA Paribahan", "Sundarban Courier", "Steadfast", "RedX", "Paperfly", "eCourier", "DHL / FedEx"],
      subServices: [
        "Confidential Document Courier Preparation",
        "Secure Parcel & Merchandise Packaging",
        "Standardized Recipient Address Formatting",
        "Professional Barcode & Shipping Label Printing",
        "Courier Service Selection & Booking Assistance",
        "Packaging Material & Cushioning Guidance",
        "Real-Time Delivery Consignment Tracking",
        "Business Merchant Parcel Support & Dispatch",
        "Proof of Delivery Verification Follow-up",
        "Return & Exchange Logistics Advisory"
      ],
      problemsSolved: [
        "Parcels returned or delayed due to unclear handwriting or incorrect postal codes",
        "Fragile documents damaged in transit due to inadequate moisture-proofing",
        "Difficulty generating digital shipping labels or tracking consignments"
      ],
      benefits: [
        "Waterproof sealing and tamper-evident packaging",
        "Clean, legible printed address labels with contact details",
        "Assistance choosing the fastest and most economical courier provider",
        "Digital tracking link sent directly to your WhatsApp"
      ],
      process: [
        { step: "01", title: "Item Assessment", desc: "Review package weight, contents, destination, and urgency." },
        { step: "02", title: "Packaging & Sealing", desc: "Wrap securely with protective materials and weather-resistant envelopes." },
        { step: "03", title: "Label Generation", desc: "Print standardized address label and consignment documentation." },
        { step: "04", title: "Booking & Tracking", desc: "Submit to courier hub and provide tracking number to client." }
      ],
      faqs: [
        { q: "Which courier services do you work with?", a: "We work with all major Bangladeshi couriers including Sundarban, SA Paribahan, Steadfast, RedX, and international shipping agents." },
        { q: "Can you prepare business parcels for e-commerce deliveries?", a: "Yes, we format bulk merchant labels and prepare orders for courier pickup." }
      ]
    },

    {
      id: "training-consultation",
      title: "Training & Consultation",
      slug: "training-consultation.html",
      badge: "Knowledge & Skills",
      category: "Education",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
      shortDescription: "Practical 1-on-1 mentorship and foundational skills training in graphic design, digital marketing, freelancing, Amazon KDP, and online business strategy.",
      ctaText: "Book a Consultation",
      whatsappMsg: "Hello RI Creative Agency, I want to book a Training or 1-on-1 Consultation session.",
      platforms: ["Google Meet", "Zoom", "WhatsApp Voice/Video", "In-Person (Studio)", "Interactive Screen Sharing"],
      subServices: [
        "Practical Graphic Design Essentials Training",
        "Digital Marketing Strategy & Ads Coaching",
        "Accurate Data Entry & Office Tools Training",
        "Modern Website Design & CMS Guidance",
        "Fiverr & Upwork Freelancing Fundamentals",
        "Marketplace Client Communication Coaching",
        "Social Media Branding & Growth Mentorship",
        "Amazon KDP Self-Publishing Roadmap Guidance",
        "Actionable White-Hat SEO Best Practices",
        "Online Business Model & Asset Consultation",
        "Personal Career & Freelance Goal Setting",
        "Portfolio Review & Constructive Critique"
      ],
      problemsSolved: [
        "Getting lost in confusing theoretical YouTube tutorials without actionable steps",
        "Fear of communicating with foreign clients on freelance platforms",
        "Unclear career direction in digital services and online business",
        "Lack of hands-on feedback on your portfolio or design projects"
      ],
      benefits: [
        "Direct guidance from an active practitioner (Rafiqul Islam)",
        "Step-by-step practical workflows rather than abstract theories",
        "Personalized feedback tailored to your individual pace and goals",
        "Action plan with recommended tools, resources, and next steps"
      ],
      process: [
        { step: "01", title: "Skill & Goal Diagnostic", desc: "Assess your current experience level and specific learning objective." },
        { step: "02", title: "Customized Session Plan", desc: "Structure focused topics and practical exercises." },
        { step: "03", title: "Live Interactive Session", desc: "Cover live workflows, tool demonstrations, and Q&A via screen share." },
        { step: "04", title: "Action Plan & Follow-Up", desc: "Receive summary notes, practice exercises, and follow-up support." }
      ],
      faqs: [
        { q: "Is training conducted online or offline?", a: "Both! We provide live online training via Google Meet/Zoom and in-person sessions at our Jamirdia, Bhaluka office." },
        { q: "Do you guarantee high income after taking training?", a: "No. Skill acquisition requires dedication, practice, and personal effort. We teach practical, industry-standard methods, but personal discipline determines your results." }
      ]
    }
  ],

  // Categorized Platforms Directory
  platformDirectory: [
    {
      category: "Social & Professional",
      description: "Platforms for building audience trust, brand visibility, and organic business reach.",
      items: [
        { name: "Facebook", tag: "Audience & Community", desc: "Pages, groups, business suites, and targeted marketing." },
        { name: "Instagram", tag: "Visual Branding", desc: "Feed aesthetics, carousels, reels, and influencer presence." },
        { name: "LinkedIn", tag: "B2B & Career", desc: "Executive profiles, company pages, and corporate networking." },
        { name: "YouTube", tag: "Video & SEO", desc: "Long-form channels, YouTube SEO, shorts, and video optimization." },
        { name: "TikTok", tag: "Short-Form Video", desc: "Viral video hooks, trend strategy, and community engagement." },
        { name: "X / Twitter", tag: "Thought Leadership", desc: "Real-time updates, industry commentary, and networking." },
        { name: "Pinterest", tag: "Visual Discovery", desc: "Product pins, blog traffic drivers, and visual bookmarks." },
        { name: "Snapchat", tag: "Engaged Youth", desc: "Filters, business accounts, and local geofilters." },
        { name: "Threads", tag: "Conversational", desc: "Text-first updates, brand voice, and community conversations." },
        { name: "Reddit", tag: "Niche Communities", desc: "Subreddit research, authentic community participation." },
        { name: "Telegram", tag: "Broadcast & Groups", desc: "VIP channels, subscriber broadcasts, and customer desks." },
        { name: "WhatsApp Business", tag: "Direct Conversion", desc: "Catalogs, automated replies, and fast sales closing." },
        { name: "Discord", tag: "Community Building", desc: "Member servers, community roles, and real-time voice/chat." },
        { name: "Quora", tag: "Q&A Authority", desc: "Expert answers, referral traffic, and brand authority." },
        { name: "Medium", tag: "Long-Form Articles", desc: "Content marketing, industry publication, and thought leadership." }
      ]
    },
    {
      category: "Freelancing Marketplaces",
      description: "Global marketplaces for offering professional freelance skills and winning international client contracts.",
      items: [
        { name: "Fiverr", tag: "Gig Marketplace", desc: "Fixed-price gigs, gig SEO, buyer requests, and pro badging." },
        { name: "Upwork", tag: "Talent Platform", desc: "Project catalogs, specialized profiles, and proposal pitching." },
        { name: "Freelancer.com", tag: "Contests & Bids", desc: "Project bidding, skill contests, and international projects." },
        { name: "PeoplePerHour", tag: "Hourly & Offers", desc: "Freelance offers, proposal credits, and European buyer focus." },
        { name: "Guru", tag: "Enterprise Freelance", desc: "Workrooms, safe pay agreements, and skill showcases." },
        { name: "Contra", tag: "Commission-Free", desc: "Modern portfolio-first freelance platform for creative pros." },
        { name: "Toptal", tag: "Top Tier Talent", desc: "Screening preparation and elite client positioning." },
        { name: "99designs", tag: "Design Contests", desc: "Design challenges, brand projects, and 1-to-1 client work." },
        { name: "DesignCrowd", tag: "Creative Bidding", desc: "Logo, print, and digital graphic design contests." },
        { name: "Workana", tag: "Latin America & Global", desc: "Regional freelance projects and multilingual positioning." },
        { name: "Truelancer", tag: "Emerging Markets", desc: "Global freelancing opportunities and gig packages." },
        { name: "Legiit", tag: "SEO & Digital Gigs", desc: "Specialized SEO, marketing, and web service marketplace." }
      ]
    },
    {
      category: "E-Commerce",
      description: "Leading platforms for selling physical products and establishing branded storefronts.",
      items: [
        { name: "Amazon", tag: "Global Retail", desc: "FBA, merchant listings, product optimization, and A+ content." },
        { name: "Etsy", tag: "Handmade & Digital", desc: "Handmade items, vintage products, craft supplies, and templates." },
        { name: "eBay", tag: "Auction & Fixed", desc: "Global retail listings, competitive pricing, and store setup." },
        { name: "Shopify", tag: "Standalone Store", desc: "Branded e-commerce, custom domains, and automated checkouts." },
        { name: "WooCommerce", tag: "Self-Hosted Store", desc: "WordPress e-commerce engine with complete ownership." }
      ]
    },
    {
      category: "Digital Products",
      description: "Direct platforms for distributing digital downloads, presets, software, and design assets.",
      items: [
        { name: "Gumroad", tag: "Creator Commerce", desc: "Simple checkout for eBooks, templates, presets, and software." },
        { name: "Payhip", tag: "Digital & Courses", desc: "Zero fee start, EU VAT handling, and instant file delivery." },
        { name: "Sellfy", tag: "Merch & Digital", desc: "All-in-one store for print-on-demand and digital downloads." },
        { name: "Creative Market", tag: "Design Marketplace", desc: "Curated marketplace for fonts, templates, graphics, and 3D." },
        { name: "Creative Fabrica", tag: "Craft & Graphics", desc: "Subscription downloads, crafter fonts, and SVG cut files." },
        { name: "Design Bundles", tag: "Bundled Assets", desc: "Discounted graphic bundles, illustrations, and craft resources." },
        { name: "Envato Elements / Market", tag: "Themes & Code", desc: "ThemeForest, CodeCanyon, and GraphicRiver ecosystems." }
      ]
    },
    {
      category: "Print-on-Demand (POD)",
      description: "Zero-inventory manufacturing networks for selling apparel, home decor, and merchandise worldwide.",
      items: [
        { name: "Redbubble", tag: "Global POD Hub", desc: "Artist stickers, apparel, phone cases, and artwork." },
        { name: "TeePublic", tag: "T-Shirts & Apparel", desc: "Simple artist uploads and frequent marketplace sales." },
        { name: "Society6", tag: "Art & Home Decor", desc: "Premium wall art, tapestries, furniture, and lifestyle goods." }
      ]
    },
    {
      category: "Publishing Platforms",
      description: "Global self-publishing systems for distributing eBooks, paperbacks, hardcovers, and audiobooks.",
      items: [
        { name: "Amazon KDP", tag: "Global Leader", desc: "Kindle eBooks, paperback & hardcover print-on-demand." },
        { name: "Kindle Unlimited", tag: "Page Reads", desc: "KDP Select enrollment and global reader royalties." },
        { name: "Audible / ACX", tag: "Audiobooks", desc: "Audiobook production and narration rights distribution." },
        { name: "Kobo Writing Life", tag: "International eBook", desc: "Strong readership in Canada, Europe, and Rakuten ecosystem." },
        { name: "Google Play Books", tag: "Android Ecosystem", desc: "Instant reach across millions of Android mobile readers." },
        { name: "Apple Books", tag: "iOS Ecosystem", desc: "Dedicated reading platform for iPhone, iPad, and Mac users." },
        { name: "Draft2Digital", tag: "Aggregator", desc: "Wide distribution to Barnes & Noble, libraries, and global stores." },
        { name: "IngramSpark", tag: "Bookstore Distribution", desc: "Distribution to independent bookstores and public libraries." }
      ]
    },
    {
      category: "Stock & Creative Content",
      description: "Stock media agencies for licensing photographs, vector illustrations, footage, and audio.",
      items: [
        { name: "Adobe Stock", tag: "Creative Cloud Native", desc: "Integrated directly into Photoshop, Illustrator, and Premiere." },
        { name: "Shutterstock", tag: "Stock Giant", desc: "Commercial photography, vectors, and editorial imagery." },
        { name: "Freepik", tag: "Vector & Graphics", desc: "Massive creator contributor network for SVGs and mockups." },
        { name: "Vecteezy", tag: "Vector Network", desc: "Free and pro vector graphics licensing." },
        { name: "iStock / Getty Images", tag: "Premium Royalty-Free", desc: "High-end corporate imagery and video footage." },
        { name: "Canva Creators", tag: "Template Market", desc: "Designing directly within the world's fastest growing canvas." }
      ]
    },
    {
      category: "Website Platforms & CMS",
      description: "Content management systems and modern website building frameworks.",
      items: [
        { name: "WordPress.org", tag: "Self-Hosted Power", desc: "Powers over 40% of the web with infinite plugin flexibility." },
        { name: "Blogger", tag: "Google Free CMS", desc: "Free Google-hosted blogging engine with custom domain support." },
        { name: "Wix", tag: "Visual Builder", desc: "Drag-and-drop website design with built-in hosting." },
        { name: "Webflow", tag: "Visual Code", desc: "Production-grade responsive HTML5/CSS3 development." },
        { name: "Framer", tag: "Interactive Design", desc: "Lightning fast modern websites with interactive micro-animations." },
        { name: "Squarespace", tag: "Curated Elegance", desc: "Polished templates for creative portfolios and small businesses." }
      ]
    }
  ],

  // Realistic Showcase Portfolio (Demonstrating Capability & Transparently Marked as Demo Work)
  portfolio: [
    {
      id: "p1",
      title: "Modern Tech Brand Identity & Guidelines",
      category: "Graphic Design",
      categoryKey: "design",
      type: "Agency Concept & Spec Work",
      description: "Comprehensive visual identity package including minimalist logo mark, typography pairing, corporate color palette, and business cards.",
      deliverables: ["Vector Logo (.AI, .SVG)", "Style Guide", "Stationery Pack", "Brand Mockup"],
      tags: ["Branding", "Vector Art", "Stationery", "Minimalist"],
      image: "assets/images/portfolio_mockup.jpg",
      whatsappMsg: "Hello RI Creative Agency, I saw your Tech Brand Identity portfolio project and want a similar branding package."
    },
    {
      id: "p2",
      title: "Amazon KDP Productivity Planner & Guided Journal",
      category: "Amazon KDP",
      categoryKey: "kdp",
      type: "Published Demonstration Asset",
      description: "Complete Amazon KDP interior layout and print-ready matte cover design for a 120-page Daily Goal Setting & Habit Tracker.",
      deliverables: ["Print-Ready PDF", "Bleed & Margin Calculation", "Matte Cover PDF", "Keyword Metadata"],
      tags: ["KDP Low-Content", "Cover Design", "Interior Layout", "Amazon Ready"],
      image: "assets/images/portfolio_mockup.jpg",
      whatsappMsg: "Hello RI Creative Agency, I want to publish a book/journal on Amazon KDP similar to your portfolio sample."
    },
    {
      id: "p3",
      title: "Corporate Multi-Page Service Website",
      category: "Website",
      categoryKey: "website",
      type: "Live Demonstration Build",
      description: "Clean, ultra-fast agency and business website featuring responsive layout, dark/light mode toggle, WhatsApp conversion triggers, and semantic SEO.",
      deliverables: ["Responsive HTML5/CSS3", "Zero Framework Bloat", "Core Web Vitals 95+", "Touch Navigation"],
      tags: ["Web Design", "Mobile First", "Vanilla CSS", "SEO Ready"],
      image: "assets/images/hero.jpg",
      whatsappMsg: "Hello RI Creative Agency, I am interested in getting a business website built like your portfolio project."
    },
    {
      id: "p4",
      title: "Fiverr & Upwork Freelancer Profile Optimization",
      category: "Marketplace",
      categoryKey: "marketplace",
      type: "Strategy Framework Sample",
      description: "Optimized gig description, targeted high-intent tags, click-optimized gig banners, and customized client proposal templates.",
      deliverables: ["Gig SEO Copy", "3 High-CTR Thumbnails", "Profile Bio", "Proposal Templates"],
      tags: ["Fiverr SEO", "Upwork Bio", "Gig Banner", "Proposal Writing"],
      image: "assets/images/hero.jpg",
      whatsappMsg: "Hello RI Creative Agency, I want help optimizing my Fiverr and Upwork profile."
    },
    {
      id: "p5",
      title: "Social Media Multi-Platform Launch Campaign",
      category: "Social Media",
      categoryKey: "social",
      type: "Content Strategy Blueprint",
      description: "30-day scheduled content blueprint, 15 branded Instagram carousels, matching Facebook headers, and targeted hashtag clusters.",
      deliverables: ["30-Day Content Calendar", "15 Branded Graphics", "Platform Headers", "Hashtag Silos"],
      tags: ["Instagram Carousels", "Facebook Banner", "Content Strategy", "Hashtags"],
      image: "assets/images/hero.jpg",
      whatsappMsg: "Hello RI Creative Agency, I want to order a Social Media content and branding package."
    },
    {
      id: "p6",
      title: "Executive ATS-Friendly Resume & LinkedIn Branding",
      category: "CV & Career",
      categoryKey: "career",
      type: "Executive Career Profile Sample",
      description: "Modern single-page ATS-compliant CV layout in clean typography paired with customized cover letter and polished LinkedIn header banner.",
      deliverables: ["ATS-Compatible PDF & DOCX", "Targeted Cover Letter", "LinkedIn Profile Headline", "Banner Design"],
      tags: ["ATS Resume", "LinkedIn Optimization", "Cover Letter", "Career Growth"],
      image: "assets/images/founder.jpg",
      whatsappMsg: "Hello RI Creative Agency, I would like to upgrade my CV and LinkedIn profile."
    },
    {
      id: "p7",
      title: "Technical SEO Audit & On-Page Optimization",
      category: "SEO",
      categoryKey: "seo",
      type: "Technical Case Framework",
      description: "Full crawl inspection identifying broken links, unindexed meta tags, schema markup installation, and keyword difficulty analysis.",
      deliverables: ["Audit Report PDF", "Keyword Silo Map", "Robots.txt & Sitemap Setup", "Schema Markup"],
      tags: ["SEO Audit", "Keyword Research", "Schema Markup", "Search Console"],
      image: "assets/images/hero.jpg",
      whatsappMsg: "Hello RI Creative Agency, I need an SEO Audit and On-Page optimization for my website."
    },
    {
      id: "p8",
      title: "High-DPI Studio Photo Retouching & Document Prep",
      category: "Photo Studio",
      categoryKey: "photo",
      type: "Studio Quality Sample",
      description: "Precision hair and edge background removal, skin lighting enhancement, and official embassy passport photo dimension calibration.",
      deliverables: ["Transparent PNG", "Embassy-Compliant JPG", "High-DPI Print File", "Clean Retouching"],
      tags: ["Background Removal", "Passport Photo", "Retouching", "Print Ready"],
      image: "assets/images/founder.jpg",
      whatsappMsg: "Hello RI Creative Agency, I need professional Photo Retouching / Passport Photo services."
    }
  ],

  // 5-Step Project Workflow
  howItWorks: [
    {
      step: "01",
      title: "Contact",
      summary: "Reach out via WhatsApp or our interactive contact form with your project requirements, questions, or goals."
    },
    {
      step: "02",
      title: "Consultation",
      summary: "We discuss your specific objectives, evaluate the suitable platform or service, and recommend an actionable plan."
    },
    {
      step: "03",
      title: "Planning",
      summary: "We prepare the project blueprint, timeline, required deliverables, and agree on clear milestone expectations."
    },
    {
      step: "04",
      title: "Development",
      summary: "We execute the agreed service with attention to technical precision, visual excellence, and best practices."
    },
    {
      step: "05",
      title: "Delivery & Support",
      summary: "We deliver completed files, assist with setup or publishing, and provide relevant guidance for ongoing use."
    }
  ],

  // Why Choose RI Creative Agency (Genuine & Trust-Focused)
  whyChooseUs: [
    {
      title: "Client-Focused Solutions",
      desc: "We listen carefully to your goals and tailor every design, listing, or website to your exact target audience."
    },
    {
      title: "Creative & Technical Synergy",
      desc: "Bridging the gap between beautiful aesthetics and solid technical execution (SEO, code cleanliness, print specs)."
    },
    {
      title: "Multi-Disciplinary Scope",
      desc: "One trusted partner for your graphics, websites, social media, marketplaces, KDP publishing, and document services."
    },
    {
      title: "Honest & Transparent Standards",
      desc: "No artificial guarantees or fake claims. We set realistic expectations and focus on quality craftsmanship."
    },
    {
      title: "Prompt Direct Communication",
      desc: "Fast, personal communication directly with founder Rafiqul Islam via WhatsApp and email."
    },
    {
      title: "Long-Term Digital Support",
      desc: "We support our clients well beyond initial file delivery, ensuring smooth publishing, printing, and site management."
    }
  ],

  // Pricing & Flexible Packages
  packages: [
    {
      name: "Starter / Basic",
      badge: "Individuals & Essentials",
      summary: "Ideal for individuals, new freelancers, or single project requirements starting their digital presence.",
      highlights: [
        "Single platform focus (e.g. 1 Profile setup or 1 Graphic design)",
        "Essential SEO & metadata optimization",
        "Direct communication & initial revision rounds",
        "Full commercial rights on deliverables",
        "WhatsApp setup guidance"
      ],
      ctaText: "Request Starter Quote",
      whatsappMsg: "Hello RI Creative Agency, I am interested in the Starter Package. Please provide a custom quote."
    },
    {
      name: "Standard / Growth",
      badge: "Growing Businesses & Creators",
      isPopular: true,
      summary: "Designed for small businesses, authors, and creators looking for a complete, multi-asset digital solution.",
      highlights: [
        "Multi-asset deliverable package (e.g. Full KDP book or multi-page website)",
        "In-depth market & competitor research",
        "Custom branding & color calibration",
        "Enhanced revisions & priority execution",
        "Comprehensive handover & launch support"
      ],
      ctaText: "Request Standard Quote",
      whatsappMsg: "Hello RI Creative Agency, I am interested in the Standard Growth Package. Please provide details."
    },
    {
      name: "Premium / Comprehensive",
      badge: "Complete Digital Turnkey",
      summary: "Complete turnkey digital solutions for established businesses, high-volume sellers, and organizations.",
      highlights: [
        "End-to-end multi-channel ecosystem setup",
        "Advanced technical SEO, custom UI/UX, and publishing support",
        "Complete source files, brand guidelines, and assets",
        "Priority 1-on-1 consultation sessions with Rafiqul Islam",
        "Extended post-launch maintenance & guidance"
      ],
      ctaText: "Request Premium Quote",
      whatsappMsg: "Hello RI Creative Agency, I would like to discuss a Comprehensive Premium Solution for my business."
    }
  ],

  // Comprehensive FAQs
  faqs: [
    {
      q: "What services does RI Creative Agency provide?",
      a: "RI Creative Agency provides a broad digital ecosystem covering 13 major service categories: Social Media Services, Active Marketplace Optimization (Fiverr, Upwork), E-Commerce Store Setup, Passive Income Digital Assets, Amazon KDP Publishing, Graphic & Brand Design, Website Design & Development, SEO & Digital Marketing, Professional Career & CV Services, Photo Studio & Print Solutions, Online Job Application Guidance, Courier Logistics Support, and 1-on-1 Practical Consultation."
    },
    {
      q: "Do you work with international clients?",
      a: "Yes! While our agency is headquartered in Jamirdia, Bhaluka, Mymensingh, Bangladesh, we work with individual creators, entrepreneurs, and businesses worldwide. All digital deliverables (designs, websites, KDP files, SEO audits) are seamlessly shared and supported via online channels."
    },
    {
      q: "How can I contact RI Creative Agency or Rafiqul Islam?",
      a: "The fastest and most direct way is via WhatsApp / Mobile at 01310-824987 (internationally +8801310824987), by email at rafiqulislam.globalwork@gmail.com, or by using the interactive contact form on our website."
    },
    {
      q: "How do I request a quotation for my project?",
      a: "You can click any 'Request a Custom Quote' or 'Start a Project' button on our website. This initiates a direct WhatsApp conversation or contact form submission where you can describe your requirements and budget range."
    },
    {
      q: "Do you provide customized packages?",
      a: "Yes. Every project has unique requirements. We regularly combine services (for example, Logo Design + Website Development + Social Media Branding) into tailored, cost-effective packages."
    },
    {
      q: "Do you provide website design and development?",
      a: "Yes, we build modern, mobile-first, high-performance websites ranging from clean business portfolios and personal brands to multi-page service directories, blogs, and landing pages with fast loading speeds."
    },
    {
      q: "Do you provide Amazon KDP services?",
      a: "Yes, we offer comprehensive KDP self-publishing support including profitable niche and keyword research, manuscript formatting (Kindle eBook, Paperback, and Hardcover), interior layout, custom cover design, and step-by-step upload guidance."
    },
    {
      q: "Do you provide marketplace profile and gig services?",
      a: "Yes, we help clients optimize their profiles and service listings on Fiverr, Upwork, Freelancer, and other platforms using ethical keyword placement, compelling bios, portfolio integration, and tailored proposal writing frameworks."
    },
    {
      q: "Do you provide 1-on-1 training and consultation?",
      a: "Yes, founder Rafiqul Islam provides practical, hands-on mentorship across graphic design, freelancing, Amazon KDP, digital marketing, and web design fundamentals via interactive screen-sharing or in-person sessions at our office."
    },
    {
      q: "How does the project process work from start to finish?",
      a: "Our structured 5-step workflow includes: 01. Contact & Initial Inquiry, 02. Goal Consultation & Recommendation, 03. Planning & Milestone Agreement, 04. Professional Development & Review, and 05. Delivery, Implementation & Ongoing Support."
    },
    {
      q: "Do you guarantee income, sales, or #1 rankings?",
      a: "No. RI Creative Agency adheres strictly to honest business principles. No legitimate agency can guarantee sales, financial earnings, marketplace orders, or search engine rankings. Results depend on consumer demand, your dedication, continuous marketing, and platform policies. We guarantee technical excellence, professional aesthetics, and dedicated support."
    }
  ]
};

// Export to window for global browser access
if (typeof window !== "undefined") {
  window.SITE_DATA = SITE_DATA;
}
