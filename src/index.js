import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/Header';
import Footer from './components/footer/Footer';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <App />
    {/* <Footer/> */}
  </React.StrictMode>
);

