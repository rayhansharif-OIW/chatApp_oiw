'use client'

import AdminChat from '@/app/component/chat/AdminChat'
import { supabase } from '@/app/lib/supabase'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'

export default function AdminDashboard() {
  const [conversations, setConversations] = useState([])
  const [selectedConversation, setSelectedConversation] = useState(null)

  useEffect(() => {
    const loadConversations = async () => {
      const { data } = await supabase
        .from('conversations')
        .select('*')
        .order('last_message_at', { ascending: false })
      setConversations(data || [])
    }

    loadConversations()
    const channel = supabase
      .channel('conversations')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'conversations' }, loadConversations)
      .subscribe()

    return () => supabase.removeChannel(channel)
  }, [])

  const handleConversationSelect = async (convId) => {
    setSelectedConversation(convId)
    await supabase
      .from('conversations')
      .update({ 
        admin_has_unread: false,
        last_seen: new Date().toISOString()
      })
      .eq('id', convId)
    
    await supabase
      .from('messages')
      .update({
        is_read: true,
        read_at: new Date().toISOString()
      })
      .eq('conversation_id', convId)
      .eq('sender', 'user')
  }

  const deleteConversation = async (id) => {
    await supabase.from('conversations').delete().eq('id', id)
    setSelectedConversation(prev => prev === id ? null : prev)
  }

  return (
    <div className="max-w-7xl mx-auto p-4 flex gap-6">
      <div className="w-80 bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Conversations</h2>
        <div className="space-y-2">
          {conversations.map(conv => (
            <div
              key={conv.id}
              className={`p-3 rounded cursor-pointer relative ${
                selectedConversation === conv.id ? 'bg-blue-50 border-l-4 border-blue-500' : 'hover:bg-gray-50'
              }`}
              onClick={() => handleConversationSelect(conv.id)}
            >
              {conv.admin_has_unread && (
                <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              )}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{conv.email}</h3>
                  <p className="text-sm text-gray-500">
                    {format(new Date(conv.last_message_at), 'dd MMM HH:mm')}
                  </p>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); deleteConversation(conv.id); }}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        {selectedConversation ? (
          <AdminChat conversationId={selectedConversation} onMessageSent={() => setConversations([])} />
        ) : (
          <div className="bg-white rounded-lg shadow p-4 h-96 flex items-center justify-center text-gray-500">
            Select a conversation to start chatting
          </div>
        )}
      </div>
    </div>
  )
}