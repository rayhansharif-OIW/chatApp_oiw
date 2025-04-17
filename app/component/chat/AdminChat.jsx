'use client'

import { supabase } from '@/app/lib/supabase'
import { useEffect, useRef, useState } from 'react'
import MessageBubble from './MessageBubble'

export default function AdminChat({ conversationId, onMessageSent }) {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const typingTimeout = useRef(null)

  const markAsRead = async () => {
    const { data } = await supabase
      .from('messages')
      .update({ 
        is_read: true,
        read_at: new Date().toISOString()
      })
      .eq('conversation_id', conversationId)
      .eq('sender', 'user')
      .eq('is_read', false)

    if (data) {
      setMessages(prev => prev.map(msg => 
        msg.sender === 'user' ? {...msg, is_read: true, read_at: new Date().toISOString()} : msg
      ))
    }
  }

  useEffect(() => {
    if (!conversationId) return

    const loadMessages = async () => {
      const { data } = await supabase
        .from('messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true })
      setMessages(data || [])
      markAsRead()
    }

    loadMessages()

    const channel = supabase
      .channel(`admin-${conversationId}`)
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'messages',
        filter: `conversation_id=eq.${conversationId}`
      }, async (payload) => {
        if (payload.eventType === 'INSERT') {
          setMessages(prev => [...prev, payload.new])
          if (payload.new.sender === 'user') await markAsRead()
        }
        if (payload.eventType === 'UPDATE') {
          setMessages(prev => prev.map(msg => 
            msg.id === payload.new.id ? payload.new : msg
          ))
        }
      })
      .subscribe()

    return () => supabase.removeChannel(channel)
  }, [conversationId])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleTyping = async (typing) => {
    clearTimeout(typingTimeout.current)
    if (typing) {
      typingTimeout.current = setTimeout(() => handleTyping(false), 2000)
    }
    await supabase
      .from('typing_status')
      .upsert({
        conversation_id: conversationId,
        is_typing: typing,
        updated_at: new Date().toISOString()
      })
  }

  const handleSend = async () => {
    if (!message.trim() || !conversationId) return

    const { error } = await supabase
      .from('messages')
      .insert({
        conversation_id: conversationId,
        sender: 'admin',
        content: message.trim(),
        is_read: false,
        read_at: null
      })

    if (!error) {
      await supabase
        .from('conversations')
        .update({ 
          last_message_at: new Date().toISOString(),
          admin_has_unread: true
        })
        .eq('id', conversationId)
      
      setMessage('')
      await handleTyping(false)
      onMessageSent?.()
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 h-[600px] flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map(msg => (
          <MessageBubble key={msg.id} message={msg} isUser={msg.sender === 'admin'} />
        ))}
        {isTyping && (
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="animate-pulse">●</span> User is typing...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex gap-2">
        <input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
            handleTyping(true)
          }}
          onBlur={() => handleTyping(false)}
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          disabled={!message.trim()}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
        >
          Send
        </button>
      </div>
    </div>
  )
}