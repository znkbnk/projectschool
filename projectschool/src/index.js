import React from 'react';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
