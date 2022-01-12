import { Fragment, useEffect, useState } from "react";

import show from "../../image/show.svg";
import hide from "../../image/hide.svg";

import Header from "../../components/header/Header";

import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import "./Login.css";
import Footer from "../../components/footer/Footer";
export default function LoginForm() {
  // const adminUser = {
  //   name: "Wiliam",
  //   email: "admin@admin.com",
  //   password: "123456",
  // };
  // const adminUser = Account.account();
  const a = JSON.parse(localStorage.getItem("users"));
  const [state, setstate] = useState({});
  useEffect(() => {
    setstate(localStorage.getItem("users"));
  }, []);
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [togglenav, setTogglenav] = useState(true);
  const toggleVisiblityPassword = () => {
    console.log(passwordShow);
    setPasswordShow(passwordShow ? false : true);
  };
  const toggleVissiblityNavbar = () => {
    setTogglenav(togglenav ? false : true);
  };
  console.log(a);
  const [details, setDetails] = useState({ email: "", password: "" });
  let Login = () => {
    state.find((users) => {
      console.log(details);
      if (
        details.email === users.email &&
        details.password === users.password
      ) {
        console.log("Logged in");
        setUser({
          ...user,
          email: details.email,
        });
        console.log(user);
      } else {
        console.log(user);
        setError("details not match");
        console.log("details not match");
      }
    });
  };
  console.log(localStorage.getItem("users"));
  const Logout = () => {
    setUser({ ...user, email: "" });

    console.log("Logout", user);
  };
  return (
    <Fragment>
      <Card>
        <Header
          toggleVissiblityNavbar={toggleVissiblityNavbar}
          togglenav={togglenav}
          isLogin={true}
        />
        {togglenav ? (
          <CardBody>
            <Form className="login-frame">
              <div className="login-title"> Login </div>
              <div className="login-request ">
                Please enter your email address and password below
              </div>
              <FormGroup>
                <Label for="exampleEmail">Your Email</Label>
                <Input
                  className="Email"
                  placeholder="Enter your name"
                  type="email"
                  value={details.value}
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="Password">Password</Label>
                <div className="password-frame">
                  <Input
                    method="post"
                    id="Password"
                    placeholder="Enter your password"
                    type={passwordShow ? "text" : "password"}
                    value={details.password}
                    onChange={(e) =>
                      setDetails({ ...details, password: e.target.value })
                    }
                  />
                  <img
                    className="visible-password"
                    src={passwordShow ? hide : show}
                    alt={passwordShow ? "Hide password" : "Show password"}
                    onClick={toggleVisiblityPassword}
                  />
                </div>
              </FormGroup>
              <div className="forgot-password">Forgot password?</div>

              <Link to={user.email !== "" ? "/search" : "/"}>
                <Button className="btn-login" onClick={Login}>
                  Login
                </Button>{" "}
              </Link>

              <div className="register">
                Need an account? {}
                <Link to="/register">
                  {" "}
                  <span className="register-account">Sign up</span>
                </Link>
              </div>
            </Form>
          </CardBody>
        ) : (
          <div className="navbar-show">
            <div className="account"> Account </div>
            <Link to="/">
              <div className="logout" onClick={Logout}>
                {" "}
                Logout
              </div>
            </Link>
          </div>
        )}
        <Footer />
      </Card>
    </Fragment>
  );
}
