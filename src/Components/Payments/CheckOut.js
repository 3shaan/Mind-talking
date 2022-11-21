import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Payments from './Payments';
const stripePromise = loadStripe(
  "pk_test_51M6CgPJb8qnACgOFgKeKx1yVEPEBzqO6oETvuYLp4Lzy6xJIasD26TkRerQjqW4YHumyg0Ixlm0AGoOUKgaQXfSr00YTs5hLjZ"
);

const CheckOut = () => {
    return (
      <div>
        <h1 className="text-2xl text-center my-10 font-semibold">
          this is payment / checkout route
        </h1>
        <div className='w-96 border h-96 p-4 mt-10'>
          <Elements stripe={stripePromise}>
            <Payments />
          </Elements>
        </div>
      </div>
    );
};

export default CheckOut;