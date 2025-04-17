'use client'
import { format } from 'date-fns';

export default function MessageBubble({ message, isUser, isAdminView = false }) {
  // Format the message timestamp.
  const timestamp = format(new Date(message.created_at), 'HH:mm');

  // Render read receipt based on view and sender.
  const renderReadReceipt = () => {
    if (!isAdminView) {
      // In the user chat view.
      if (isUser && message.read_at) {
        return <span className="ml-1">✓ Seen by admin : {format(new Date(message.read_at), 'HH:mm')}</span>;
      }
      if (!isUser && message.is_read && message.read_at) {
        return <span className="ml-1">seen by you : {format(new Date(message.read_at), 'HH:mm')}</span>;
      }
    } else {
      // In the admin chat view.
      if (isUser && message.is_read && message.read_at) {
        return <span className="ml-1">✓ Seen by user {format(new Date(message.read_at), 'HH:mm')}</span>;
      }
      if (!isUser && message.read_at) {
        return <span className="ml-1">✓ Seen by admin {format(new Date(message.read_at), 'HH:mm')}</span>;
      }
    }
    return null;
  };

  return (
    <div className={`max-w-[85%] ${isUser ? 'ml-auto' : 'mr-auto'}`}>
      <div className={`rounded-xl p-3 ${isUser ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-100 border rounded-bl-none'}`}>
        <p className="text-sm">{message.content}</p>
        <div className={`mt-1 text-xs flex items-center gap-1 ${isUser ? 'text-blue-100' : 'text-gray-500'}`}>
          {timestamp}
          {renderReadReceipt()}
        </div>
      </div>
    </div>
  )
}
