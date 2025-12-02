import { Project, Testimonial, Service, FAQItem, Tool, ProcessStep, Deliverable, VideoTestimonial } from './components/types';

export const SERVICES: Service[] = [
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Technical SEO, keyword research, and on-page optimization to drive organic growth.',
    icon: 'fa-solid fa-magnifying-glass-chart',
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    description: 'Seamless integration using Zapier and Make.com to replace manual tasks.',
    icon: 'fa-solid fa-robot',
  },
  {
    id: 'analytics',
    title: 'Analytics Setup',
    description: 'GA4 and GTM configuration for accurate funnel tracking and data insights.',
    icon: 'fa-solid fa-chart-line',
  },
  {
    id: 'custom',
    title: 'Custom Integrations',
    description: 'Tailored solutions connecting your favorite tools (Slack, Sheets, CRMs).',
    icon: 'fa-solid fa-code-branch',
  }
];

export const TOOLS: Tool[] = [
  // Automation
  { name: 'n8n', category: 'Automation', iconClass: 'fa-solid fa-bolt', color: 'text-red-500' },
  { name: 'Zapier', category: 'Automation', iconClass: 'fa-solid fa-asterisk', color: 'text-orange-500' },
  { name: 'Make.com', category: 'Automation', iconClass: 'fa-solid fa-infinity', color: 'text-purple-600' },
  { name: 'Pipedream', category: 'Automation', iconClass: 'fa-solid fa-pipe', color: 'text-green-500' },
  
  // CRM & Marketing
  { name: 'GoHighLevel', category: 'CRM', iconClass: 'fa-solid fa-bullseye', color: 'text-indigo-500' },

  // SEO & Analytics
  { name: 'Google Analytics 4', category: 'SEO', iconClass: 'fa-solid fa-chart-simple', color: 'text-yellow-500' },
  { name: 'Google Search Console', category: 'SEO', iconClass: 'fa-brands fa-google', color: 'text-blue-500' },
  { name: 'Semrush', category: 'SEO', iconClass: 'fa-solid fa-globe', color: 'text-orange-600' },
  { name: 'Ahrefs', category: 'SEO', iconClass: 'fa-solid fa-layer-group', color: 'text-blue-600' },

  // AI & Dev
  { name: 'OpenAI API', category: 'AI', iconClass: 'fa-solid fa-brain', color: 'text-teal-600' },
  { name: 'Google Gemini', category: 'AI', iconClass: 'fa-solid fa-star', color: 'text-blue-400' },
  { name: 'Slack', category: 'Integration', iconClass: 'fa-brands fa-slack', color: 'text-purple-500' },
  { name: 'Airtable', category: 'Database', iconClass: 'fa-solid fa-table', color: 'text-yellow-400' },
];

export const PROJECTS: Project[] = [
  // SEO Case Study (Flagship)
  {
    id: 'medical-ecom',
    title: 'Medical Simulation eCommerce SEO',
    category: 'SEO',
    description: 'A comprehensive SEO campaign for a medical/ballistics brand. Focused on technical indexing, sitemaps, and GA4 funnel tracking.',
    tech: ['Google Search Console', 'GA4', 'GTM', 'Technical SEO'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', 
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7399705917480427520/',
    stats: [
      { label: 'Organic Clicks', value: '+27%' },
      { label: 'Impressions', value: '+30%' },
      { label: 'Rank Increase', value: 'Pos 17 to 10.3' },
      { label: 'Tracked Rev', value: '$1.3K' }
    ]
  },
  // Automation Projects
  {
    id: 'lead-action-automation',
    title: 'Comprehensive Lead Actions',
    category: 'Automation',
    description: 'End-to-end lead processing system that validates, segments, and routes leads to the appropriate sales funnel or follow-up sequence.',
    tech: ['Zapier', 'CRM', 'Email Parsing'],
    image: 'https://raw.githubusercontent.com/Naofumi-dev/website-portfolio/main/Lead%20Action%20Automation%20-%20Zapier.png',
    link: 'https://github.com/Naofumi-dev/website-portfolio/blob/main/Lead%20Action%20Automation%20-%20Zapier.png',
    stats: [
      { label: 'Conversion', value: 'Optimized' },
      { label: 'Manual Ops', value: 'Zero' }
    ]
  },
  {
    id: 'ghl-missed-call',
    title: 'GHL Missed Call Text-Back',
    category: 'Automation',
    description: 'GoHighLevel automation that instantly sends a text message when a client call is missed, preventing lead leakage.',
    tech: ['GoHighLevel', 'SMS Automation', 'CRM'],
    image: 'https://raw.githubusercontent.com/Naofumi-dev/website-portfolio/main/ghl-missed-call.png',
    link: 'https://github.com/Naofumi-dev/website-portfolio/blob/main/ghl-missed-call.png',
    stats: [
      { label: 'Lead Retention', value: '+40%' },
      { label: 'Response', value: 'Instant' }
    ]
  },
  {
    id: 'make-asana-xero',
    title: 'Asana to Xero Sync',
    category: 'Automation',
    description: 'Seamless integration between project management (Asana) and accounting (Xero). Automatically creates invoices when milestones are completed.',
    tech: ['Make.com', 'Asana', 'Xero'],
    image: 'https://raw.githubusercontent.com/Naofumi-dev/website-portfolio/main/make-asana-xero.png',
    link: 'https://github.com/Naofumi-dev/website-portfolio/blob/main/make-asana-xero.png',
    stats: [
      { label: 'Admin Time', value: '-5 Hrs/Wk' },
      { label: 'Accuracy', value: '100%' }
    ]
  },
  {
    id: 'n8n-gemini-agent',
    title: 'AI Agent with Gemini & n8n',
    category: 'Automation',
    description: 'An advanced AI agent built on n8n that leverages the Google Gemini API to process prompts and automate complex reasoning tasks.',
    tech: ['n8n', 'Google Gemini API', 'Webhooks'],
    image: 'https://raw.githubusercontent.com/Naofumi-dev/website-portfolio/main/n8n-gemini-agent.png',
    link: 'https://github.com/Naofumi-dev/website-portfolio/blob/main/n8n-gemini-agent.png',
    stats: [
      { label: 'AI Model', value: 'Gemini Pro' },
      { label: 'Platform', value: 'n8n' }
    ]
  },
  {
    id: 'n8n-job-scraper',
    title: 'Automated Job Scraper',
    category: 'Automation',
    description: 'An n8n workflow designed to scrape job boards, filter for relevant criteria, and aggregate results into a centralized database.',
    tech: ['n8n', 'Web Scraping', 'HTML Parser'],
    image: 'https://raw.githubusercontent.com/Naofumi-dev/website-portfolio/main/n8n-job-scraper.png',
    link: 'https://github.com/Naofumi-dev/website-portfolio/blob/main/n8n-job-scraper.png',
    stats: [
      { label: 'Jobs Scraped', value: '1k+/day' },
      { label: 'Time Saved', value: '2 Hrs/Day' }
    ]
  },
  {
    id: 'pipedream-story',
    title: 'Serverless Event Workflow',
    category: 'Automation',
    description: 'Complex event-driven architecture hosted on Pipedream, handling high-volume webhooks and API orchestration.',
    tech: ['Pipedream', 'Node.js', 'APIs'],
    image: 'https://raw.githubusercontent.com/Naofumi-dev/website-portfolio/main/pipedream-story.png',
    link: 'https://github.com/Naofumi-dev/website-portfolio/blob/main/pipedream-story.png',
    stats: [
      { label: 'Events', value: '10k/Day' },
      { label: 'Uptime', value: '99.9%' }
    ]
  },
  {
    id: 'make-google-sheets',
    title: 'Google Sheets Lead System',
    category: 'Automation',
    description: 'Streamlined data pipeline capturing leads from various sources and organizing them instantly into Google Sheets with status tracking.',
    tech: ['Make.com', 'Google Sheets', 'Forms'],
    image: 'https://raw.githubusercontent.com/Naofumi-dev/website-portfolio/main/make-google-sheets.png',
    link: 'https://github.com/Naofumi-dev/website-portfolio/blob/main/make-google-sheets.png',
    stats: [
      { label: 'Data Latency', value: '<1s' },
      { label: 'Errors', value: '0%' }
    ]
  },
  {
    id: 'zapier-lead-actions',
    title: 'Advanced Lead Routing',
    category: 'Automation',
    description: 'Sophisticated Zapier workflow handling multi-step logic for lead assignment based on geography, budget, or service type.',
    tech: ['Zapier', 'Paths', 'Webhooks'],
    image: 'https://raw.githubusercontent.com/Naofumi-dev/website-portfolio/main/zapier-lead-actions.png',
    link: 'https://github.com/Naofumi-dev/website-portfolio/blob/main/zapier-lead-actions.png',
    stats: [
      { label: 'Routing', value: 'Instant' },
      { label: 'Logic Steps', value: '15+' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alex R.',
    role: 'Owner',
    company: 'Medical Simulation eCom',
    problem: "Struggling with organic visibility and untracked sales data.",
    solution: "Technical SEO overhaul and GA4 conversion tracking.",
    outcome: "27% increase in organic clicks and $1.3k+ revenue tracked.",
    rating: 5
  },
  {
    id: '2',
    name: 'Upwork Client',
    role: 'Business Owner',
    company: 'Confidential',
    problem: "Needed a reliable specialist who could handle technical tasks without hand-holding.",
    solution: "Armageddon's proactive communication and technical expertise.",
    outcome: "Projects delivered on time with high accuracy and zero errors.",
    rating: 5
  },
  {
    id: '3',
    name: 'Agency Partner',
    role: 'Director',
    company: 'Digital Agency',
    problem: "Our analytics data was messy, making it impossible to report ROI to clients.",
    solution: "Complete GTM/GA4 cleanup and tracking setup.",
    outcome: "Clean, reliable data that allowed us to scale our campaigns.",
    rating: 5
  }
];

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 'v_ai',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/uKy7cQNX5nI',
    clientName: 'Atlas',
    role: 'AI Operations Agent',
    company: 'Armageddon Automation',
    isAI: true
  },
  {
    id: 'v1',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1',
    clientName: 'Sarah Jenkins',
    role: 'Marketing Director',
    company: 'TechFlow'
  },
  {
    id: 'v2',
    thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1',
    clientName: 'Michael Chen',
    role: 'Founder',
    company: 'Logistics Pro'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How long does a typical project take?",
    answer: "Simple automations (like Slack notifications) take 48 hours. Full custom ecosystem builds usually take 2-4 weeks. I work fast to get you results quickly."
  },
  {
    question: "Do I need to give you access to my accounts?",
    answer: "Yes, temporarily. I use secure password managers (like 1Password) to handle credentials safely, and I'll walk you through how to revoke access once we're done."
  },
  {
    question: "What happens if something breaks later?",
    answer: "I provide a 30-day stability guarantee. If any workflow breaks within that period, I fix it for free. I also offer low-cost maintenance retainers."
  },
  {
    question: "What industries do you specialize in?",
    answer: "I work mostly with eCommerce, SaaS, and Service Agencies—businesses that handle high volumes of leads or data."
  },
  {
    question: "How much does it cost?",
    answer: "Audits start at $150. Custom builds start at $300. I operate on a fixed-price model, so you'll never get hit with a surprise hourly bill."
  },
  {
    question: "Can we start with a smaller engagement?",
    answer: "Absolutely. I recommend starting with a small 'Quick Win' automation (like a lead capture workflow) so you can see the value before scaling up."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Book Your Free Strategy Call",
    description: "We identify your expensive manual tasks and map out a solution in 15 minutes. No sales pressure.",
    icon: "fa-solid fa-calendar-check"
  },
  {
    number: "02",
    title: "I Build & Launch Workflows",
    description: "I design, build, and test your custom automation system. You get regular updates while I handle the tech.",
    icon: "fa-solid fa-laptop-code"
  },
  {
    number: "03",
    title: "You Scale with Less Work",
    description: "Your team stops data entry. You get better insights, faster responses, and a business that grows on autopilot.",
    icon: "fa-solid fa-chart-line"
  }
];

export const DELIVERABLES: Deliverable[] = [
  { text: "Workflow Audit & Strategy Session", description: "Deep-dive into your bottlenecks." },
  { text: "Custom-Built Automations", description: "Zapier, Make.com, or n8n workflows." },
  { text: "Real-Time Dashboard Setup", description: "GA4/Looker reporting for visibility." },
  { text: "Launch Support (2 Weeks)", description: "Ensuring everything runs smoothly." },
  { text: "Loom Walkthroughs", description: "Video documentation for your team." },
  { text: "API & Tool Integration", description: "Connecting your stack perfectly." }
];

export const SOCIAL_LINKS = {
  calendly: "https://calendly.com/armageddon-automation",
  upwork: "https://www.upwork.com/freelancers/~0141404360618d4664",
  onlineJobs: "https://www.onlinejobs.ph/jobseekers/info/2232859",
  linkedIn: "https://linkedin.com", 
  email: "armageddonvivas@gmail.com"
};
