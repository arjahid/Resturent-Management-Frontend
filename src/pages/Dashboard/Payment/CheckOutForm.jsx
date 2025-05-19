import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { Form } from 'react-hook-form';

const CheckOutForm = () => {
    const stripe=useStripe();
    const elements=useElements();
    const handleSubmit=async(event)=>{
        event.preventDefault()
        if(!stripe || !elements){
            return
        }
        const card= elements.getElement(cardElement)
        if(card == null){
            return
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement>
                <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
            </CardElement>
        </form>
    );
};

export default CheckOutForm;