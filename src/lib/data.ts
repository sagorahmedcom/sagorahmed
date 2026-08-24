export const siteConfig = {
  name: "Sagor Ahmed",
  handle: "sagorahmed",
  role: "WordPress Developer & Next.js Frontend Engineer",
  heroSubheadline: "WordPress Developer | Custom Themes & High-Performance Next.js Frontends",
  shortTagline: "Custom WordPress themes and high-performance Next.js frontends for businesses worldwide.",
  location: "Dhaka, Bangladesh",
  address: {
    line1: "Ward No. 05, Shahid Vila, Borodeshi Passim",
    line2: "Begun Bari, Amin Bazar, Savar",
    city: "Dhaka",
    postal: "1348",
    country: "Bangladesh",
    mapsUrl:
      "https://www.google.com/maps/place/Sagor+Ahmed/@23.7856974,90.3311227,17.6z/data=!4m6!3m5!1s0x3755c06051bec195:0xdc01e07794db3f19!8m2!3d23.7866708!4d90.3311726!16s%2Fg%2F11j0nfmm1g",
  },
  // Split so the address never exists as one literal string in source/markup — see ObfuscatedEmail.
  emailUser: "iamsagorahmed",
  emailDomain: "gmail.com",
  phone: "01333-393192",
  phoneHref: "+8801333393192",
  availableForWork: true,
  yearsExperience: 7,
  projectsShipped: 200,
  reviewsCount: 125,
  countriesCount: 30,
  socials: [
    { label: "GitHub", href: "https://github.com/sagorahmedcom", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sagorahmedcom/", icon: "linkedin" },
    { label: "X / Twitter", href: "https://x.com/sagorahmedcom", icon: "twitter" },
    { label: "Fiverr", href: "https://www.fiverr.com/sagorself", icon: "fiverr" },
  ],
};

export const trustBadges = [
  { title: "Custom Development", subtitle: "Tailored to your goals", icon: "code" },
  { title: "Performance Focused", subtitle: "Fast, optimized & reliable", icon: "zap" },
  { title: "Secure & Scalable", subtitle: "Built for long-term growth", icon: "shield" },
  { title: `${siteConfig.reviewsCount}+ Reviews`, subtitle: "Happy clients on Fiverr", icon: "star" },
] as const;

export const focusAreas = [
  "Custom WordPress theme development & site optimization",
  "Headless WordPress + Next.js frontend builds",
  "WooCommerce stores that are fast, stable, and easy to manage",
  "Performance tuning — Core Web Vitals, load speed, SEO-readiness",
  "Long-term collaboration with international teams & agencies",
];

export const availableFor = [
  "Custom WordPress projects",
  "Next.js / Headless WordPress frontend development",
  "Performance optimization & site audits",
  "Long-term partnerships",
];

export const bentoStats = [
  {
    id: "projects",
    size: "large",
    number: `${siteConfig.projectsShipped}+`,
    title: "Projects Delivered",
    description:
      "Across WordPress, WooCommerce, custom themes, and Next.js frontends — all performance-focused and client-first.",
  },
  {
    id: "workflow",
    size: "small",
    title: "Seamless Dev Workflow",
    description: "From design to deployment — WordPress, Elementor, and Next.js, kept clean, fast, and collaborative.",
    icons: ["wordpress", "nextjs", "cloudflare"],
  },
  {
    id: "reviews",
    size: "medium",
    number: `${siteConfig.reviewsCount}+`,
    title: "Client Reviews",
    description: "Rated 5-stars on Fiverr — I deliver exactly what your business needs.",
  },
  {
    id: "experience",
    size: "large",
    number: `${siteConfig.yearsExperience}+`,
    title: "Years of Experience",
    description: "Delivering reliable, high-performance websites for clients since 2019.",
  },
  {
    id: "countries",
    size: "wide",
    number: `${siteConfig.countriesCount}+`,
    title: `Clients in ${siteConfig.countriesCount}+ Countries`,
    description:
      "From the US and Canada to Europe, Australia, and Asia — I've delivered projects across 16% of the world's countries.",
  },
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const skillGroups = [
  {
    title: "CMS & E-commerce",
    items: ["WordPress", "WooCommerce", "Elementor", "Gravity Forms", "JetEngine / Crocoblock"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "Headless WordPress"],
  },
  {
    title: "Performance & Delivery",
    items: ["Core Web Vitals", "Site Speed Optimization", "Cloudflare", "Vercel Deployment"],
  },
];

export const marqueeSkills = [
  "WordPress",
  "WooCommerce",
  "Elementor",
  "Gravity Forms",
  "JetEngine / Crocoblock",
  "Next.js",
  "React.js",
  "JavaScript",
  "Headless WordPress",
];

export const services = [
  {
    slug: "wordpress-development",
    title: "Custom WordPress Development",
    summary: "Pixel-perfect, fast-loading WordPress sites built from scratch — no bloated page builders.",
    features: [
      "Custom theme coded from a Figma design",
      "Advanced Custom Fields (ACF) architecture",
      "Clean, editable block-based templates",
      "SEO & Core Web Vitals optimized",
    ],
    price: "Starting at $450",
  },
  {
    slug: "woocommerce-stores",
    title: "WooCommerce Stores",
    summary: "Online stores that are easy for you to manage and fast for customers to check out on.",
    features: [
      "Custom product & checkout design",
      "Payment gateway & shipping setup",
      "Inventory & order workflow config",
      "Speed optimization for storefronts",
    ],
    price: "Starting at $650",
  },
  {
    slug: "frontend-engineering",
    title: "Frontend App Development",
    summary: "Modern, interactive interfaces built with React and Next.js for products and marketing sites.",
    features: [
      "React / Next.js application builds",
      "Design-to-code with pixel accuracy",
      "API integration & dynamic data",
      "Animation with Framer Motion",
    ],
    price: "Starting at $600",
  },
  {
    slug: "landing-pages",
    title: "High-Converting Landing Pages",
    summary: "Marketing pages engineered around one goal: turning visitors into leads or customers.",
    features: [
      "Conversion-focused layout & copy structure",
      "Mobile-first, sub-2s load times",
      "A/B test-ready component structure",
      "Analytics & pixel setup",
    ],
    price: "Starting at $250",
  },
  {
    slug: "site-speed-seo",
    title: "Speed & SEO Optimization",
    summary: "Diagnose and fix what's slowing your site down and holding back your search rankings.",
    features: [
      "Core Web Vitals audit & fixes",
      "Image, script & caching optimization",
      "Technical SEO cleanup",
      "Before / after performance report",
    ],
    price: "Starting at $180",
  },
  {
    slug: "maintenance",
    title: "Care & Maintenance Plans",
    summary: "Ongoing updates, backups, and support so your site stays secure and online.",
    features: [
      "Core, theme & plugin updates",
      "Uptime & security monitoring",
      "Monthly backups",
      "Priority email support",
    ],
    price: "From $60 / month",
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    description: "I'll talk through your goals, audience, and scope so the plan matches what your project actually needs.",
  },
  {
    step: "02",
    title: "Design & Plan",
    description: "I map the structure, wireframe key pages, and lock a timeline before any code is written.",
  },
  {
    step: "03",
    title: "Build",
    description: "Clean, documented code — WordPress or React — with progress check-ins so there are no surprises.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Testing, deployment, and a handover walkthrough, plus support after launch when you need it.",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: "WordPress" | "Frontend" | "WooCommerce";
  tags: string[];
  description: string;
  year: string;
  accent: string;
};

// No real case studies published yet — the portfolio pages show a "coming soon" state until this has entries.
export const projects: Project[] = [];

export const experience = {
  range: "2019 — Present",
  duration: "7+ Years",
  title: "Freelance Web & WordPress Developer",
  bullets: [
    {
      text: "Delivered 200+ projects for clients across multiple continents (Fiverr + direct/agency clients)",
    },
    {
      text: "Specialized in custom WordPress theme development, WooCommerce, and site performance optimization",
    },
    {
      text: "Expanded into high-performance Next.js frontends and Headless WordPress integrations for international clients",
      milestone: "2026",
    },
    {
      text: "125+ verified reviews on Fiverr — long-term client relationships, repeat business",
    },
    {
      text: "Remote collaboration experience with teams across US, UK, EU, and Australia markets",
    },
  ],
};

export const education = [
  {
    school: "Bangladesh University of Business & Technology (BUBT)",
    degree: "BA, English Language and Literature",
    years: "2016 – 2020",
  },
  {
    school: "Dhaka Commerce College",
    degree: "Higher Secondary Certificate, Business Studies",
    years: "2012 – 2014",
  },
];

export const values = [
  {
    title: "Clean code, no shortcuts",
    description: "No bloated page builders or copy-pasted plugins. Every line is written to be readable and maintainable.",
  },
  {
    title: "Performance is a feature",
    description: "A beautiful site that loads slowly is a broken site. Speed is part of the design brief, not an afterthought.",
  },
  {
    title: "Clear communication",
    description: "Weekly updates, honest timelines, and no disappearing after the deposit clears.",
  },
  {
    title: "Built to be edited",
    description: "You should be able to update your own content without calling a developer for every text change.",
  },
];

export const faqs = [
  {
    question: "Do you work with WordPress, React, or both?",
    answer:
      "Both. Many clients need a content-managed WordPress site their team can edit; others need a fully custom React or Next.js application. I'll recommend whichever fits your goals and budget.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A landing page usually takes 1–2 weeks. A full custom WordPress or WooCommerce build runs 3–6 weeks. Frontend applications vary based on scope — I'll give you a firm timeline after a quick discovery call.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. Every project includes 30 days of free bug-fix support after launch, and I offer monthly care plans for updates, backups, and monitoring after that.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "A short brief on your goals, any brand assets or design files you already have, and content (copy/images) if available. If you don't have content ready, I can help structure placeholders you fill in later.",
  },
  {
    question: "How do payments work?",
    answer:
      "Projects are split into milestones — typically 50% upfront, 50% on delivery for smaller projects, or split across milestones for larger ones. Invoices are sent via bank transfer or Wise.",
  },
];
