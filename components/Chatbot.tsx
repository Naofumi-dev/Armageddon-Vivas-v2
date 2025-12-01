import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';
import { SOCIAL_LINKS, SERVICES, PROJECTS, FAQS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<any>(null);

  // Initialize Chat Session
  useEffect(() => {
    const initChat = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        // Construct System Instruction from Constants
        // Removed priceTeaser reference to match updated Service interface
        const serviceList = SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n');
        const projectList = PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}`).join('\n');
        const faqList = FAQS.map(f => `Q: ${f.question} A: ${f.answer}`).join('\n');
        
        const systemInstruction = `
          You are the AI assistant for Armageddon Automation, a portfolio brand owned by Armageddon Vivas.
          Armageddon is an SEO Specialist (3 years exp) and Automation Engineer (Zapier/Make.com) based in the Philippines.
          He is a member of the TechVA community.

          Your goal is to answer visitor questions professionally, explain services, and encourage booking a call via Calendly.
          
          SERVICES:
          ${serviceList}
          
          FEATURED PROJECTS:
          ${projectList}
          
          COMMON QUESTIONS:
          ${faqList}
          
          IMPORTANT LINKS:
          - Calendly: ${SOCIAL_LINKS.calendly}
          - Upwork: ${SOCIAL_LINKS.upwork}
          - Email: ${SOCIAL_LINKS.email}
          
          Tone: Professional, helpful, concise, and tech-savvy.
          If asked about pricing, use the data in the FAQs or advise them to book a call for a custom quote.
          If asked to book a call, provide the Calendly link.
        `;

        chatSessionRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: systemInstruction,
          }
        });
      } catch (error) {
        console.error("Failed to initialize AI chat", error);
      }
    };

    if (!chatSessionRef.current) {
        initChat();
    }
  }, []);

  useEffect(() => {
    // Initial greeting
    if (messages.length === 0) {
      setMessages([
        {
          id: '1',
          text: "Hi! I'm the Armageddon Automation assistant. I'm powered by Gemini AI. How can I help with SEO or automation today?",
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
    }
  }, [messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      if (chatSessionRef.current) {
        const result = await chatSessionRef.current.sendMessage({ message: userMsg.text });
        const responseText = result.text;
        
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          text: responseText,
          sender: 'bot',
          timestamp: new Date()
        }]);
      } else {
        // Fallback if API key is missing or init failed
        setMessages(prev => [...prev, {
            id: (Date.now() + 1).toString(),
            text: "I'm currently offline (API Key not configured). Please email armageddonvivas@gmail.com directly.",
            sender: 'bot',
            timestamp: new Date()
        }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: "I encountered an error connecting to the server. Please try again later.",
        sender: 'bot',
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-80 md:w-96 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col"
            style={{ maxHeight: '500px' }}
          >
            {/* Header */}
            <div className="bg-primary p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-white font-bold">Automation Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-slate-50 dark:bg-slate-900/50 h-80">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-3 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-4 py-2 text-sm whitespace-pre-wrap ${
                      msg.sender === 'user'
                        ? 'bg-primary text-white rounded-br-none'
                        : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-gray-200 dark:border-gray-600 rounded-bl-none shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                 <div className="flex justify-start mb-3">
                    <div className="bg-white dark:bg-slate-700 border border-gray-200 dark:border-gray-600 rounded-lg rounded-bl-none px-4 py-3 shadow-sm">
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                        </div>
                    </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about pricing..."
                  disabled={isTyping}
                  className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-900 text-sm focus:outline-none focus:border-primary dark:text-white disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isTyping || !input.trim()}
                  className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <i className="fa-solid fa-paper-plane text-sm"></i>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-blue-800 transition-all hover:scale-110 focus:outline-none ring-4 ring-primary/20"
        aria-label="Toggle Chat"
      >
        <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-comment-dots'} text-xl`}></i>
      </button>
    </div>
  );
};

export default Chatbot;