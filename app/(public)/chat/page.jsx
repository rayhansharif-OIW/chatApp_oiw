"use client";

import MessageBubble from "@/app/component/chat/MessageBubble";
import { supabase } from "@/app/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HelpCircle, MessageSquare, Paperclip, Send, Smile, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ChatWidget() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(new Set());
  const [activeTab, setActiveTab] = useState("chat");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const messagesEndRef = useRef(null);
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  const faqItems = [
    {
      question: "How do I reset my password?",
      answer: "Visit the login page and click 'Forgot Password' to receive reset instructions via email.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards and PayPal. Additional methods coming soon.",
    },
    {
      question: "How can I contact support?",
      answer: "Use this chat interface or email support@example.com. Response time is typically 1 business day.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setIsFixed(rect.bottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  const checkVisibility = () => {
    const container = containerRef.current;
    return container && container.scrollHeight - container.scrollTop <= container.clientHeight + 5;
  };

  const markMessagesAsRead = async () => {
    if (unreadMessages.size > 0 && checkVisibility()) {
      const { data } = await supabase
        .from("messages")
        .update({ 
          is_read: true,
          read_at: new Date().toISOString()
        })
        .eq("conversation_id", conversationId)
        .eq("sender", "admin")
        .eq("is_read", false)
        .select();

      if (data) {
        setUnreadMessages(prev => new Set([...prev].filter(id => !data.some(m => m.id === id))));
        setMessages(prev => prev.map(msg => 
          data.some(m => m.id === msg.id) 
            ? {...msg, is_read: true, read_at: new Date().toISOString()}
            : msg
        ));
      }
    }
  };

  useEffect(() => {
    const loadMessages = async () => {
      if (!conversationId) return;
      const { data } = await supabase
        .from('messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order('created_at');
      setMessages(data || []);
    };
    loadMessages();
  }, [conversationId]);

  useEffect(() => {
    scrollToBottom();
    const handleVisibilityChange = async () => {
      if (document.visibilityState === 'visible') markMessagesAsRead();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [messages]);

  useEffect(() => {
    if (!conversationId) return;

    const messagesChannel = supabase
      .channel(`messages-${conversationId}`)
      .on("postgres_changes", {
        event: "INSERT",
        schema: "public",
        table: "messages",
        filter: `conversation_id=eq.${conversationId}`,
      }, (payload) => {
        setMessages(prev => [...prev, payload.new]);
        if (payload.new.sender === "admin" && !payload.new.is_read) {
          setUnreadMessages(prev => new Set([...prev, payload.new.id]));
        }
      })
      .on("postgres_changes", {
        event: "UPDATE",
        schema: "public",
        table: "messages",
        filter: `conversation_id=eq.${conversationId}`,
      }, (payload) => {
        setMessages(prev => prev.map(msg => 
          msg.id === payload.new.id ? payload.new : msg
        ));
      })
      .subscribe();

    const typingChannel = supabase
      .channel(`typing-${conversationId}`)
      .on("postgres_changes", {
        event: "UPDATE",
        schema: "public",
        table: "typing_status",
        filter: `conversation_id=eq.${conversationId}`,
      }, (payload) => setIsTyping(payload.new.is_typing))
      .subscribe();

    return () => {
      supabase.removeChannel(messagesChannel);
      supabase.removeChannel(typingChannel);
    };
  }, [conversationId]);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      const { data: existingConv } = await supabase
        .from("conversations")
        .select("id")
        .eq("email", email.toLowerCase())
        .single();

      if (existingConv) {
        setConversationId(existingConv.id);
        const { data: messages } = await supabase
          .from('messages')
          .select('*')
          .eq('conversation_id', existingConv.id)
          .order('created_at');
        setMessages(messages || []);
      } else {
        const { data: newConv } = await supabase
          .from("conversations")
          .insert({ email: email.toLowerCase() })
          .select()
          .single();
        setConversationId(newConv.id);
      }
      setEmailSubmitted(true);
      setIsMinimized(false);
    } catch (error) {
      alert("Error starting conversation. Please try again.");
    }
  };

  const handleSend = async () => {
    if (!message.trim() || !conversationId) return;

    await supabase.from("messages").insert({
      conversation_id: conversationId,
      sender: "user",
      content: message.trim(),
      is_read: false,
    });
    setMessage("");
    scrollToBottom();
  };

  return (
    <div ref={heroRef} className="relative h-[500px]">
      <Card className={`transition-all duration-300 ${
        isFixed ? 'fixed bottom-4 right-4 z-50 shadow-xl' : 'absolute'
      } ${
        isMinimized ? 'h-[200px] w-[250px]' : 
        emailSubmitted ? 'h-[500px] w-[350px]' : 'h-[260px] w-[320px]'
      }`} style={!isFixed ? { bottom: "1rem", right: "1rem" } : {}}>
        {!emailSubmitted ? (
          <div className="p-4 h-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Need help? 😊</h2>
              <button onClick={() => setIsMinimized(!isMinimized)} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={!email}>
                Start Chat
              </Button>
            </form>
          </div>
        ) : isMinimized ? (
          <div className="h-full flex items-center justify-between px-4 bg-blue-600 cursor-pointer" onClick={() => setIsMinimized(false)}>
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-white" />
              <div>
                <h3 className="text-white font-medium">Live Chat</h3>
                <p className="text-xs text-white/80">{unreadMessages.size} new messages</p>
              </div>
            </div>
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="bg-blue-600">
              <div className="flex justify-between items-center px-4 py-3">
                <h3 className="text-white text-lg font-medium">Support Chat</h3>
                <button onClick={() => setIsMinimized(true)} className="text-white hover:text-gray-200 p-1 rounded-full">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex p-2 gap-1 border-b border-blue-500">
                <Button
                  variant="ghost"
                  className={`flex-1 text-white hover:bg-blue-700 rounded-md ${activeTab === "chat" ? "bg-blue-700" : ""}`}
                  onClick={() => setActiveTab("chat")}
                >
                  <MessageSquare className="h-5 w-5 mr-2" /> Chat
                </Button>
                <Button
                  variant="ghost"
                  className={`flex-1 text-white hover:bg-blue-700 rounded-md ${activeTab === "helpdesk" ? "bg-blue-700" : ""}`}
                  onClick={() => setActiveTab("helpdesk")}
                >
                  <HelpCircle className="h-5 w-5 mr-2" /> Help
                </Button>
              </div>
            </div>
            {activeTab === "chat" ? (
              <>
                <div ref={containerRef} onScroll={markMessagesAsRead} className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                      <MessageBubble message={msg} isUser={msg.sender === "user"} />
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <span className="animate-pulse">●</span> Agent is typing...
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                <div className="border-t p-4 bg-white">
                  <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2">
                    <input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSend()}
                      className="flex-1 bg-transparent focus:outline-none text-sm"
                      placeholder="Type your message..."
                    />
                    <div className="flex items-center gap-2">
                      <button className="text-gray-400 hover:text-blue-600"><Smile className="h-5 w-5" /></button>
                      <button className="text-gray-400 hover:text-blue-600"><Paperclip className="h-5 w-5" /></button>
                      <button onClick={handleSend} disabled={!message.trim()} className="text-blue-600 hover:text-blue-700 disabled:text-gray-300">
                        <Send className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                <div className="space-y-3">
                  {faqItems.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-4 shadow-sm cursor-pointer hover:bg-blue-50"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-gray-800">{faq.question}</h3>
                        <span className={`transform transition-transform ${expandedFaq === index ? "rotate-180" : ""}`}>▼</span>
                      </div>
                      {expandedFaq === index && <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  );
}