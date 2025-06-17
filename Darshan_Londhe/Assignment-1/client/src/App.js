import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get('http://localhost:5000/messages');
      setMessages(res.data);
    } catch (err) {
      setError('Failed to fetch messages');
      console.error('Error fetching messages:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      setLoading(true);
      setError(null);
      await axios.post('http://localhost:5000/messages', { text });
      setText("");
      await fetchMessages();
    } catch (err) {
      setError('Failed to send message');
      console.error('Error sending message:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>OneVarsity Chat</h1>
        <p className="subtitle">Real-time messaging platform</p>
      </header>

      <main className="chat-container">
        <div className="messages-container">
          {loading && messages.length === 0 ? (
            <div className="loading">Loading messages...</div>
          ) : (
            <div className="messages-list">
              {messages.map((m, i) => (
                <div key={m._id || i} className="message-card">
                  <div className="message-content">{m.text}</div>
                  <div className="message-time">
                    {new Date(m.createdAt || Date.now()).toLocaleTimeString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="message-form">
          {error && <div className="error-message">{error}</div>}
          <div className="input-group">
            <input
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Type your message..."
              className="message-input"
            />
            <button
              type="submit"
              disabled={loading || !text.trim()}
              className="send-button"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </main>

      <footer className="app-footer">
        <p>© 2024 OneVarsity. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
