import React from 'react';
import ReactDOM from 'react-dom';
import "./sass/main.scss";
import App from './App';
import axios from "axios";

axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


