import { useEffect, useState } from 'react';
import { Chatbot } from 'supersimpledev';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css';

function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a great day!',
      'give me a unique id': function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      },
      'birthday': 'Your date of birth is on 24th of September',
      'hey chatbot': 'Helo JAHID! This is Chatbot. What can i do for you?',
    })
  }, []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages])

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot! Send a message using the textbox below.  
        </p>
      )}
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput 
        chatMessages={chatMessages} 
        setChatMessages={setChatMessages} 
      />
    </div>
  )
};

export default App
