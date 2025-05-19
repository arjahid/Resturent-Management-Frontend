import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Form } from "react-hook-form";
import useAxious from "../../../Hooks/useAxious";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";

const CheckOutForm = () => {
    const [error,setError]=useState('');
    const [clientSecret,setClientSecret]=useState('')
  const stripe = useStripe();
  const elements = useElements();
  const axiousSecure=useAxious()
  const {user}=useAuth()
  const [cart]=useCart();
  const [transactionId,setTransactionId]=useState('')
  const totalPrice=cart.reduce((sum,item)=>sum+item.price,0)

    useEffect(()=>{
        axiousSecure.post('/create-payment-intent',{
            price:totalPrice
        })
        .then(res=>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })


    },[axiousSecure,totalPrice])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setError(error.message)
    } else {
      console.log(paymentMethod);
    }
    // confirm payment
    const {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:card,
            billing_details:{
                email:user?.email ||'unknown',
                name:user?.displayName ||'unknown',

            }
        }
    })
    if(confirmError){
        console.log(confirmError)
        setError(confirmError.message)
    }
    else{
        console.log('payment intend',paymentIntent)
        if(paymentIntent.status === 'succeeded'){
            console.log('payment succeeded',paymentIntent)
            setTransactionId(paymentIntent.id)
            setError('')
        }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn btn-primary my-4" type="submit"  disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-700">{error}</p>
      {
        transactionId && (
          <p className="text-green-700">
            Payment succeeded with transaction ID: {transactionId}
          </p>
        )
      }
    </form>
  );
};

export default CheckOutForm;
