import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const predefinedResponses: { [key: string]: string } = {
  hello: "Hello! Welcome to Agrimak. I'm here to help you with product information, orders, and general questions. How can I assist you today?",
  hi: "Hi there! How can I help you with your agricultural needs today?",
  hours: "Our institution is open Monday-Friday 8AM-6PM, Saturday 9AM-4PM. We're closed on Sundays. Online ordering is available 24/7!",
  delivery: "We offer local delivery within 20 miles of our facility. Delivery is free for orders over $50, otherwise it's $5. Delivery usually takes 1-2 business days.",
  organic: "Yes! We specialize in organic, locally-sourced produce. All our organic products are certified and grown using sustainable farming practices.",
  seasonal: "Our seasonal highlights right now include fresh tomatoes, sweet corn, and strawberries. We also have excellent honey and farm-fresh eggs year-round!",
  payment: "We accept all major credit cards, debit cards, and cash on delivery. Payment is processed securely during checkout.",
  freshness: "All our produce is harvested fresh and delivered within 24-48 hours. We work directly with local farmers to ensure peak freshness and quality.",
  default: "I'd be happy to help! You can ask me about our products, delivery options, store hours, seasonal produce, or how to place an order. What would you like to know?"
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm the Agrimak assistant. I can help you with product information, delivery questions, store hours, and more. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return predefinedResponses.hello;
    }
    if (lowerMessage.includes('hours') || lowerMessage.includes('open') || lowerMessage.includes('time')) {
      return predefinedResponses.hours;
    }
    if (lowerMessage.includes('delivery') || lowerMessage.includes('shipping')) {
      return predefinedResponses.delivery;
    }
    if (lowerMessage.includes('organic') || lowerMessage.includes('sustainable')) {
      return predefinedResponses.organic;
    }
    if (lowerMessage.includes('seasonal') || lowerMessage.includes('fresh') || lowerMessage.includes('recommend')) {
      return predefinedResponses.seasonal;
    }
    if (lowerMessage.includes('payment') || lowerMessage.includes('pay') || lowerMessage.includes('credit')) {
      return predefinedResponses.payment;
    }
    if (lowerMessage.includes('fresh') || lowerMessage.includes('quality')) {
      return predefinedResponses.freshness;
    }
    
    return predefinedResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg transition-colors z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4 rounded-t-lg flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <span className="font-medium">Agrimak Assistant</span>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-emerald-600 text-white'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot ? (
                      <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    ) : (
                      <User className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    )}
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}