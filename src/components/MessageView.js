import React, { useEffect, useRef } from 'react';
import Message from './Message';
import './MessageView.css';

function MessageView({ messages }) {
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="message-view">
      {messages.length === 0 ? (
        <div className="welcome-message">
          <div className="bot-avatar">🤖</div>
          <p>Hello! I'm your chat assistant. How can I help you today?</p>
        </div>
      ) : (
        messages.map((msg, index) => (
          <Message 
            key={index} 
            message={msg.text} 
            isUser={msg.isUser} 
          />
        ))
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageView;