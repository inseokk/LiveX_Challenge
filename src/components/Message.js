import React from 'react';
import './Message.css';

function Message({ message, isUser }) {
  const currentTime = new Date().toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <div className={`message ${isUser ? 'user-message' : 'bot-message'}`}>
      <div className="message-content">
        <p>{message}</p>
        <span className="message-time">{currentTime}</span>
      </div>
    </div>
  );
}

export default Message;