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

  // Pricing & Flexible Packages (4-Tier Model: BASIC, STANDARD, PREMIUM, CUSTOM)
  packages: [
    {
      id: "pkg-basic",
      name: "BASIC",
      badge: "Simple Requirements",
      subtitle: "For individuals, single tasks, and essential setups",
      isPopular: false,
      startingPrice: "৳1,500 / $25",
      priceNum: 1500,
      deliveryTime: "24 – 48 Hours",
      revisions: "2 Revisions Included",
      fileFormats: "JPG, PNG, Print PDF",
      support: "WhatsApp Business Hours Support",
      summary: "Ideal for new freelancers, individuals, or single-asset design and digital tasks starting out.",
      highlights: [
        "Single platform focus or single design asset",
        "Essential metadata and formatting check",
        "High-resolution 300 DPI export files",
        "Standard 24-48 hours turnaround",
        "Direct WhatsApp setup assistance"
      ],
      ctaText: "Choose Basic Package",
      whatsappMsg: "Hello RI Creative Agency, I would like to choose the BASIC Package. Let's discuss my project."
    },
    {
      id: "pkg-standard",
      name: "STANDARD ⭐",
      badge: "Most Popular",
      subtitle: "For growing businesses, creators, and authors",
      isPopular: true,
      startingPrice: "৳4,500 / $60",
      priceNum: 4500,
      deliveryTime: "2 – 4 Days",
      revisions: "5 Revisions Included",
      fileFormats: "Vector AI, SVG, PNG, PDF, PSD, DOCX",
      support: "Priority WhatsApp & Direct Phone Support",
      summary: "Complete multi-asset solution designed for expanding businesses, authors, and creators looking for market impact.",
      highlights: [
        "Multi-asset package (e.g. Full KDP book or multi-page website)",
        "In-depth competitor and keyword search research",
        "Editable vector source files (AI, SVG, PDF)",
        "5 rounds of focused revisions included",
        "Complete pre-launch and publishing guidance"
      ],
      ctaText: "Choose Standard Package",
      whatsappMsg: "Hello RI Creative Agency, I am interested in your most popular STANDARD Package. Let's start."
    },
    {
      id: "pkg-premium",
      name: "PREMIUM",
      badge: "Professional & Business",
      subtitle: "For established businesses and turnkey setups",
      isPopular: false,
      startingPrice: "৳12,000 / $150",
      priceNum: 12000,
      deliveryTime: "5 – 7 Days",
      revisions: "Unlimited Revisions",
      fileFormats: "All Formats + Complete Source Code / RAW",
      support: "24/7 Dedicated Support + 1-on-1 Consultation",
      summary: "End-to-end multi-channel agency execution with priority strategy sessions and long-term care.",
      highlights: [
        "Turnkey multi-channel execution (Branding + Web + Social + SEO)",
        "Advanced technical setup, custom UI/UX, and schema markup",
        "Complete master source files, fonts, and brand assets",
        "Unlimited revisions until 100% satisfaction",
        "1-on-1 strategic consultation session with Rafiqul Islam",
        "30 days post-launch maintenance & guidance"
      ],
      ctaText: "Choose Premium Package",
      whatsappMsg: "Hello RI Creative Agency, I want to book the PREMIUM Business Package for my company."
    },
    {
      id: "pkg-custom",
      name: "CUSTOM",
      badge: "Special Requirements",
      subtitle: "Tailored to your specific timeline and scope",
      isPopular: false,
      startingPrice: "Custom Quote",
      priceNum: 0,
      deliveryTime: "Tailored to Scope",
      revisions: "Flexible per Agreement",
      fileFormats: "As Needed (AI, SVG, PDF, Web Code, etc.)",
      support: "Dedicated Project Manager Support",
      summary: "Have a unique multi-service scope or enterprise project? We tailor the deliverables, timeline, and pricing exactly to your goals.",
      highlights: [
        "Custom combination across any of our 13 divisions",
        "Milestone-based delivery and structured sprint updates",
        "Dedicated project tracking and revision management",
        "Flexible payment terms for enterprise clients",
        "Formal invoice and delivery agreement"
      ],
      ctaText: "Request Custom Quote",
      whatsappMsg: "Hello RI Creative Agency, I need a CUSTOM quote for a specialized project scope."
    }
  ],

  // 12 Client Problem Cards ("What Can We Help You With?")
  clientProblems: [
    {
      id: "prob-logo",
      question: "Need a Professional Logo?",
      subtitle: "Unique brand marks that make you instantly recognizable",
      icon: "🎨",
      serviceLink: "creative-design.html#logo",
      serviceId: "creative-design",
      solution: "Distinctive vector logo design tailored to your industry, delivered with transparent PNGs, print-ready vectors, and color variations.",
      whatsappMsg: "Hello RI Creative Agency, I need a Professional Logo for my business."
    },
    {
      id: "prob-branding",
      question: "Need Business Branding?",
      subtitle: "Cohesive identity from business cards to letterheads",
      icon: "✨",
      serviceLink: "creative-design.html#branding",
      serviceId: "creative-design",
      solution: "Full brand identity kit including color palettes, typography rules, stationery, social media kits, and comprehensive brand guidelines.",
      whatsappMsg: "Hello RI Creative Agency, I need complete Business Branding for my company."
    },
    {
      id: "prob-social",
      question: "Need Social Media Design?",
      subtitle: "High-converting posts, reels covers & banners",
      icon: "📱",
      serviceLink: "social-media.html",
      serviceId: "social-media",
      solution: "Platform-optimized post templates, carousel infographics, Facebook covers, YouTube banners, and targeted marketing visuals.",
      whatsappMsg: "Hello RI Creative Agency, I need Social Media Design and marketing graphics."
    },
    {
      id: "prob-website",
      question: "Need a Website?",
      subtitle: "Modern, high-speed, mobile-first web presence",
      icon: "⚡",
      serviceLink: "website-seo.html",
      serviceId: "website-seo",
      solution: "Fast, responsive web design built for credibility, conversions, seamless mobile navigation, and Google search readiness.",
      whatsappMsg: "Hello RI Creative Agency, I need a professional website for my business."
    },
    {
      id: "prob-kdp",
      question: "Need Amazon KDP Design?",
      subtitle: "Book covers, manuscript formatting & publishing",
      icon: "📚",
      serviceLink: "amazon-kdp.html",
      serviceId: "amazon-kdp",
      solution: "Amazon-approved paperback/Kindle interior layouts, calculation of spine width & bleed, eye-catching cover wraps, and keyword metadata.",
      whatsappMsg: "Hello RI Creative Agency, I need Amazon KDP Book Formatting and Cover Design."
    },
    {
      id: "prob-cv",
      question: "Need a Professional CV?",
      subtitle: "ATS-compliant resumes that win interviews",
      icon: "📄",
      serviceLink: "career-services.html",
      serviceId: "career-services",
      solution: "Modern ATS-friendly CV writing, formatting, executive summaries, matching cover letters, and LinkedIn profile optimization.",
      whatsappMsg: "Hello RI Creative Agency, I need a Professional CV and Resume service."
    },
    {
      id: "prob-job-apply",
      question: "Need Online Job Application?",
      subtitle: "Error-free form submission and document prep",
      icon: "📝",
      serviceLink: "job-applications.html",
      serviceId: "job-applications",
      solution: "Assistance with official online job portals, government circular applications, photo/signature resizing, and fee guidance.",
      whatsappMsg: "Hello RI Creative Agency, I need assistance with an Online Job Application."
    },
    {
      id: "prob-print",
      question: "Need Printing?",
      subtitle: "Business cards, flyers, banners & certificates",
      icon: "🖨️",
      serviceLink: "print-photo.html#printing",
      serviceId: "print-photo",
      solution: "Commercial 300 DPI print-ready layouts, paper stock recommendations, and physical printing via our Jamirdia studio lab.",
      whatsappMsg: "Hello RI Creative Agency, I need commercial Printing services."
    },
    {
      id: "prob-photo",
      question: "Need Photo Services?",
      subtitle: "Studio passport photos, retouching & background removal",
      icon: "📷",
      serviceLink: "print-photo.html#photo",
      serviceId: "print-photo",
      solution: "Embassy-compliant passport size photos, product retouching, precision edge background removal, and color enhancement.",
      whatsappMsg: "Hello RI Creative Agency, I need Photo Studio and Retouching services."
    },
    {
      id: "prob-marketing",
      question: "Need Digital Marketing?",
      subtitle: "YouTube SEO, ad campaigns & organic growth",
      icon: "🚀",
      serviceLink: "services.html#marketing",
      serviceId: "services",
      solution: "Multi-channel marketing strategy, YouTube video SEO tags, content planning calendars, and targeted Facebook/Instagram ad setups.",
      whatsappMsg: "Hello RI Creative Agency, I need Digital Marketing and promotion support."
    },
    {
      id: "prob-data-entry",
      question: "Need Data Entry?",
      subtitle: "Accurate web research, Excel, Word & PDF conversion",
      icon: "📊",
      serviceLink: "services.html#data-entry",
      serviceId: "services",
      solution: "Meticulous data processing, spreadsheet formatting, PDF-to-Word/Excel conversions, web research, and clean document management.",
      whatsappMsg: "Hello RI Creative Agency, I need Data Entry and digital document processing."
    },
    {
      id: "prob-business-support",
      question: "Need Business Support?",
      subtitle: "1-on-1 practical IT consultation & strategy",
      icon: "🎓",
      serviceLink: "training-consultation.html",
      serviceId: "training-consultation",
      solution: "Direct hands-on consultation with founder Rafiqul Islam to solve digital roadblocks, optimize setups, and grow online.",
      whatsappMsg: "Hello RI Creative Agency, I need Business Consultation and 1-on-1 IT support."
    }
  ],

  // 10 Most Popular Services Showcase
  popularServices: [
    {
      id: "pop-logo",
      title: "Logo Design",
      category: "Creative Design",
      startingPrice: "৳1,500 / $25",
      deliveryTime: "24 – 48 Hours",
      revisions: "Unlimited Options",
      icon: "🎨",
      slug: "creative-design.html#logo",
      description: "Custom vector logos crafted for modern businesses, startups, and personal brands.",
      whatsappMsg: "Hello RI Creative Agency, I am interested in Logo Design. I would like to discuss my requirements and package options."
    },
    {
      id: "pop-branding",
      title: "Brand Identity",
      category: "Creative Design",
      startingPrice: "৳5,000 / $70",
      deliveryTime: "3 – 5 Days",
      revisions: "Full Support",
      icon: "✨",
      slug: "creative-design.html#branding",
      description: "Complete identity systems: color psychology, typography, stationery, and brand guidelines.",
      whatsappMsg: "Hello RI Creative Agency, I am interested in complete Brand Identity design for my business."
    },
    {
      id: "pop-social",
      title: "Social Media Design",
      category: "Social Media",
      startingPrice: "৳2,500 / $35",
      deliveryTime: "2 – 3 Days",
      revisions: "Included",
      icon: "📱",
      slug: "social-media.html",
      description: "High-CTR banners, engaging carousels, and promotional post graphics across all platforms.",
      whatsappMsg: "Hello RI Creative Agency, I want to order Social Media Design for my channels."
    },
    {
      id: "pop-web",
      title: "Website Design",
      category: "Website & SEO",
      startingPrice: "৳8,000 / $110",
      deliveryTime: "5 – 7 Days",
      revisions: "Priority QA",
      icon: "⚡",
      slug: "website-seo.html",
      description: "Fast, responsive modern websites engineered for high conversions and Google indexing.",
      whatsappMsg: "Hello RI Creative Agency, I need a professional website. I would like to discuss my project."
    },
    {
      id: "pop-kdp",
      title: "Amazon KDP",
      category: "Publishing",
      startingPrice: "৳3,000 / $40",
      deliveryTime: "2 – 4 Days",
      revisions: "Approval Guarantee",
      icon: "📚",
      slug: "amazon-kdp.html",
      description: "Manuscript formatting, paperback/hardcover covers, bleed calculation, and barcode setup.",
      whatsappMsg: "Hello RI Creative Agency, I need Amazon KDP formatting and cover design."
    },
    {
      id: "pop-cv",
      title: "CV & Resume",
      category: "Career Services",
      startingPrice: "৳800 / $15",
      deliveryTime: "24 Hours",
      revisions: "Free Edits",
      icon: "📄",
      slug: "career-services.html",
      description: "ATS-optimized executive resumes, targeted cover letters, and LinkedIn profile overhauls.",
      whatsappMsg: "Hello RI Creative Agency, I need professional CV/Resume service."
    },
    {
      id: "pop-marketing",
      title: "Digital Marketing",
      category: "Digital Growth",
      startingPrice: "৳4,000 / $55",
      deliveryTime: "Monthly / Sprints",
      revisions: "Ongoing Care",
      icon: "🚀",
      slug: "services.html#marketing",
      description: "YouTube SEO, hashtag research, content planning, and multi-platform promotional campaigns.",
      whatsappMsg: "Hello RI Creative Agency, I need Digital Marketing and promotion support."
    },
    {
      id: "pop-print",
      title: "Printing",
      category: "Print & Lab",
      startingPrice: "৳500 / $10",
      deliveryTime: "Same Day / 24h",
      revisions: "Proof Checked",
      icon: "🖨️",
      slug: "print-photo.html#printing",
      description: "High-resolution color printing: business cards, flyers, banners, stickers, and documents.",
      whatsappMsg: "Hello RI Creative Agency, I need commercial Printing services."
    },
    {
      id: "pop-job-apply",
      title: "Online Job Application",
      category: "Local & Career",
      startingPrice: "৳300 / $5",
      deliveryTime: "Instant / Same Day",
      revisions: "Verified Data",
      icon: "📝",
      slug: "job-applications.html",
      description: "Accurate online circular applications, photo/signature formatting, and confirmation tracking.",
      whatsappMsg: "Hello RI Creative Agency, I need assistance with an Online Job Application."
    },
    {
      id: "pop-photo",
      title: "Photo Studio",
      category: "Studio & Lab",
      startingPrice: "৳200 / $5",
      deliveryTime: "Instant / 2 Hours",
      revisions: "Included",
      icon: "📷",
      slug: "print-photo.html#photo",
      description: "Embassy-compliant passport photos, background removal, skin retouching, and lamination.",
      whatsappMsg: "Hello RI Creative Agency, I need Photo Studio and Retouching services."
    }
  ],

  // 12 Client Personas ("Who We Help")
  whoWeHelp: [
    {
      id: "help-individuals",
      title: "Individuals",
      subtitle: "Personal projects & digital identity",
      icon: "👤",
      recommended: ["Personal Logo", "Passport Photos", "Social Media Graphics"],
      link: "services.html"
    },
    {
      id: "help-students",
      title: "Students",
      subtitle: "Academic formatting, CVs & applications",
      icon: "🎓",
      recommended: ["Student CV", "Online Application", "Document Formatting"],
      link: "career-services.html"
    },
    {
      id: "help-jobseekers",
      title: "Job Seekers",
      subtitle: "ATS resumes & interview winning profiles",
      icon: "💼",
      recommended: ["ATS Resume", "Cover Letter", "LinkedIn Profile Makeover"],
      link: "career-services.html"
    },
    {
      id: "help-authors",
      title: "Authors & Publishers",
      subtitle: "Amazon KDP covers, interiors & royalties",
      icon: "📚",
      recommended: ["KDP Formatting", "Paperback Covers", "Niche Keyword SEO"],
      link: "amazon-kdp.html"
    },
    {
      id: "help-creators",
      title: "Content Creators",
      subtitle: "Thumbnails, branding & visual kits",
      icon: "🎨",
      recommended: ["YouTube Thumbnails", "Channel Art", "Instagram Kits"],
      link: "creative-design.html"
    },
    {
      id: "help-youtubers",
      title: "YouTubers",
      subtitle: "High-CTR thumbnails & Channel SEO",
      icon: "▶️",
      recommended: ["High-CTR Thumbnails", "YouTube SEO", "Video Watermarks"],
      link: "social-media.html"
    },
    {
      id: "help-freelancers",
      title: "Freelancers",
      subtitle: "Fiverr & Upwork gig optimization",
      icon: "💻",
      recommended: ["Fiverr Gig SEO", "Upwork Proposals", "Showcase Portfolios"],
      link: "marketplace.html"
    },
    {
      id: "help-smallbiz",
      title: "Small Businesses",
      subtitle: "Cost-effective branding & online store",
      icon: "🏪",
      recommended: ["Business Logo", "Business Cards", "Flyers & Brochures"],
      link: "creative-design.html"
    },
    {
      id: "help-startups",
      title: "Startups",
      subtitle: "Complete brand identity & landing pages",
      icon: "🚀",
      recommended: ["Complete Brand Identity", "Modern Website", "Pitch Decks"],
      link: "website-seo.html"
    },
    {
      id: "help-sellers",
      title: "Online Sellers",
      subtitle: "E-Commerce product listings & mockups",
      icon: "🛍️",
      recommended: ["Product Mockups", "Etsy / Shopify Setup", "Ad Creatives"],
      link: "marketplace.html"
    },
    {
      id: "help-agencies",
      title: "Agencies & Partners",
      subtitle: "White-label design & overflow support",
      icon: "🤝",
      recommended: ["Vector Redraw", "Web Development", "Bulk Design Support"],
      link: "services.html"
    },
    {
      id: "help-localbiz",
      title: "Local Businesses",
      subtitle: "Jamirdia, Bhaluka & Mymensingh hub",
      icon: "📍",
      recommended: ["Color Printing", "Local SEO", "Courier Parcel Dispatch"],
      link: "contact.html"
    }
  ],

  // 4 In-Depth Case Studies
  caseStudies: [
    {
      id: "cs-1",
      title: "Clothing Brand 'Aura Threads' — Brand Identity & Social Kit",
      category: "Branding & Social",
      clientType: "E-Commerce Startup",
      problem: "A new fashion label had zero cohesive visual identity, using inconsistent colors and low-res graphics that failed to convert visitors on Instagram.",
      solution: "RI Creative Agency designed a minimalist luxury logo mark, formulated an earthy pastel brand color palette, designed 25 Instagram post/story templates, and created print-ready packaging tags.",
      process: "01 Discovery & Moodboard (Day 1) → 02 Vector Logo Concepts (Day 2) → 03 Social Kit & Packaging (Days 3-4) → 04 Master Asset Delivery (Day 5).",
      result: "Professional brand launch within 5 days, doubling engagement on social ads and creating a luxury identity ready for physical clothing tags.",
      deliverables: ["Vector Logo (.AI, .SVG, .PNG)", "Social Media Kit (25 Templates)", "Clothing Tag Dieline", "Brand Guidelines PDF"],
      image: "assets/images/creative_design_showcase.jpg",
      whatsappMsg: "Hello RI Creative Agency, I saw your Aura Threads Branding Case Study and want a similar solution."
    },
    {
      id: "cs-2",
      title: "International Author — Amazon KDP 3-Book Journal Series",
      category: "Amazon KDP Publishing",
      clientType: "Self-Publishing Author",
      problem: "The author had written guided wellness prompts but faced continuous Amazon KDP margin/bleed rejections and had no commercial cover designs.",
      solution: "We engineered precision 300 DPI PDF interiors adhering strictly to Amazon KDP bleed requirements, calculated exact spine thickness for 120-page cream paper, designed 3 high-impact matte covers, and performed 7-box keyword research.",
      process: "01 Manuscript Audit & Trim Sizing → 02 Interior Grid & Typography Layout → 03 Cover Wraps & Barcode Calculation → 04 Successful Amazon KDP Approval.",
      result: "100% first-pass Amazon KDP approval on paperback and Kindle, with automated global royalties enabled worldwide.",
      deliverables: ["Print-Ready Bleed PDF", "Matte Cover Wrap PDFs", "Kindle eBook Formatting", "7-Box Keyword SEO List"],
      image: "assets/images/amazon_kdp_showcase.jpg",
      whatsappMsg: "Hello RI Creative Agency, I want to publish a book series on Amazon KDP like your Case Study."
    },
    {
      id: "cs-3",
      title: "Agro Enterprise — High-Speed Web Portal & Local SEO",
      category: "Website & SEO",
      clientType: "Local Enterprise (Mymensingh)",
      problem: "An established agricultural business in Bhaluka lacked an online presence, causing corporate buyers to doubt legitimacy and lose inquiries to regional competitors.",
      solution: "We built a ultra-fast, mobile-first agency-grade corporate website with dual English/Bengali capability, interactive quote request systems, Google Search Console indexing, and local Jamirdia/Bhaluka schema markup.",
      process: "01 Content Architecture & Wireframes → 02 Vanilla Responsive UI/UX → 03 Local SEO & Speed Tuning (98/100 Core Web Vitals) → 04 Launch & Google Submission.",
      result: "Ranked #1 for local business queries in Bhaluka within 3 weeks, generating 40+ verified WhatsApp inquiries in the first month.",
      deliverables: ["Responsive Web Portal", "Fast Performance Code", "Local Schema Markup", "Google Analytics 4 Setup"],
      image: "assets/images/portfolio_mockup.jpg",
      whatsappMsg: "Hello RI Creative Agency, I need a corporate website like your Agro Enterprise Case Study."
    },
    {
      id: "cs-4",
      title: "Mid-Level Professional — Executive ATS Resume & LinkedIn Makeover",
      category: "Career Branding",
      clientType: "Senior Job Seeker",
      problem: "A candidate with 7 years of engineering experience was receiving automated rejections due to an outdated, multi-column graphically heavy CV that crashed ATS scanners.",
      solution: "We completely restructured the resume into a single-column, ATS-parsed semantic layout with keyword-rich achievement bullet points, paired with a custom cover letter and executive LinkedIn headline/banner.",
      process: "01 Career History Audit → 02 Target Job Description Keyword Silo → 03 Clean ATS Typography Layout → 04 LinkedIn Profile Optimization.",
      result: "Secured 3 tier-1 multinational corporate interviews within 14 days of circulating the updated ATS CV.",
      deliverables: ["ATS-Compatible PDF & DOCX", "Targeted Cover Letter", "LinkedIn Profile Headline & Bio", "Custom LinkedIn Banner"],
      image: "assets/images/founder.jpg",
      whatsappMsg: "Hello RI Creative Agency, I want to overhaul my CV and LinkedIn like your Career Case Study."
    }
  ],

  // Visual Before & After Comparison Showcases
  beforeAfter: [
    {
      id: "ba-logo",
      title: "Logo & Brand Mark Transformation",
      category: "Graphic Design",
      beforeLabel: "Outdated Low-Res Sketch",
      beforeDesc: "Pixelated, unaligned raster graphic that lost clarity when resized and failed on dark backgrounds.",
      afterLabel: "Modern Scalable Vector Mark",
      afterDesc: "Precision geometric vector icon with calibrated brand colors, versatile horizontal & stacked lockups.",
      improvements: [
        "100% Infinite Vector Scalability (.AI, .SVG)",
        "Works seamlessly in monochrome, light and dark themes",
        "Exported in CMYK 300 DPI for physical printing and RGB for web",
        "Includes complete corporate color palette & typography pairings"
      ]
    },
    {
      id: "ba-photo",
      title: "Embassy Passport & Studio Photo Retouching",
      category: "Photo Studio",
      beforeLabel: "Dim Ambient Smartphone Shot",
      beforeDesc: "Uneven lighting, cluttered home background, and incorrect aspect ratio rejected by embassy portals.",
      afterLabel: "Calibrated Official Studio Portrait",
      afterDesc: "Pixel-perfect hair edge mask, studio white/blue backdrop, balanced exposure, and 300 DPI dimensions.",
      improvements: [
        "Guaranteed compliant with US, UK, Schengen & BD passport standards",
        "Clean hair and edge background extraction without blur or halo",
        "Natural skin tone correction preserving authentic facial details",
        "High-density photo paper print-ready 4R / 6R lab sheet layouts"
      ]
    },
    {
      id: "ba-resume",
      title: "ATS-Friendly Executive Resume Overhaul",
      category: "Career Services",
      beforeLabel: "Heavy Table-Based Multi-Page CV",
      beforeDesc: "Complex columns and graphical skill bars unreadable by automated Applicant Tracking Systems (ATS).",
      afterLabel: "Clean Semantic Job-Winning ATS CV",
      afterDesc: "Single-column hierarchy, quantifiable metrics, high-intent keywords, and flawless ATS parsing.",
      improvements: [
        "Passes major ATS algorithms (Workday, Greenhouse, Taleo)",
        "Action-verb bullet points demonstrating measurable business impact",
        "Delivered in both editable DOCX and locked print-ready PDF",
        "Includes matching tailored cover letter structure"
      ]
    },
    {
      id: "ba-website",
      title: "Business Web Architecture & UI Redesign",
      category: "Website & SEO",
      beforeLabel: "Slow, Non-Responsive Static Page",
      beforeDesc: "Cluttered fonts, broken mobile navigation, zero metadata, and 5+ second load times.",
      afterLabel: "High-Speed Conversion Agency Portal",
      afterDesc: "Subtle 3D depth, instant mobile response, WhatsApp conversion buttons, and 98+ Core Web Vitals.",
      improvements: [
        "Sub-second load times on mobile 4G networks",
        "Dual-language English & authentic Bengali toggle",
        "Integrated interactive quote request and live project tracking",
        "Semantic schema markup for top Google search visibility"
      ]
    }
  ],

  // 7 Free Downloadable Checklists / Lead Magnets
  freeResources: [
    {
      id: "res-cv",
      title: "The Ultimate ATS Resume Checklist",
      subtitle: "20 Must-Check Rules to Beat the ATS Filter",
      category: "Career",
      icon: "📄",
      pages: "3 Pages",
      downloads: "1,240+ Downloads",
      description: "Everything you must review before submitting your CV to international recruiters or corporate portals.",
      keyPoints: [
        "File naming convention rules (avoid 'resume_final_v2.pdf')",
        "Safe fonts that ATS algorithms parse reliably",
        "How to avoid table and column parsing errors",
        "Action verbs and measurable outcome formulas"
      ]
    },
    {
      id: "res-logo",
      title: "Logo Design & Vector Preparation Checklist",
      subtitle: "What Every Business Needs in a Logo Package",
      category: "Design",
      icon: "🎨",
      pages: "2 Pages",
      downloads: "890+ Downloads",
      description: "The complete checklist of formats, color profiles, and file types your designer must provide.",
      keyPoints: [
        "Difference between RGB (Web) and CMYK (Print)",
        "Why you must own the editable vector (.AI or .SVG) source file",
        "Transparent PNG resolutions for apparel, stamps, and watermarks",
        "Minimum sizing rules for mobile app favicons"
      ]
    },
    {
      id: "res-kdp",
      title: "Amazon KDP Self-Publishing Checklist",
      subtitle: "Zero-Error Guide for Paperback & Kindle Uploads",
      category: "Publishing",
      icon: "📚",
      pages: "4 Pages",
      downloads: "1,530+ Downloads",
      description: "Step-by-step checklist to avoid Amazon KDP manuscript rejections and rank in profitable niches.",
      keyPoints: [
        "Calculating bleed margins and spine width by page count",
        "Choosing between Cream vs. White paper stock",
        "Optimizing the 7 KDP backend keyword slots",
        "Setting up KDP Select and international royalties"
      ]
    },
    {
      id: "res-branding",
      title: "Complete Brand Identity Essentials Checklist",
      subtitle: "Building a Cohesive Business Persona",
      category: "Branding",
      icon: "✨",
      pages: "3 Pages",
      downloads: "740+ Downloads",
      description: "The 10 essential assets your brand needs to look established and trustworthy.",
      keyPoints: [
        "Primary vs. Secondary logo lockups",
        "Color codes: Hex, RGB, CMYK, and Pantone",
        "Brand tone of voice and slogan guidelines",
        "Social media avatar and banner dimensions"
      ]
    },
    {
      id: "res-social",
      title: "Social Media Growth & Ad Creative Checklist",
      subtitle: "High-CTR Visuals for 15+ Platforms",
      category: "Marketing",
      icon: "📱",
      pages: "3 Pages",
      downloads: "1,120+ Downloads",
      description: "Checklist for creating social graphics that stop scrolling thumbs and drive clicks.",
      keyPoints: [
        "Safe zone margins for Instagram Reels and TikTok text",
        "High-CTR thumbnail contrast and face-emotion guidelines",
        "Hashtag research clusters: niche vs. broad reach",
        "Call-to-action placement on carousel slides"
      ]
    },
    {
      id: "res-website",
      title: "Modern Business Website Launch Checklist",
      subtitle: "Pre-Launch Speed, Security & SEO Audit",
      category: "Web Development",
      icon: "⚡",
      pages: "4 Pages",
      downloads: "960+ Downloads",
      description: "Every technical and visual check required before your website goes live to the public.",
      keyPoints: [
        "Mobile viewport responsive testing across 320px to 1920px",
        "Google Search Console, XML Sitemap, and Robots.txt verification",
        "Clickable WhatsApp and phone call link verification",
        "Core Web Vitals loading speed and image compression"
      ]
    },
    {
      id: "res-startup",
      title: "Digital Business Startup Checklist",
      subtitle: "From Concept to First Paying Client",
      category: "Business",
      icon: "🚀",
      pages: "5 Pages",
      downloads: "1,410+ Downloads",
      description: "Practical roadmap for entrepreneurs launching digital services, e-commerce, or freelance businesses.",
      keyPoints: [
        "Selecting the right freelance marketplace or e-commerce engine",
        "Local registration and official business contact setup",
        "Payment receiving options (bKash, Nagad, Bank, International)",
        "Client onboarding and project management workflow"
      ]
    }
  ],

  // 5 Special Editable Promotional Offers
  specialOffers: [
    {
      id: "offer-new-client",
      title: "New Client Welcome Offer",
      tag: "First Project Special",
      discount: "15% OFF",
      description: "Get 15% off your first graphic design, CV writing, or social media project with RI Creative Agency.",
      badge: "New Clients",
      ctaText: "Claim 15% Welcome Offer",
      whatsappMsg: "Hello RI Creative Agency, I would like to claim the 15% New Client Welcome Offer."
    },
    {
      id: "offer-starter-biz",
      title: "Business Starter Package",
      tag: "All-in-One Essentials",
      discount: "Save ৳2,000",
      description: "Custom Vector Logo + Luxury Double-Sided Business Card + Facebook & WhatsApp Business Header + Stationery Pack.",
      badge: "High Value Bundle",
      ctaText: "Get Starter Business Bundle",
      whatsappMsg: "Hello RI Creative Agency, I want to order the Business Starter Package."
    },
    {
      id: "offer-branding-bundle",
      title: "Complete Branding Bundle",
      tag: "Full Agency Identity",
      discount: "Save ৳4,500",
      description: "Primary & Stacked Logo + Full Brand Guidelines + Letterhead + Envelope + Social Media Post Kit (15 Designs) + Favicons.",
      badge: "Complete Identity",
      ctaText: "Order Branding Bundle",
      whatsappMsg: "Hello RI Creative Agency, I want to book the Complete Branding Bundle."
    },
    {
      id: "offer-social-pack",
      title: "Social Media Starter Pack",
      tag: "Multi-Platform Growth",
      discount: "Save ৳1,500",
      description: "15 Custom Branded Posts/Carousels + 3 Channel Banners + Niche Hashtag Research + 30-Day Content Calendar.",
      badge: "Best for Creators",
      ctaText: "Get Social Media Pack",
      whatsappMsg: "Hello RI Creative Agency, I want to order the Social Media Starter Pack."
    },
    {
      id: "offer-kdp-author",
      title: "Amazon KDP Author Starter Package",
      tag: "Global Publishing Ready",
      discount: "Save ৳2,500",
      description: "Complete Paperback & Kindle Manuscript Interior Formatting + High-CTR Cover Wrap + Barcode Calculation + 7-Box Keyword Research.",
      badge: "Guaranteed KDP Approval",
      ctaText: "Publish With Author Package",
      whatsappMsg: "Hello RI Creative Agency, I want to order the Amazon KDP Author Starter Package."
    }
  ],

  // Visual 11-Stage Order Tracking Workflow
  orderTrackingStages: [
    { step: 1, key: "order_received", title: "Order Received", desc: "Project initiated & recorded in agency system", icon: "📥" },
    { step: 2, key: "requirements_received", title: "Requirements Received", desc: "Project brief, assets, and specs collected", icon: "📋" },
    { step: 3, key: "requirements_checked", title: "Requirements Checked", desc: "Lead specialist audited specs & verified scope", icon: "🔍" },
    { step: 4, key: "work_started", title: "Work Started", desc: "Crafting concepts and initiating production", icon: "🚀" },
    { step: 5, key: "designing_development", title: "Designing / Development", desc: "Core creative execution & coding in progress", icon: "🎨" },
    { step: 6, key: "first_draft", title: "First Draft Ready", desc: "Initial deliverables rendered for review", icon: "✨" },
    { step: 7, key: "client_review", title: "Client Review", desc: "Draft shared with client for evaluation", icon: "👁️" },
    { step: 8, key: "revision", title: "Revision", desc: "Incorporating client modifications & refinements", icon: "🔄" },
    { step: 9, key: "approved", title: "Approved", desc: "Final designs & code approved by client", icon: "👍" },
    { step: 10, key: "final_delivery", title: "Final Delivery", desc: "Master source files & print files packaged", icon: "📦" },
    { step: 11, key: "completed", title: "Completed", desc: "Project completed & post-launch support active", icon: "🏆" }
  ],

  // Preset Sample Orders for Live Tracking & Dashboard Testing
  sampleOrders: [
    {
      orderId: "RI-1001",
      clientName: "Tanvir Ahmed",
      clientEmail: "tanvir.client@gmail.com",
      serviceName: "Logo Design & Brand Identity",
      serviceCategory: "Creative Design",
      package: "STANDARD ⭐",
      progress: 75,
      currentStageIndex: 6, // Client Review
      statusText: "Client Review (Draft Ready)",
      assignedTo: "Rafiqul Islam (Lead Designer)",
      startDate: "2026-09-06",
      estimatedDelivery: "2026-09-12",
      price: "৳4,500",
      paymentStatus: "Paid",
      deliverablesList: [
        { name: "Draft_Concepts_v1.pdf", type: "PDF", size: "3.4 MB", url: "#" },
        { name: "Logo_Mockup_Preview.png", type: "PNG", size: "2.1 MB", url: "#" }
      ],
      history: [
        { stage: "Order Received", date: "2026-09-06 10:15 AM", note: "Order placed via project onboarding wizard." },
        { stage: "Requirements Checked", date: "2026-09-06 02:30 PM", note: "Brief reviewed by Rafiqul Islam. Industry: FinTech." },
        { stage: "Work Started", date: "2026-09-07 09:00 AM", note: "Vector drafting initiated." },
        { stage: "First Draft Ready", date: "2026-09-09 04:00 PM", note: "3 distinct vector concepts prepared." },
        { stage: "Client Review", date: "2026-09-10 08:30 AM", note: "Draft uploaded to portal. Awaiting client feedback." }
      ]
    },
    {
      orderId: "RI-1002",
      clientName: "Shahidul Karim",
      clientEmail: "shahidul.author@gmail.com",
      serviceName: "Amazon KDP Book Formatting & Cover Wrap",
      serviceCategory: "Amazon KDP",
      package: "STANDARD ⭐",
      progress: 100,
      currentStageIndex: 10, // Completed
      statusText: "Completed & Delivered",
      assignedTo: "Rafiqul Islam (KDP Specialist)",
      startDate: "2026-09-01",
      estimatedDelivery: "2026-09-06",
      price: "৳3,500",
      paymentStatus: "Paid",
      deliverablesList: [
        { name: "Final_Interior_Bleed_Ready.pdf", type: "PDF", size: "12.8 MB", url: "#" },
        { name: "Full_Matte_Cover_Wrap.pdf", type: "PDF", size: "8.2 MB", url: "#" },
        { name: "Amazon_Keywords_Metadata.docx", type: "DOCX", size: "45 KB", url: "#" },
        { name: "All_Assets_Package.zip", type: "ZIP", size: "21.4 MB", url: "#" }
      ],
      history: [
        { stage: "Order Received", date: "2026-09-01 11:00 AM", note: "Order initiated for 120-page journal." },
        { stage: "Designing / Development", date: "2026-09-02 10:00 AM", note: "Bleed calculation and margin alignment completed." },
        { stage: "First Draft Ready", date: "2026-09-04 03:00 PM", note: "Cover wrap proof sent." },
        { stage: "Approved", date: "2026-09-05 01:00 PM", note: "Client approved proof." },
        { stage: "Completed", date: "2026-09-06 05:00 PM", note: "Final files delivered. KDP approval successful." }
      ]
    },
    {
      orderId: "RI-1003",
      clientName: "Farhana Yasmin",
      clientEmail: "farhana.agro@gmail.com",
      serviceName: "Corporate Agency Website & Local SEO",
      serviceCategory: "Website & SEO",
      package: "PREMIUM",
      progress: 45,
      currentStageIndex: 4, // Designing / Development
      statusText: "Designing & Code Development",
      assignedTo: "Rafiqul Islam (Full-Stack)",
      startDate: "2026-09-08",
      estimatedDelivery: "2026-09-15",
      price: "৳15,000",
      paymentStatus: "Partially Paid (50% Advance)",
      deliverablesList: [
        { name: "UI_Wireframe_Architecture.pdf", type: "PDF", size: "1.8 MB", url: "#" }
      ],
      history: [
        { stage: "Order Received", date: "2026-09-08 09:30 AM", note: "Scope: 5-page corporate site + Local SEO." },
        { stage: "Requirements Checked", date: "2026-09-08 03:00 PM", note: "Domain & branding materials collected." },
        { stage: "Work Started", date: "2026-09-09 10:00 AM", note: "HTML5/CSS3 coding structure underway." },
        { stage: "Designing / Development", date: "2026-09-10 09:00 AM", note: "Responsive layout & color system being assembled." }
      ]
    }
  ],

  // Cross-Sell Recommendations ("You May Also Need")
  crossSells: {
    "creative-design": [
      { name: "Business Card & Stationery", link: "creative-design.html#stationery", desc: "Matching double-sided cards" },
      { name: "Social Media Kit", link: "social-media.html", desc: "Profile banners & avatars" },
      { name: "Modern Website", link: "website-seo.html", desc: "Turn design into an online hub" },
      { name: "Brand Guidelines PDF", link: "creative-design.html#branding", desc: "Color codes and font rules" }
    ],
    "website-seo": [
      { name: "Technical SEO Audit", link: "website-seo.html#seo", desc: "Google 1st page optimization" },
      { name: "Brand Identity Design", link: "creative-design.html", desc: "Professional logo for your site" },
      { name: "Social Media Marketing", link: "social-media.html", desc: "Drive traffic to your new site" },
      { name: "Passive Income Setup", link: "passive-income.html", desc: "Monetize your site traffic" }
    ],
    "career-services": [
      { name: "Targeted Cover Letter", link: "career-services.html#letter", desc: "Pair with your new CV" },
      { name: "LinkedIn Profile Makeover", link: "career-services.html#linkedin", desc: "Attract global recruiters" },
      { name: "Online Job Application", link: "job-applications.html", desc: "Assistance submitting forms" },
      { name: "Professional Headshot", link: "print-photo.html#photo", desc: "Embassy & profile photo" }
    ],
    "amazon-kdp": [
      { name: "Full Paperback Cover Wrap", link: "amazon-kdp.html#cover", desc: "300 DPI spine calculated wrap" },
      { name: "7-Box Keyword Research", link: "amazon-kdp.html#keywords", desc: "High-demand, low-competition tags" },
      { name: "Author Website Hub", link: "website-seo.html", desc: "Showcase all published titles" },
      { name: "Social Media Book Promo", link: "social-media.html", desc: "3D book mockups for Instagram" }
    ]
  },

  // Expanded FAQs (Including all 11 required questions from Point 29)
  faqs: [
    {
      q: "How do I place an order?",
      a: "Placing an order is simple and transparent. You can click 'Start Your Project' on any page to open our 6-step project onboarding wizard, choose your service and package, submit your details, and receive an instant Order ID (e.g. RI-1001). You can also click 'Chat on WhatsApp' to discuss your project directly with Rafiqul Islam."
    },
    {
      q: "How do I get a quote?",
      a: "Click 'Get Free Quote' from the navigation or hero section. Fill out the quick quote request form detailing your service, budget, and timeline. You will instantly receive a Quote Reference ID, and our team will review and confirm your customized quote within a few hours."
    },
    {
      q: "How do I submit requirements?",
      a: "You can submit requirements directly through our 'Start Your Project' wizard by typing your instructions and attaching files (images, documents, sketches, ZIP files). You can also share your brief and assets directly via WhatsApp (01310-824987) or email (rafiqulislam.globalwork@gmail.com)."
    },
    {
      q: "How long does a project take?",
      a: "Turnaround times vary by scope and package: Basic services (single logos, photo editing, CVs) typically take 24 to 48 hours. Standard projects (Amazon KDP, multi-asset branding, social kits) take 2 to 4 days. Comprehensive websites and full brand identity systems typically take 5 to 7 days."
    },
    {
      q: "How many revisions are included?",
      a: "Revisions depend on your selected package tier: Our Basic package includes 2 revision rounds. Our Standard package includes 5 comprehensive revisions. Our Premium package comes with Unlimited Revisions until you are 100% satisfied with the outcome."
    },
    {
      q: "Can I request a custom package?",
      a: "Yes! Every business has unique needs. If our Basic, Standard, or Premium packages do not perfectly match your requirements, select 'Custom Package' or contact us directly on WhatsApp. We regularly combine services (e.g. Logo + Website + Social Media Kit) into cost-effective customized packages."
    },
    {
      q: "Can I contact you through WhatsApp?",
      a: "Yes! WhatsApp is our fastest and primary communication channel. You can message founder Rafiqul Islam directly at 01310-824987 (internationally +8801310824987) at any time. Every service page includes dynamic buttons that prefill your WhatsApp message with your exact service interest."
    },
    {
      q: "Do you work with international clients?",
      a: "Yes, absolutely! While RI Creative Agency is physically based in Jamirdia, Bhaluka, Mymensingh, Bangladesh, we actively serve clients worldwide across the USA, UK, Europe, Middle East, and Asia. All deliverables are provided digitally with international payment flexibility."
    },
    {
      q: "How are final files delivered?",
      a: "Final files are delivered securely through your Client Dashboard, Google Drive links, and direct email/WhatsApp attachments. We deliver all industry-standard formats including vector source files (AI, SVG, EPS, PSD), print-ready PDFs (300 DPI, CMYK), high-res PNG/JPG, editable Word/DOCX, and clean web code (HTML/CSS/JS) inside organized ZIP archives."
    },
    {
      q: "Can I order multiple services?",
      a: "Yes! You can combine multiple services in a single order (for example: Logo Design + Business Cards + Facebook/YouTube Branding + Website Development). We provide special bundle discounts for multi-service client projects."
    },
    {
      q: "Can I track my project?",
      a: "Yes! We feature a dedicated Visual Order Tracking system. Simply visit 'Track Order' from the menu or dashboard, enter your Order ID (e.g. RI-1001), and view your real-time 11-stage progress bar (from Order Received to Final Delivery), milestone notes, and draft previews."
    }
  ]
};

// Export to window for global browser access
if (typeof window !== "undefined") {
  window.SITE_DATA = SITE_DATA;
}
