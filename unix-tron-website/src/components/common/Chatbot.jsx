import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

const Chatbot = () => {
  // State declarations
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showClearDialog, setShowClearDialog] = useState(false);
  const [conversationStep, setConversationStep] = useState(0);
  const [userData, setUserData] = useState({
    name: '',
    interest: '',
    email: ''
  });

  // Refs
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // Services list
  const services = [
    "IT Consulting",
    "Software Development",
    "Cloud Services",
    "Cybersecurity",
    "Hardware Solutions"
  ];

  // Initialize with welcome message - fixed initialization
  useEffect(() => {
    if (isOpen) {
      const savedChat = localStorage.getItem('unibot_chat_history');
      
      if (savedChat && JSON.parse(savedChat).length > 0) {
        setMessages(JSON.parse(savedChat));
        // Determine the current step based on existing messages
        const lastMessage = JSON.parse(savedChat)[JSON.parse(savedChat).length - 1];
        if (lastMessage.action === 'restart') {
          setConversationStep(5);
        }
      } else {
        const welcomeMessages = [
          { 
            id: uuidv4(), 
            text: "Hello, Welcome to Unixtron Africa!", 
            sender: 'bot',
            timestamp: new Date().toISOString()
          },
          { 
            id: uuidv4(), 
            text: "How can I help you?", 
            sender: 'bot',
            timestamp: new Date().toISOString(),
            showServices: true
          }
        ];
        setMessages(welcomeMessages);
        setConversationStep(1);
      }
    }
  }, [isOpen]); // Only run when isOpen changes

  // Save chat history to localStorage - fixed dependency
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('unibot_chat_history', JSON.stringify(messages));
    }
  }, [messages]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleSendMessage = () => {
    if ((inputValue.trim() === '' || isTyping) && conversationStep !== 1) return;
    
    const userMessage = {
      id: uuidv4(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Process custom conversation flow
    setTimeout(() => {
      let botResponses = [];
      
      switch(conversationStep) {
        case 2: // After name submission
          setUserData(prev => ({...prev, name: inputValue}));
          botResponses = [
            {
              id: uuidv4(),
              text: "Thank you!",
              sender: 'bot',
              timestamp: new Date().toISOString()
            },
            {
              id: uuidv4(),
              text: "What type of product or service are you interested in?",
              sender: 'bot',
              timestamp: new Date().toISOString()
            }
          ];
          setConversationStep(3);
          break;
          
        case 3: // After interest submission
          setUserData(prev => ({...prev, interest: inputValue}));
          botResponses = [
            {
              id: uuidv4(),
              text: "We value your contribution to this conversation and your response is greatly appreciated.",
              sender: 'bot',
              timestamp: new Date().toISOString()
            },
            {
              id: uuidv4(),
              text: "Could you please provide your email address? This will help us send you important updates and exclusive deals.",
              sender: 'bot',
              timestamp: new Date().toISOString()
            }
          ];
          setConversationStep(4);
          break;
          
        case 4: // After email submission
          setUserData(prev => ({...prev, email: inputValue}));
          botResponses = [
            {
              id: uuidv4(),
              text: `Thank you for sharing your email with us! We greatly appreciate your willingness to stay connected. Our team will review your information and will be in touch with you shortly to assist you further. We look forward to serving you and addressing any questions or needs you may have. If you require immediate assistance, please feel free to reach out to us at info@unixtronafrica.com. Thank you for choosing us!`,
              sender: 'bot',
              timestamp: new Date().toISOString(),
              action: 'restart'
            }
          ];
          setConversationStep(5);
          break;
          
        default:
          botResponses = [{
            id: uuidv4(),
            text: "I didn't understand that. Could you rephrase?",
            sender: 'bot',
            timestamp: new Date().toISOString()
          }];
      }
      
      setMessages(prev => [...prev, ...botResponses]);
      setIsTyping(false);
    }, 1000);
  };

  const handleServiceSelect = (service) => {
    const userMessage = {
      id: uuidv4(),
      text: service,
      sender: 'user',
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    setTimeout(() => {
      const botResponses = [
        {
          id: uuidv4(),
          text: "That's great!",
          sender: 'bot',
          timestamp: new Date().toISOString()
        },
        {
          id: uuidv4(),
          text: "May I have your name, please?",
          sender: 'bot',
          timestamp: new Date().toISOString()
        }
      ];
      
      setMessages(prev => [...prev, ...botResponses]);
      setIsTyping(false);
      setConversationStep(2);
    }, 1000);
  };

  const restartConversation = () => {
    const welcomeMessages = [
      { 
        id: uuidv4(), 
        text: "Hello, Welcome to Unixtron Africa!", 
        sender: 'bot',
        timestamp: new Date().toISOString()
      },
      { 
        id: uuidv4(), 
        text: "How can I help you?", 
        sender: 'bot',
        timestamp: new Date().toISOString(),
        showServices: true
      }
    ];
    setMessages(welcomeMessages);
    setUserData({ name: '', interest: '', email: '' });
    setConversationStep(1);
    setInputValue('');
  };

  const clearChatHistory = () => {
    restartConversation();
    setShowClearDialog(false);
  };

  // Focus input and scroll to bottom when chat opens or messages change
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    scrollToBottom();
  }, [isOpen, messages, scrollToBottom]);

  // Auto-scroll when new messages arrive
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      const isAtBottom = container.scrollHeight - container.scrollTop === container.clientHeight;
      if (isAtBottom || messages.length <= 2) {
        scrollToBottom();
      }
    }
  }, [messages, scrollToBottom]);

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Floating Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white"
        style={{
          background: 'linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)',
          boxShadow: '0 4px 15px rgba(0, 210, 255, 0.5)'
        }}
        aria-label="Chat with UniBot"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        {!isOpen && (
          <motion.span 
            className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Clear Chat Confirmation Dialog */}
      <AnimatePresence>
        {showClearDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white p-6 rounded-xl max-w-md w-full mx-4 shadow-xl"
            >
              <h3 className="font-bold text-lg mb-4">Clear chat history?</h3>
              <p className="mb-6 text-gray-600">Are you sure you want to clear the conversation? This action cannot be undone.</p>
              <div className="flex justify-end space-x-3">
                <button 
                  onClick={() => setShowClearDialog(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={clearChatHistory}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Clear Chat
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute bottom-full right-0 mb-4 w-[25vw] max-w-md h-[28rem] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col border border-gray-200"
            style={{
              background: 'linear-gradient(to bottom right, rgba(255,255,255,0.95), rgba(245,247,250,0.95))',
              backdropFilter: 'blur(10px)'
            }}
          >
            {/* Chat Header */}
            <div 
              className="p-4 text-white flex items-center justify-between"
              style={{
                background: 'linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)'
              }}
            >
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="font-bold">UniBot Assistant</h3>
                  <p className="text-xs opacity-80">
                    {isTyping ? 'Typing...' : 'Online'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setShowClearDialog(true)}
                  className="text-white/70 hover:text-white transition-colors p-1"
                  title="Clear chat history"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white transition-colors p-1"
                  title="Close chat"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div 
              ref={messagesContainerRef}
              className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-gray-100"
            >
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <motion.div 
                      className={`max-w-xs lg:max-w-md rounded-2xl px-4 py-3 ${message.sender === 'user' 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-br-none' 
                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'}`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      {message.showServices && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {services.map((service, index) => (
                            <motion.button
                              key={index}
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleServiceSelect(service)}
                              className="text-xs bg-white text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 hover:border-blue-300 hover:shadow-xs transition-all"
                            >
                              {service}
                            </motion.button>
                          ))}
                        </div>
                      )}
                      {message.action === 'restart' && (
                        <button 
                          onClick={restartConversation}
                          className="mt-3 text-sm text-blue-600 hover:text-blue-800 underline"
                        >
                          Restart Conversation
                        </button>
                      )}
                      <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                        {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white text-gray-800 border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area (only show after service selection) */}
            {conversationStep > 1 && (
              <div className="p-3 border-t border-gray-200 bg-white">
                <div className="flex items-center space-x-2">
                  <input
                    ref={inputRef}
                    type={conversationStep === 4 ? 'email' : 'text'}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder={
                      conversationStep === 2 ? 'Your name...' : 
                      conversationStep === 3 ? 'Product/service interest...' : 
                      'Your email...'
                    }
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    disabled={isTyping}
                    aria-label="Type your message"
                  />
                  <motion.button
                    onClick={handleSendMessage}
                    disabled={isTyping || inputValue.trim() === ''}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-xl ${isTyping || inputValue.trim() === '' 
                      ? 'bg-gray-300 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 cursor-pointer'} text-white transition-all`}
                    style={{
                      boxShadow: '0 2px 5px rgba(102, 126, 234, 0.3)'
                    }}
                    aria-label="Send message"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;