import React, { Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ArrowDown from "../../image/arrowdown.svg";
import Visa from "../../image/visa.svg";
import Mastercard from "../../image/mastercard.svg";
import Amex from "../../image/amex.svg";
import "../Style.css";
import Logout from "../../components/Logout/Logout";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
export default function BookPremium() {
  const [togglenav, setTogglenav] = useState(true);
  const toggleVissiblityNavbar = () => {
    setTogglenav(togglenav ? false : true);
  };
  const history = useHistory();
  const [unlock, setUnlock] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [price] = useState("price_1JtogXB3ETQpYPYdhWMEajJ2");
  const [loading, setloading] = useState(true);
  // const [card_token, setCard_token] = useState("");
  let card_token = "";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    const card = elements.getElement(CardNumberElement);
    const result = await stripe.createToken(card);
    if (!error) {
      const { id } = paymentMethod;

      // setCard_token(result.token.id);
      card_token = result.token.id;
    }

    /*fetch */

    const token = JSON.parse(localStorage.getItem("user-infor")).data;

    let param = { card_token, price };
    await fetch("http://44.193.147.154:8080/api/auth/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(param),
    })
      .then((respon) => respon.json())
      .then((data) => {
        if (data.success === true) {
          setloading(false);
        }
      });
  };
  return (
    <Fragment>
      {!loading ? history.push("/confirm_sixmonth") : ""}
      <Card>
        <Header
          toggleVissiblityNavbar={toggleVissiblityNavbar}
          togglenav={togglenav}
          isLogin={true}
          handleLogin={true}
        />

        {togglenav ? (
          <CardBody>
            <div className="credit-frame">
              <div
                className={`header-credit ${
                  unlock ? "no-changePlan" : "changePlan"
                }`}
              >
                <div className="header-credit_title">Your plan</div>
                <div className="change-plan">Change plan</div>
              </div>
              <div className="credit-book_premium">
                {/*Free- trial */}
                <div className="banner-credit_header">
                  <div className="banner-credit_title">Free trial</div>
                  <div className="banner-month">for 1 month</div>
                </div>
                <div className="banner-content">
                  You will be unlocked to read the first chapter of several
                  books.
                </div>
                <div className="banner-unlock">
                  <img src={ArrowDown} alt="unlock" />
                  <div
                    className="banner-unlock_route"
                    onClick={() => setUnlock(true)}
                  >
                    {" "}
                    Unlock
                  </div>
                </div>
              </div>

              <Form
                className={`payment-frame ${
                  !unlock ? "no-changePlan" : "changePlan"
                }`}
              >
                <div className="payment-title"> Payment method </div>
                <div className="select-cards">
                  <div className="selecr-card_title"> Credit or debit card</div>
                  <div className="select-card-item">
                    <img src={Visa} alt="visa" />
                    <img src={Mastercard} alt="visa" />
                    <img src={Amex} alt="visa" />
                  </div>
                </div>
                <div>
                  <div>
                    <label>Card Number</label>
                    <CardNumberElement />
                  </div>
                  <div>
                    <label>Month</label>
                    <CardExpiryElement />
                  </div>
                  <div>
                    <label>SVC</label>
                    <CardCvcElement />
                  </div>
                </div>
                <div className="card-content">
                  You consent to get access to your George Gurdjieff
                  subscription immediately, and that if you don't cancel before
                  the trial ends on December 12, 2021, you will automatically be
                  charged the subscription fee every month until you cancel. You
                  will not be entitled to a refund on cancellation. Full terms
                  and instructions on how to cancel are available here.
                </div>
                <Button className="btn-credit" onClick={handleSubmit}>
                  start my book FREE TRIAL
                </Button>{" "}
              </Form>
            </div>
          </CardBody>
        ) : (
          <Logout />
        )}

        <Footer />
      </Card>
    </Fragment>
  );
}
