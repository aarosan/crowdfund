import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement, AddressElement } from '@stripe/react-stripe-js';
import '../styles.css';

const stripePromise = loadStripe('pk_test_51P3q5TDSMDV2zQAMhwPxiZi3Y95kMuGLNziKdtj2q7VA5SWHnmhL6lAqRExGei9fQD1x5SrOGSS11cdijlW8NPBM00Fy0leTMX');

const appearance = {
    theme: 'flat',

  };

const DonationForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const response = await fetch('http://localhost:4242/create-payment-intent', {
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

        const paymentIntentData = await response.json();

        if (paymentIntentData.error) {
            setMessage(`Payment failed: ${paymentIntentData.error.message}`);
            return;
        }

        // Confirm the payment on the client-side
        const { error, paymentIntent } = await stripe.confirmCardPayment(
            paymentIntentData.clientSecret,
            {
                payment_method: {
                    card: cardElement,
                },
            }
        );

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
