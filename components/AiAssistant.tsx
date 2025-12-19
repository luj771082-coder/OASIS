import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';
import { ChatMessage, Sender } from '../types';
import { getGeminiResponse } from '../services/geminiService';

const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: Sender.Bot,
      text: 'Greetings. I am your specialized research assistant for Oasis Desertification. How can I assist you with scientific concepts, current trends, or ecological data today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: Sender.User,
      text: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await getGeminiResponse(newUserMessage.text);
      
      const newBotMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: Sender.Bot,
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newBotMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: Sender.Bot,
        text: "I encountered an error connecting to the research database. Please try again.",
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section id="ai-assistant" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Intro Text */}
        <div className="lg:col-span-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-oasis-100 text-oasis-800 text-sm font-medium">
            <Sparkles size={16} />
            <span>Powered by Gemini AI</span>
          </div>
          <h2 className="font-serif text-4xl text-gray-900">Expert Insights on Demand</h2>
          <p className="text-gray-600 leading-relaxed font-light">
            Engage with our AI model trained to assist with queries regarding arid biology, hydrological cycles, and reclamation strategies. 
          </p>
          <div className="bg-sand-50 p-6 rounded-2xl border border-sand-100">
            <h4 className="font-serif text-lg text-gray-800 mb-3">Suggested Queries:</h4>
            <ul className="space-y-3">
              {[
                "Explain the 'fertile island' effect.",
                "How does drip irrigation impact salinity?",
                "Latest trends in sand fixation technology."
              ].map((query, idx) => (
                <li 
                  key={idx}
                  className="text-sm text-gray-600 hover:text-oasis-700 cursor-pointer transition-colors flex items-center gap-2"
                  onClick={() => setInputValue(query)}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-oasis-400"></span>
                  {query}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl shadow-sand-200/50 border border-sand-100 overflow-hidden flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="bg-sand-50 px-6 py-4 border-b border-sand-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-medium text-gray-700">Research Assistant Online</span>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-4 ${msg.sender === Sender.User ? 'flex-row-reverse' : ''}`}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${
                  msg.sender === Sender.User ? 'bg-gray-800 text-white' : 'bg-oasis-600 text-white'
                }`}>
                  {msg.sender === Sender.User ? <User size={20} /> : <Bot size={20} />}
                </div>
                
                <div className={`max-w-[80%] rounded-2xl p-5 shadow-sm text-sm leading-relaxed ${
                  msg.sender === Sender.User 
                    ? 'bg-gray-800 text-white rounded-tr-none' 
                    : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                } ${msg.isError ? 'border-red-200 bg-red-50 text-red-800' : ''}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4">
                 <div className="flex-shrink-0 w-10 h-10 rounded-full bg-oasis-600 text-white flex items-center justify-center shadow-sm">
                   <Bot size={20} />
                 </div>
                 <div className="bg-white px-6 py-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-oasis-600" />
                    <span className="text-gray-400 text-sm">Analyzing data...</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about desertification research..."
                className="w-full bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 rounded-full py-4 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-oasis-500/20 focus:border-oasis-500 transition-all"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-2 p-2 bg-oasis-600 hover:bg-oasis-700 disabled:bg-gray-300 text-white rounded-full transition-colors shadow-md"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-center mt-2">
              <span className="text-[10px] text-gray-400">AI responses can be inaccurate. Verify with official citations.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;