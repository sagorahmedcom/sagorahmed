export const siteConfig = {
  name: "Sagor Ahmed",
  handle: "sagorahmed",
  role: "WordPress Developer & Frontend Engineer",
  shortTagline: "I build fast, custom WordPress sites and modern web interfaces.",
  location: "Dhaka, Bangladesh",
  // Split so the address never exists as one literal string in source/markup — see ObfuscatedEmail.
  emailUser: "sagor",
  emailDomain: "sagorahmed.com",
  availableForWork: true,
  yearsExperience: 4,
  projectsShipped: 60,
  clientsServed: 35,
  socials: [
    { label: "GitHub", href: "https://github.com/", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
    { label: "X / Twitter", href: "https://x.com/", icon: "twitter" },
    { label: "Upwork", href: "https://upwork.com/", icon: "briefcase" },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const skillGroups = [
  {
    title: "WordPress",
    items: ["Custom Theme Dev", "WooCommerce", "ACF Pro", "Elementor / Gutenberg", "Plugin Development", "Speed & SEO"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "REST / GraphQL APIs"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git & GitHub", "Figma to Code", "PHP & MySQL", "Vercel / cPanel", "Webpack / Vite", "Performance Audits"],
  },
];

export const marqueeSkills = [
  "WordPress",
  "PHP",
  "WooCommerce",
  "ACF Pro",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "MySQL",
  "REST API",
  "Figma",
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
    description: "We talk through your goals, audience, and scope so the plan matches what your project actually needs.",
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

export const projects: Project[] = [
  {
    slug: "northbrew-coffee",
    title: "Northbrew Coffee Co.",
    category: "WooCommerce",
    tags: ["WooCommerce", "ACF", "Custom Theme"],
    description: "A custom WooCommerce storefront for a specialty coffee roaster with subscription-based checkout.",
    year: "2025",
    accent: "from-[#4F52FF]/40 to-[#2B2D8F]/15",
  },
  {
    slug: "flux-dashboard",
    title: "Flux Analytics Dashboard",
    category: "Frontend",
    tags: ["Next.js", "TypeScript", "Charts"],
    description: "A real-time analytics dashboard built with Next.js, featuring live charts and role-based views.",
    year: "2025",
    accent: "from-[#2B2D8F]/45 to-[#4F52FF]/15",
  },
  {
    slug: "studio-marbel",
    title: "Studio Marbel Agency Site",
    category: "WordPress",
    tags: ["Gutenberg Blocks", "GSAP", "SEO"],
    description: "A motion-rich agency portfolio built on custom Gutenberg blocks for full client editability.",
    year: "2024",
    accent: "from-[#4F52FF]/30 to-[#0D0E1A]/45",
  },
  {
    slug: "trailhead-outfitters",
    title: "Trailhead Outfitters",
    category: "WooCommerce",
    tags: ["WooCommerce", "Multi-currency", "CRO"],
    description: "An outdoor gear store rebuilt for speed, cutting load time by 61% and lifting conversions.",
    year: "2024",
    accent: "from-[#2B2D8F]/40 to-[#4F52FF]/25",
  },
  {
    slug: "pulse-saas-landing",
    title: "Pulse SaaS Landing",
    category: "Frontend",
    tags: ["React", "Framer Motion", "Landing Page"],
    description: "A high-converting landing page for a SaaS product launch with interactive product previews.",
    year: "2024",
    accent: "from-[#4F52FF]/45 to-[#2B2D8F]/20",
  },
  {
    slug: "wellness-collective",
    title: "Wellness Collective",
    category: "WordPress",
    tags: ["Custom Theme", "Booking", "ACF Pro"],
    description: "A booking-enabled WordPress site for a multi-practitioner wellness studio.",
    year: "2023",
    accent: "from-[#0D0E1A]/40 to-[#4F52FF]/30",
  },
];

export const testimonials = [
  {
    quote:
      "Sagor rebuilt our WooCommerce store from the ground up and our page speed score went from 41 to 96. Support and communication were excellent throughout.",
    name: "Amelia Ross",
    role: "Founder, Northbrew Coffee Co.",
  },
  {
    quote:
      "We needed a fast turnaround on a Next.js dashboard and Sagor delivered clean, well-documented code ahead of schedule.",
    name: "Daniel Cho",
    role: "Product Lead, Flux Analytics",
  },
  {
    quote:
      "Finally a developer who understands both design and WordPress internals. Our custom blocks are exactly what we envisioned.",
    name: "Priya Nair",
    role: "Creative Director, Studio Marbel",
  },
];

export const timeline = [
  { year: "2020", title: "git init", description: "Started freelancing part-time, building small WordPress sites for local businesses." },
  { year: "2021", title: "npm install frontend", description: "Went deep on JavaScript, React, and modern build tooling beyond WordPress." },
  { year: "2022", title: "git commit -m \"full-time\"", description: "Left the 9-to-5 to freelance full-time as a WordPress and frontend developer." },
  { year: "2024", title: "git merge design-and-code", description: "Started pairing design-to-code precision with performance-first engineering." },
  { year: "2026", title: "git push --tags v2.0", description: "Now working with startups and agencies worldwide on custom WordPress and React builds." },
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
      "A landing page usually takes 1–2 weeks. A full custom WordPress or WooCommerce build runs 3–6 weeks. Frontend applications vary based on scope — I'll give you a firm timeline after our discovery call.",
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
