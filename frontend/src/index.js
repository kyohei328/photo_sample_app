import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import OGP from './components/OGP';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <HelmetProvider>
      <App />
      <OGP />
    </HelmetProvider>
  </BrowserRouter>
);
