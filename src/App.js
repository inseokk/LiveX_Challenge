import './App.css';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import ContentArea from './components/ContentArea';
import ChatbotIcon from './components/ChatbotIcon';
import ChatbotWindow from './components/ChatbotWindow';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('Apps');
  const [searchQuery, setSearchQuery] = useState('');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const closeChatbot = () => {
    setIsChatbotOpen(false);
  };

  return (
    <div style={{ height: '100vh' }}>
      <Navbar 
        setCurrentPage={setCurrentPage} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
        <SideMenu 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
        />
        <ContentArea 
          currentPage={currentPage} 
          searchQuery={searchQuery}
        />
      </div>
      
      {/* Chatbot Components */}
      <ChatbotIcon onClick={toggleChatbot} />
      <ChatbotWindow 
        isOpen={isChatbotOpen} 
        onClose={closeChatbot} 
      />
    </div>
  );
}

export default App;