import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  return (
    <div className="w-full mx-auto bg-base-200 min-h-screen">
      <SectionTitle
        heading={"PAYMENT"}
        subHeading={"Pay for service"}
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
