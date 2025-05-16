// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css';
import tavernBg from './assets/bg.png';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    // Simple authentication logic - replace with actual API calls in a real app
    if (username === 'admin' && password === 'password') {
      // Store user data based on remember me setting
      if (rememberMe) {
        localStorage.setItem('user', JSON.stringify({ username }));
      } else {
        sessionStorage.setItem('user', JSON.stringify({ username }));
      }
      
      // Call the onLogin prop to notify parent component
      onLogin(username);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="form-content">
          <h1 className="welcome-title">Welcome</h1>
          <p className="welcome-subtitle">Enter your Credentials to access your account</p>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username" className="form-label">Username:</label>
              <input
                type="text"
                id="username"
                className="form-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                id="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            
            <div className="form-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="remember"
                  className="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember" className="checkbox-label">Remember Me</label>
              </div>
              
              <a href="#" className="forgot-password">forgot password</a>
            </div>
            
            <button type="submit" className="submit-button">Enter to Proceed</button>
          </form>
        </div>
      </div>
      <div className="right-panel">
        <img src={tavernBg} alt="Tavern" className="right-panel-image" />
      </div>
    </div>
  );
};

export default LoginForm;