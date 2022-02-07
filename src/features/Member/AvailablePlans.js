import React, { Fragment, useState, useEffect } from "react";
import { Card, CardBody, Button, Form } from "reactstrap";
import "../Style.css";
import { Link } from "react-router-dom";
import SelectMenu from "../../components/navbar/SelectMenu";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export default function AvailablePlans({ userPlan }) {
  console.log("userPlan", userPlan);
  const [confirm3, setConfirm3] = useState(false);
  const [confirm6, setConfirm6] = useState(false);
  const [loading, setloading] = useState(true);
  const [price, setPrice] = useState("");
  console.log(userPlan);
  const token = JSON.parse(localStorage.getItem("user-infor")).data;
  const history = useHistory();
  const handleDelete = async (price) => {
    let param = { price };
    try {
      await fetch("http://44.193.147.154:8080/api/auth/cancel-subscription", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(param),
      })
        .then((respon) => respon.json())
        .then(() => {
          history.push("/");
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = (price) => {
    handleDelete(price);
  };
  const register_card = (userPlan) => {
    userPlan.filter((e) => {
      if (e.recurringMonth == 3) {
        if (e.subscribe_url) {
          setConfirm3(true);
          setloading(false);
        } else {
          setConfirm3(false);
          setloading(false);
        }
      } else if (e.recurringMonth == 6) {
        if (e.subscribe_url) {
          setConfirm6(true);
          setloading(false);
        } else {
          setConfirm6(false);
          setloading(false);
        }
      }
    });
  };
  useEffect(() => {
    register_card(userPlan);
  }, [confirm6, confirm3, userPlan]);

  return (
    <div className="available-plan-frame">
      <SelectMenu />
      <div className="available-plan-title">Available plans</div>
      <div className="available-plan-select">
        {/* */}
        {confirm3 ? (
          <div className="free-trial">
            <div className="banner-credit_header">
              <div className="banner-credit_title">Free trial</div>
              <div className="banner-month">for 1 month</div>
            </div>
            <div className="banner-content banner-content_free_trial">
              You will be unlocked to read the first chapter of several books.
            </div>{" "}
            <Button
              className="btn-select_free-trial"
              onClick={() => {
                handleCancel(userPlan[0].pk);
              }}
            >
              Cancel
            </Button>
          </div>
        ) : (
          <div>
            {" "}
            <div className="free-trial">
              <div className="banner-credit_header">
                <div className="banner-credit_title">Free trial</div>
                <div className="banner-month">for 1 month</div>
              </div>
              <div className="banner-content banner-content_free_trial">
                You will be unlocked to read the first chapter of several books.
              </div>
              <Link to="/free-trial">
                {" "}
                <Button className="btn-select_free-trial">Select</Button>
              </Link>
            </div>
          </div>
        )}
        {/* */}
        {confirm6 ? (
          <div className="book-premium">
            <div className="banner-credit_header">
              <div className="banner-credit_title">Book Premium</div>
              <div className="banner-month">One-time payment</div>
            </div>
            <div className="banner-content banner-content_book-premium">
              You will be unlocked to read all the books.
            </div>
            <div className="book-premium_selects">
              <Button
                className="btn-select_book-premium"
                onClick={()=>handleCancel(userPlan[1].pk)}
              >
                Cancel
              </Button>
              =<div className="book-premium_price">$199</div>
            </div>
          </div>
        ) : (
          <div className="book-premium">
            <div className="banner-credit_header">
              <div className="banner-credit_title">Book Premium</div>
              <div className="banner-month">One-time payment</div>
            </div>
            <div className="banner-content banner-content_book-premium">
              You will be unlocked to read all the books.
            </div>
            <div className="book-premium_selects">
              <Link to="/book-premium">
                <Button className="btn-select_book-premium">Select</Button>
              </Link>
              <div className="book-premium_price">$199</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
