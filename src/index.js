import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/Header';
import Footer from './components/footer/Footer';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <App />
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

