import React, { useCallback, useState, useEffect } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import dotenv from 'dotenv';
dotenv.config();

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";
import { Outlet } from "react-router-dom";

const CheckoutForm = () => {
    const fetchClientSecret = useCallback(() => {
      // Create a Checkout Session
      return fetch("/create-checkout-session", {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => data.clientSecret);
    }, []);
  
    const options = {fetchClientSecret};
  
    return (
      <div id="checkout">
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={options}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    )
  }
  
  const Return = () => {
    const [status, setStatus] = useState(null);
    const [customerEmail, setCustomerEmail] = useState('');
  
    useEffect(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const sessionId = urlParams.get('session_id');
  
      fetch(`/session-status?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setStatus(data.status);
          setCustomerEmail(data.customer_email);
        });
    }, []);
  
    if (status === 'open') {
      return (
        <Navigate to="/checkout" />
      )
    }
  
    if (status === 'complete') {
      return (
        <section id="success">
          <p>
            We appreciate your business! A confirmation email will be sent to {customerEmail}.
  
            If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
          </p>
        </section>
      )
    }
  
    return null;
  }


  const App = () => {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/return" element={<Return />} />
            <Route path="/" element={
              <>
                <Navbar />
                <main>
                  <Outlet />
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </Router>
      </div>
    );
  };

export default App;
