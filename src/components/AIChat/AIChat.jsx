import React, { useState } from 'react';

const mockResponses = [
  "Hi! I'm your portfolio assistant. What can I help you with?",
  "Check out the Projects page to see GitHub repos.",
  "Theme toggle is in the top right!",
  "For graphic designs, visit Graphics page."
];

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'ai', text: "Hi! Ask me about the portfolio!" }]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setTimeout(() => {
        const response = mockResponses[Math.floor(Math.random() * mockResponses.length)];
        setMessages(prev => [...prev, { sender: 'ai', text: response }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <>
      <button 
        className="ai-chat-toggle glass fixed bottom-6 right-6 w-14 h-14 rounded-full text-2xl shadow-lg z-50 flex items-center justify-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        style={{boxShadow: 'var(--shadow)'}}
      >
        🤖
      </button>
      {isOpen && (
        <div className="ai-chat-window glass fixed bottom-24 right-6 w-80 h-96 flex flex-col shadow-2xl z-50" style={{borderRadius: '16px'}}>
          <div className="header p-4 border-b glass" style={{borderRadius: '16px 16px 0 0'}}>
            AI Assistant
          </div>
          <div className="messages flex-1 p-4 overflow-y-auto bg-var(--bg-secondary)" style={{backgroundColor: 'var(--bg-secondary)'}}>
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg max-w-xs ${msg.sender === 'user' ? 'bg-accent text-white' : 'bg-glass'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="input-area p-4 border-t flex gap-2">
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type message..."
              className="flex-1 p-2 rounded-lg border glass"
              style={{border: '1px solid var(--glass-border)'}}
            />
            <button onClick={sendMessage} className="glass px-4 py-2 rounded-lg">Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
