import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Pokedex from './Pokedex';
import TableSort from './TableSort';
import Quiz from './Quiz';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Quiz />
  </React.StrictMode>
);
