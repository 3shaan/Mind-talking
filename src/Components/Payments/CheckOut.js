import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CustomCard } from '@tsamantanis/react-glassmorphism';
import React from 'react';
import { useLoaderData } from 'react-router';
import Payments from './Payments';
const stripePromise = loadStripe(
  "pk_test_51M6CgPJb8qnACgOFgKeKx1yVEPEBzqO6oETvuYLp4Lzy6xJIasD26TkRerQjqW4YHumyg0Ixlm0AGoOUKgaQXfSr00YTs5hLjZ"
);

const CheckOut = () => {
  const userData = useLoaderData();
  console.log(userData)
    return (
      <div>
        <h1 className="text-3xl text-center my-10 font-semibold">
          ---Payment---
        </h1>
        <div className="flex justify-center items-center">
          <div className="w-96">
            <CustomCard
              effectColor="#C780FF" // required
              color="#14AEFF" // default color is white
              blur={10} // default blur value is 10px
              borderRadius={0} // default border radius value is 10px
            >
              <h1 className="text-2xl text-center my-2">Payment</h1>
              <p>
                Patient Name:
                <span className="font-semibold"> {userData?.name}</span>
              </p>
              <p>
                Service Name:
                <span className="font-semibold">
                  {userData?.appointmentName}
                </span>
              </p>
              <p>
                Price:
                <span className="font-semibold"> ${userData?.price}</span>
              </p>
              <h1 className="my-5 text-xl text-green-700">
                Please insert card number and necessary information:{" "}
              </h1>
              <div className="p-4 mt-10">
                <Elements stripe={stripePromise}>
                  <Payments userData={userData} />
                </Elements>
              </div>
            </CustomCard>
          </div>
        </div>
      </div>
    );
};

export default CheckOut;