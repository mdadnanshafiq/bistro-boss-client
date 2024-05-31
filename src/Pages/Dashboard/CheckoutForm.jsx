import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transId, setTransId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const price = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, price]);

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
      console.log("Payment Error: ", error);
      setError(error.message);
    } else {
      console.log("Payment Method: ", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("Confirm Error");
    } else {
      console.log("Payment Intent: ", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("Transaction Id: ", paymentIntent.id);
        setTransId(paymentIntent.id);

        const payment = {
          email: user.email,
          price: price,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartId: cart.map((item) => item._id),
          menuItemId: cart.map((item) => item.menuId),
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("Payment Saved: ", res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Payment Completed!",
            icon: "success",
          });
          navigate("/dashboard/paymentHistory");
        }
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
      <button
        className="btn btn-outline m-4"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-500 my-4">{error}</p>
      {transId && (
        <p className="text-green-500 my-4">Transaction ID: {transId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
