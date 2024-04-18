import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement, AddressElement } from '@stripe/react-stripe-js';
import '../styles.css';

// Public Key. Return a promise that resolves to a Stripe object 
const stripePromise = loadStripe('pk_test_51P3q5TDSMDV2zQAMhwPxiZi3Y95kMuGLNziKdtj2q7VA5SWHnmhL6lAqRExGei9fQD1x5SrOGSS11cdijlW8NPBM00Fy0leTMX');

// Appearance of Stripe Elements 
const appearance = {
    theme: 'flat',
};



const DonationForm = () => {

    //Promise test
    console.log(stripePromise);

    // Retrieving the stripe object from the stripe context
    const stripe = useStripe();
    console.log(stripe)

    // Retrieving the elements object from the stripe context
    const elements = useElements();
    console.log(elements)

    // Created a state variables for the donation amount and payment messages
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    // Submit Functionality
    const handleSubmit = async (event) => {
        // Prevent default form submission behavior
        event.preventDefault();

        // If there is no stripe or elements, function ends early
        if (!stripe || !elements) {
            return;
        }

        // Retrieves CardElement component
        const cardElement = elements.getElement(CardElement);

        // Sends a POST request to the backend server to create a payment intent with the specified amount and currency.
        // Request sends JSON data with the amount in cents and payment method type
        const response = await fetch('http://localhost:3001/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: amount * 100, // Convert to cents
                currency: 'usd',
                paymentMethodType: 'card',
            }),
        });

        // Parses the response JSON data
        const paymentIntentData = await response.json();

        // If there is an error with the response, handleSubmit() will set a failure message and returns 
        if (paymentIntentData.error) {
            setMessage(`Payment failed: ${paymentIntentData.error.message}`);
            return;
        }

        // Confirms the card payment using the client secret from the payment intent data and the card element
        const { error, paymentIntent } = await stripe.confirmCardPayment(
            paymentIntentData.clientSecret,
            {
                payment_method: {
                    card: cardElement,
                },
            }
        );

        // Final message dependent on error existence
        if (error) {
            setMessage(`Payment failed: ${error.message}`);
        } else {
            setMessage('Payment successful!');
        }
    };

    return (
        <div className="app-container">
            <form className="donation-form" onSubmit={handleSubmit}>
                <h2 className="donate-title">Donate to a Cause</h2>

                <div className="amount-container">
                    <p className="amount-title">Amount</p>
                    <input
                        className='amount-input'
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Amount"
                        required
                    />
                </div>
                <div>
                    <AddressElement
                        options={{
                            style: appearance,
                            mode: 'billing', // 'billing' or 'shipping'
                            autocomplete: {
                                mode: 'automatic',
                            },
                            defaultValues: {
                                name: 'John Doe',
                                address: {
                                    line1: '1234 Elm Street',
                                    city: 'San Francisco',
                                    state: 'CA',
                                    postal_code: '94103',
                                    country: 'US',
                                },
                            },
                            hidePostalCode: false, // Whether to hide postal code field
                        }}
                    />              
                </div>
                <div className="card-element">
                    <CardElement options={{ style: appearance }}/>
                </div>
                <button type="submit" disabled={!stripe}>
                    Donate
                </button>
                {message && <p>{message}</p>}
            </form>
        </div>
        
    );
};

const Donation = () => (
    <Elements stripe={stripePromise} options={{ appearance }}>
        <DonationForm />
    </Elements>
);

export default Donation;
