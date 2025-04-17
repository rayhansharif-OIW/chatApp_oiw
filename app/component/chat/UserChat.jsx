"use client";
import MessageBubble from "@/app/component/chat/MessageBubble";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import {
  HelpCircle,
  MessageSquare,
  Paperclip,
  Send,
  Smile,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ChatWidget() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [adminTyping, setAdminTyping] = useState(false); // tracks if admin is typing
  const [conversationId, setConversationId] = useState(null);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(new Set());
  const [activeTab, setActiveTab] = useState("chat");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [heroOffset, setHeroOffset] = useState(0);

  const containerRef = useRef(null);
  const heroRef = useRef(null);

  const faqItems = [
    {
      question: "How do I reset my password?",
      answer:
        "Visit the login page and click 'Forgot Password' to receive reset instructions via email.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept all major credit cards and PayPal. Additional methods coming soon.",
    },
    {
      question: "How can I contact support?",
      answer:
        "Use this chat interface or email support@example.com. Response time is typically 1 business day.",
    },
  ];

  // --- Scroll detection & positioning ---
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setIsFixed(rect.bottom < 0);
        setHeroOffset(window.pageYOffset + rect.bottom);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Mark messages as read when container is scrolled/clicked ---
  const markMessagesAsRead = async () => {
    if (unreadMessages.size > 0 && containerRef.current) {
      const container = containerRef.current;
      if (
        container.scrollHeight - container.scrollTop <=
        container.clientHeight + 5
      ) {
        const { data } = await supabase
          .from("messages")
          .update({
            is_read: true,
            read_at: new Date().toISOString(),
          })
          .eq("conversation_id", conversationId)
          .eq("sender", "admin")
          .eq("is_read", false)
          .select();
        if (data) {
          setUnreadMessages((prev) => {
            const newSet = new Set(prev);
            data.forEach((msg) => newSet.delete(msg.id));
            return newSet;
          });
        }
      }
    }
  };

  const handleContainerClick = () => markMessagesAsRead();
  const handleContainerScroll = () => markMessagesAsRead();

  // --- Load initial messages ---
  useEffect(() => {
    const loadMessages = async () => {
      if (!conversationId) return;
      const { data } = await supabase
        .from("messages")
        .select("*")
        .eq("conversation_id", conversationId)
        .order("created_at");
      setMessages(data || []);
    };
    loadMessages();
  }, [conversationId]);

  // --- Scroll to bottom on new messages ---
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  // --- Realtime Subscriptions for messages and typing status ---
  useEffect(() => {
    if (!conversationId) return;

    // Subscribe to new messages and updates
    const messagesChannel = supabase
      .channel(`messages-${conversationId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `conversation_id=eq.${conversationId}`,
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new]);
          if (payload.new.sender === "admin" && !payload.new.is_read) {
            setUnreadMessages((prev) => new Set(prev).add(payload.new.id));
          }
        }
      )
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "messages",
          filter: `conversation_id=eq.${conversationId}`,
        },
        (payload) => {
          setMessages((prev) =>
            prev.map((msg) => (msg.id === payload.new.id ? payload.new : msg))
          );
          if (payload.new.sender === "admin" && payload.new.is_read) {
            setUnreadMessages((prev) => {
              const newSet = new Set(prev);
              newSet.delete(payload.new.id);
              return newSet;
            });
          }
        }
      )
      .subscribe();

    // Subscribe to typing_status changes (listen to both INSERT and UPDATE)
    const typingChannel = supabase
      .channel(`typing-${conversationId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "typing_status",
          filter: `conversation_id=eq.${conversationId}`,
        },
        (payload) => {
          console.log("User Chat - typing INSERT:", payload);
          setAdminTyping(payload.new.admin_typing);
        }
      )
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "typing_status",
          filter: `conversation_id=eq.${conversationId}`,
        },
        (payload) => {
          console.log("User Chat - typing UPDATE:", payload);
          setAdminTyping(payload.new.admin_typing);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(messagesChannel);
      supabase.removeChannel(typingChannel);
    };
  }, [conversationId]);

  // --- Update typing status helper ---
  const updateTypingStatus = async (role, typing) => {
    if (!conversationId) return;
    const payload = {
      conversation_id: conversationId,
      updated_at: new Date().toISOString(),
    };
    if (role === "user") {
      payload.user_typing = typing;
    } else if (role === "admin") {
      payload.admin_typing = typing;
    }
    console.log("Updating typing status", payload);
    await supabase
      .from("typing_status")
      .upsert(payload, { onConflict: "conversation_id" });
  };

  // --- Handle Email Submission ---
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
        await loadMessages(existingConv.id);
      } else {
        const { data: newConv, error } = await supabase
          .from("conversations")
          .insert({ email: email.toLowerCase() })
          .select()
          .single();
        if (error) throw error;
        setConversationId(newConv.id);
      }
      setEmailSubmitted(true);
      setIsMinimized(false);
    } catch (error) {
      console.error("Error starting conversation:", error);
      alert("Error starting conversation. Please try again.");
    }
  };

  const loadMessages = async (convId) => {
    const { data } = await supabase
      .from("messages")
      .select("*")
      .eq("conversation_id", convId)
      .order("created_at", { ascending: true });
    setMessages(data || []);
    const { data: unread } = await supabase
      .from("messages")
      .select("id")
      .eq("conversation_id", convId)
      .eq("sender", "admin")
      .eq("is_read", false);
    setUnreadMessages(new Set(unread?.map((msg) => msg.id) || []));
  };

  // --- Send Message ---
  const handleSend = async () => {
    if (!message.trim() || !conversationId) return;
    await supabase.from("messages").insert({
      conversation_id: conversationId,
      sender: "user",
      content: message.trim(),
      is_read: false,
    });
    setMessage("");
    // Stop typing once the message is sent.
    updateTypingStatus("user", false);
  };

  const toggleMinimize = () => setIsMinimized(!isMinimized);

  // --- Positioning Styles ---
  const chatPositionStyles = isFixed
    ? `fixed bottom-4 right-4 z-50 shadow-xl`
    : ``;
  const chatHeightStyles = isFixed
    ? isMinimized
      ? "h-[200px] w-[250px]"
      : emailSubmitted
      ? "h-[450px] w-[300px]"
      : "h-[260px] w-[320px]"
    : isMinimized
    ? "h-[100%] w-[100%] absolute left-0 bottom-0"
    : emailSubmitted
    ? "h-[500px] w-[100%] absolute left-0 right-0 bottom-0"
    : "h-[100%] w-[100%] absulate left-0 right-0 bottom-0";

  return (
    <>
    <div className=" p-4 bg-background rounded-xl  ring-1 ring-gray-300 h-full w-full">
      <div ref={heroRef} className=" relative h-full w-full">
        <Card
          className={`transition-all duration-300 ${chatPositionStyles} ${chatHeightStyles}`}
        //   style={isFixed ? {} : { bottom: "1rem", right: "1rem" }}
        >
          {!emailSubmitted ? (
            <div className="p-4 h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Need help? 😊</h2>
                <button
                  onClick={toggleMinimize}
                  className="text-gray-500 hover:text-gray-700"
                >
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
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={!email}
                >
                  Start Chat
                </Button>
              </form>
            </div>
          ) : isMinimized ? (
            <div
              className="h-full flex items-center justify-between px-4 bg-blue-600 cursor-pointer"
              onClick={toggleMinimize}
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-white" />
                <div>
                  <h3 className="text-white font-medium">Live Chat</h3>
                  <p className="text-xs text-white/80">
                    {unreadMessages.size} new messages
                  </p>
                </div>
              </div>
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
            </div>
          ) : (
            <div className="flex flex-col h-full">
              <div className="bg-blue-600">
                <div className="flex justify-between items-center px-4 py-3">
                  <h3 className="text-white text-lg font-medium">
                    Support Chat
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMinimize}
                      className="text-white hover:text-gray-200 p-1 rounded-full transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="flex p-2 gap-1 border-b border-blue-500">
                  <Button
                    variant="ghost"
                    className={`flex-1 text-white hover:bg-blue-700 rounded-md ${
                      activeTab === "chat" ? "bg-blue-700" : ""
                    }`}
                    onClick={() => setActiveTab("chat")}
                  >
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Chat
                  </Button>
                  <Button
                    variant="ghost"
                    className={`flex-1 text-white hover:bg-blue-700 rounded-md ${
                      activeTab === "helpdesk" ? "bg-blue-700" : ""
                    }`}
                    onClick={() => setActiveTab("helpdesk")}
                  >
                    <HelpCircle className="h-5 w-5 mr-2" />
                    Help
                  </Button>
                </div>
              </div>
              {activeTab === "chat" ? (
                <>
                  <div
                    ref={containerRef}
                    onScroll={handleContainerScroll}
                    onClick={handleContainerClick}
                    className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50"
                  >
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${
                          msg.sender === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <MessageBubble
                          message={msg}
                          isUser={msg.sender === "user"}
                        />
                      </div>
                    ))}
                    {/* Show admin typing indicator */}
                    {adminTyping && (
                      <div className="text-sm italic text-gray-500">
                        Admin is typing...
                      </div>
                    )}
                  </div>
                  <div className="border-t p-4 bg-white">
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2">
                      <input
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          updateTypingStatus("user", true);
                        }}
                        onBlur={() => updateTypingStatus("user", false)}
                        onKeyPress={(e) => e.key === "Enter" && handleSend()}
                        className="flex-1 bg-transparent focus:outline-none text-sm"
                        placeholder="Type your message..."
                      />
                      <div className="flex items-center gap-2">
                        <button className="text-gray-400 hover:text-blue-600">
                          <Smile className="h-5 w-5" />
                        </button>
                        <button className="text-gray-400 hover:text-blue-600">
                          <Paperclip className="h-5 w-5" />
                        </button>
                        <button
                          onClick={handleSend}
                          disabled={!message.trim()}
                          className="text-blue-600 hover:text-blue-700 disabled:text-gray-300"
                        >
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
                        className="bg-white rounded-lg p-4 shadow-sm cursor-pointer transition-colors hover:bg-blue-50"
                        onClick={() =>
                          setExpandedFaq(expandedFaq === index ? null : index)
                        }
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium text-gray-800">
                            {faq.question}
                          </h3>
                          <span
                            className={`transform transition-transform ${
                              expandedFaq === index ? "rotate-180" : ""
                            }`}
                          >
                            ▼
                          </span>
                        </div>
                        {expandedFaq === index && (
                          <p className="mt-2 text-sm text-gray-600">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </Card>
       
      </div>
      </div>
    </>
  );
}
