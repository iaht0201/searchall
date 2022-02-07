import { CardExpiryElement, CardNumberElement } from "@stripe/react-stripe-js";
import React from "react";
import { CardCVCElement } from "react-stripe-elements";

export default function CheckoutForm() {
  return (
    <div>
      <label>
        Card number
        <CardNumberElement />
      </label>
      <label>
        Expiration date
        <CardExpiryElement />
      </label>
      <label>
        CVC
        <CardCVCElement />
      </label>
      <button>Pay</button>
    </div>
  );
}
