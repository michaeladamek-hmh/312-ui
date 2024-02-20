import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/source.css';
import './assets/scss/custom.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
