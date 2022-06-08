import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Pokedex from './Pokedex';
import TableSort from './TableSort';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TableSort />
  </React.StrictMode>
);
