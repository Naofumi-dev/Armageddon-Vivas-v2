import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FAQS } from '../constants';

const SEO: React.FC = () => {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Armageddon Automation",
    "url": "https://armageddon-automation.vercel.app",
    "logo": "https://picsum.photos/id/2/200/200",
    "founder": {
      "@type": "Person",
      "name": "Armageddon Vivas",
      "jobTitle": "SEO Specialist & Automation Engineer"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "Global",
      "availableLanguage": "English"
    }
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <title>Armageddon Automation | Expert SEO & Workflow Automation by Armageddon Vivas</title>
      <meta name="description" content="Transform your business with SEO-optimized automation solutions from Armageddon Automation. 3+ years in SEO, practice projects solving real scenarios. Book a call today!" />
      <meta name="keywords" content="automation services Philippines, SEO specialist, Zapier expert, workflow automation, TechVA, Make.com expert" />
      <link rel="canonical" href="https://armageddon-automation.vercel.app" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Armageddon Automation | Expert SEO & Workflow Automation" />
      <meta property="og:description" content="Streamline your world with data-driven SEO and seamless workflows." />
      <meta property="og:image" content="https://picsum.photos/id/2/1200/630" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Armageddon Automation" />
      <meta name="twitter:description" content="Transform your business with SEO-optimized automation solutions." />
      
      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
      <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
    </Helmet>
  );
};

export default SEO;