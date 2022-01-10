import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Boundary from "./components/Boundary.js"


ReactDOM.render(
    <Boundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Boundary>,
  document.getElementById('root')
);

