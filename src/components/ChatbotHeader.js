import React from 'react';
import './ChatbotHeader.css';

function ChatbotHeader({ onReset, onClose, elapsedTime }) {
  return (
    <div className="chatbot-header">
      <div className="header-left">
        <h3>Chat Assistant</h3>
        <span className="timer">Time: {elapsedTime}</span>
      </div>
      <div className="header-buttons">
        <button className="reset-btn" onClick={onReset}>
          Reset
        </button>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
}

export default ChatbotHeader;