import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './components/ContextCart';

const firebaseConfig = {
  apiKey: "AIzaSyCAO2Vav_nqbkbmBjQN3Yr_c8VfS4ZuR20",
  authDomain: "coder-ecommerce-c77cc.firebaseapp.com",
  projectId: "coder-ecommerce-c77cc",
  storageBucket: "coder-ecommerce-c77cc.appspot.com",
  messagingSenderId: "904858606158",
  appId: "1:904858606158:web:b74a16a5991812fbc6811f"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>, 
    </BrowserRouter>
  </React.StrictMode>,
) 