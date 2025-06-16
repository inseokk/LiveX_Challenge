import React from 'react';
import './ChatbotIcon.css';

function ChatbotIcon({ onClick }) {
  return (
    <button className="chatbot-icon" onClick={onClick}>
      <span className="chat-icon">💬</span>
    </button>
  );
}

export default ChatbotIcon;