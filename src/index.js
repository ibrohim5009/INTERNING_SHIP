import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import axios from "axios";
const global_url = 'https://users.pythonanywhere.com/api/v1'
axios.defaults.baseURL = global_url;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

