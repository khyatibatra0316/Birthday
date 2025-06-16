
import React, { useState, useEffect } from 'react';

export default function NextPage() {
  const [message, setMessage] = useState('');
  const [author, setAuthor] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  const [showMessages, setShowMessages] = useState(false);

  // Load saved messages on page load
  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('birthdayMessages')) || [];
    setAllMessages(savedMessages);
  }, []);

  // Save messages to localStorage when updated
  useEffect(() => {
    localStorage.setItem('birthdayMessages', JSON.stringify(allMessages));
  }, [allMessages]);

  const handleSave = () => {
    if (message.trim() && author.trim()) {
      const newMessage = {
        id: Date.now(),
        text: message.trim(),
        author: author.trim(),
        date: new Date().toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          year: 'numeric' 
        }),
      };
      setAllMessages([...allMessages, newMessage]);
      setMessage('');
      setAuthor('');
    }
  };

  const clearMessages = () => {
    if (window.confirm('Are you sure you want to delete ALL messages?')) {
      setAllMessages([]);
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4d7a3',
        flexDirection: 'column',
        gap: '20px',
        textAlign: 'center',
        color: 'black',
        padding: '20px',
      }}
    >
      <h1 style={{ fontFamily: 'cursive', fontSize: '2.5rem' }}>Happy Birthday! 🎉</h1>

      <div style={{ width: '60%', maxWidth: '500px' }}>
        <input
          type="text"
          placeholder="Your Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '10px',
            borderRadius: '8px',
            border: '2px solid #d4a76a',
            fontSize: '1rem',
          }}
        />
        <textarea
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: '100%',
            height: '100px',
            padding: '12px',
            borderRadius: '8px',
            border: '2px solid #d4a76a',
            fontSize: '1rem',
            resize: 'none',
          }}
        />
        <button
          onClick={handleSave}
          style={{
            width: '100%',
            padding: '12px',
            marginTop: '10px',
            backgroundColor: '#d4a76a',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#c2955e')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#d4a76a')}
        >
          Save Message
        </button>
      </div>

      <button
        onClick={() => setShowMessages(!showMessages)}
        style={{
          padding: '12px 24px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          border: '2px solid #d4a76a',
          borderRadius: '8px',
          fontSize: '1.1rem',
          cursor: 'pointer',
          transition: 'transform 0.2s',
          color:'black'
        }}
        onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
      >
        {showMessages ? 'Hide Messages' : 'Show Messages'}
      </button>

      {showMessages && (
        <div
          style={{
            width: '70%',
            maxWidth: '600px',
            maxHeight: '400px',
            overflowY: 'auto',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '12px',
            padding: '20px',
            border: '2px solid #d4a76a',
            animation: 'fadeIn 0.5s ease-in-out',
          }}
        >
          <h2 style={{ marginBottom: '20px', fontFamily: 'cursive' }}>Messages 💌</h2>
          {allMessages.length === 0 ? (
            <p>No messages yet. Be the first to write one!</p>
          ) : (
            <>
              {allMessages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    padding: '15px',
                    marginBottom: '15px',
                    backgroundColor: '#fff9e6',
                    borderRadius: '8px',
                    borderLeft: '4px solid #d4a76a',
                  }}
                >
                  <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                    From: {msg.author}
                  </p>
                  <p style={{ marginBottom: '5px' }}>{msg.text}</p>
                  <p style={{ fontSize: '0.8rem', color: '#666', textAlign: 'right' }}>
                    {msg.date}
                  </p>
                </div>
              ))}
              <button
                onClick={clearMessages}
                style={{
                  marginTop: '10px',
                  padding: '8px 16px',
                  backgroundColor: '#ff6b6b',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                Clear All
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}