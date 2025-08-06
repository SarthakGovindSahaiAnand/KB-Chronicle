

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // The main App component
import './index.css'; // Your global styles, including Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);