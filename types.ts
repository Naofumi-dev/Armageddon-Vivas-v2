export interface Project {
  id: string;
  title: string;
  category: 'SEO' | 'Automation' | 'Analytics';
  description: string;
  tech: string[];
  image: string;
  stats?: { label: string; value: string }[];
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Tool {
  name: string;
  category: string;
  iconClass: string;
  color?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
  isAction?: boolean;
}