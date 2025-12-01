import { Project, Testimonial, Service, FAQItem, Tool } from './types';

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
    image: 'https://picsum.photos/id/20/800/600', // Professional placeholder
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
    link: 'https://github.com/Naofumi-dev/website-portfolio/blob/main/n8n-job-scraper.png'
  },
  {
    id: 'pipedream-story',
    title: 'Serverless Event Workflow',
    category: 'Automation',
    description: 'Complex event-driven architecture hosted on Pipedream, handling high-volume webhooks and API orchestration.',
    tech: ['Pipedream', 'Node.js', 'APIs'],
    image: 'https://raw.githubusercontent.com/Naofumi-dev/website-portfolio/main/pipedream-story.png',
    link: 'https://github.com/Naofumi-dev/website-portfolio/blob/main/pipedream-story.png'
  },
  {
    id: 'make-google-sheets',
    title: 'Google Sheets Lead System',
    category: 'Automation',
    description: 'Streamlined data pipeline capturing leads from various sources and organizing them instantly into Google Sheets with status tracking.',
    tech: ['Make.com', 'Google Sheets', 'Forms'],
    image: 'https://raw.githubusercontent.com/Naofumi-dev/website-portfolio/main/make-google-sheets.png',
    link: 'https://github.com/Naofumi-dev/website-portfolio/blob/main/make-google-sheets.png'
  },
  {
    id: 'zapier-lead-actions',
    title: 'Advanced Lead Routing',
    category: 'Automation',
    description: 'Sophisticated Zapier workflow handling multi-step logic for lead assignment based on geography, budget, or service type.',
    tech: ['Zapier', 'Paths', 'Webhooks'],
    image: 'https://raw.githubusercontent.com/Naofumi-dev/website-portfolio/main/zapier-lead-actions.png',
    link: 'https://github.com/Naofumi-dev/website-portfolio/blob/main/zapier-lead-actions.png'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alex R.',
    role: 'Medical Brand Owner',
    content: "Armageddon's SEO tweaks boosted our clicks by 30% in weeks—game-changer for our eCom site!",
    rating: 5
  },
  {
    id: '2',
    name: 'TechVA Colleague',
    role: 'Philippines Startup',
    content: "His Zapier automation saved us hours on lead handling. Professional and insightful!",
    rating: 5
  },
  {
    id: '3',
    name: 'Confidential Client',
    role: 'Ballistics Retailer',
    content: "From GA4 setup to funnel insights, Armageddon delivered $1K+ in tracked value fast.",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What is automation consulting?",
    answer: "It involves streamlining your repetitive business tasks using tools like Zapier or Make.com, allowing you to focus on high-value work."
  },
  {
    question: "Do you have client experience?",
    answer: "Yes, I have 3 years of experience in SEO. My automation portfolio consists of rigorous practice projects solving real-world scenarios, backed by the TechVA community standards."
  },
  {
    question: "What is your pricing?",
    answer: "Basic SEO Audits start at $150, and Automation Setups at $300. Use the chatbot in the corner for a detailed quote!"
  },
  {
    question: "How do I get started?",
    answer: "You can book a free discovery call via the Calendly link below or send a message through the contact form."
  },
  {
    question: "Do you offer SEO + Automation bundles?",
    answer: "Absolutely. I specialize in combining SEO for traffic and automation for lead handling. My full package starts at $800."
  },
  {
    question: "Are you part of TechVA?",
    answer: "Yes, I am a proud member of TechVA, the largest and most respected automation community in the Philippines."
  }
];

export const SOCIAL_LINKS = {
  calendly: "https://calendly.com/armageddon-automation",
  upwork: "https://www.upwork.com/freelancers/~0141404360618d4664",
  onlineJobs: "https://www.onlinejobs.ph/jobseekers/info/2232859",
  linkedIn: "https://linkedin.com", 
  email: "armageddonvivas@gmail.com"
};