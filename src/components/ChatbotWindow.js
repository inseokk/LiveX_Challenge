import React, { useState, useEffect } from 'react';
import ChatbotHeader from './ChatbotHeader';
import MessageView from './MessageView';
import InputView from './InputView';
import useTimer from '../hooks/useTimer';
import './ChatbotWindow.css';

function ChatbotWindow({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const { formatTime, start, reset } = useTimer();

  // Start timer when chatbot opens
  useEffect(() => {
    if (isOpen) {
      start();
    }
  }, [isOpen, start]);

  // Bot responses (you can make these more sophisticated)
  const getBotResponse = (userMessage) => {
    const responses = [
      "That's interesting! Tell me more about that.",
      "I see what you mean. How can I help you with that?",
      "Thanks for sharing! Is there anything specific you'd like to know?",
      "I understand. What would you like to do next?",
      "That sounds great! How else can I assist you?",
      "Interesting question! Let me think about that...",
      "I'm here to help! What other questions do you have?",
      "That makes sense. Is there anything else you'd like to discuss?"
    ];
    
    // Simple keyword responses
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! Nice to meet you. How can I help you today?";
    }
    if (lowerMessage.includes('help')) {
      return "I'm here to help! You can ask me questions about anything you'd like to discuss.";
    }
    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
      return "Goodbye! It was nice chatting with you. Feel free to come back anytime!";
    }
    
    // Random response for other messages
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = (messageText) => {
    // Add user message
    const userMessage = { text: messageText, isUser: true };
    setMessages(prev => [...prev, userMessage]);

    // Add bot response after a short delay
    setTimeout(() => {
      const botResponse = { text: getBotResponse(messageText), isUser: false };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleReset = () => {
    setMessages([]);
    reset();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="chatbot-overlay">
      <div className="chatbot-window">
        <ChatbotHeader 
          onReset={handleReset}
          onClose={handleClose}
          elapsedTime={formatTime()}
        />
        <MessageView messages={messages} />
        <InputView onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default ChatbotWindow;