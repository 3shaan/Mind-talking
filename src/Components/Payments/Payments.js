import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Error from "../Loader/Error";
import Loading from "../Loader/Loading";

const Payments = ({ userData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [transId, setTransId] = useState("");
  // const [clientSecret, setClientSecret] = useState("");
  const { price } = userData;
  const servicePrice = parseFloat(price) * 100;

  // useEffect(() => {
  //   fetch("https://mind-talking-server.vercel.app/payments", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //       authorization: localStorage.getItem("token"),
  //     },
  //     body: JSON.stringify({ servicePrice }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.clientSecret);
  //       setClientSecret(data.clientSecret);
  //     })
  //     .catch((err) => console.log(err));
  // }, [servicePrice]);

  const {
    data: clientSecret,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await fetch(
        "https://mind-talking-server.vercel.app/payments",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({ servicePrice }),
        }
      );
      const data = await res.json();
      return data.clientSecret;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return <Error isError={error}></Error>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("run");
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
    } else {
      console.log("pay", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userData?.name,
          },
        },
      });
    if (confirmError) {
      console.log(confirmError.message);
      return;
    }
    console.log(paymentIntent);
    if (paymentIntent.status === "succeeded") {
      const payInfo = {
        patientName: userData?.name,
        serviceName: userData?.appointmentName,
        serviceId: userData?._id,
        price,
        transId: paymentIntent.id,
        currency: paymentIntent.currency,
      };
      fetch("https://mind-talking-server.vercel.app/payments_info", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(payInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          setTransId(paymentIntent.id);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Payment is successful",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
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
        <button
          className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>

      {transId && (
        <p className="text-lg text-green-600 mt-5">{`transId : ${transId}`}</p>
      )}
    </div>
  );
};

export default Payments;
