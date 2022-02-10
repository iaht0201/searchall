import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
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
import ConfirmImg from "../../image/confirm.svg";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Logout from "../Logout/Logout";

export default function ConfirmSixMonth() {
  const [togglenav, setTogglenav] = useState(true);
  const toggleVissiblityNavbar = () => {
    setTogglenav(togglenav ? false : true);
  };
  const history = useHistory();
  const route = () => {
    history.push("/member")
  }

  return (
    <Fragment>
      <Card>
        <Header
          toggleVissiblityNavbar={toggleVissiblityNavbar}
          togglenav={togglenav}
          isLogin={true}
          handleLogin={true}
        />

        {togglenav ? (
          <CardBody>
            <div className="frame-confirm">
              <img src={ConfirmImg} alt="confirm" />
              <div className="confirm-title">You’re Book Premium now!</div>
              <div className="confirm-content">
              Your purchase is complete. You can cancel anytime by going to your Account.
              </div>
              <Button className="btn-confirm " onClick={route}>back to profile</Button>{" "}
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
