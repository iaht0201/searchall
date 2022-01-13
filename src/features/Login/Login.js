import { Fragment, useEffect, useState } from "react";

import show from "../../image/show.svg";
import hide from "../../image/hide.svg";

import Header from "../../components/header/Header";
import { getUsers } from "../../localStorage";
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
import { Link, useParams } from "react-router-dom";

import "./Login.css";
import Footer from "../../components/footer/Footer";

export default function LoginForm() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [togglenav, setTogglenav] = useState(true);
  const toggleVisiblityPassword = () => {
    setPasswordShow(passwordShow ? false : true);
  };
  const toggleVissiblityNavbar = () => {
    setTogglenav(togglenav ? false : true);
  };
  const [Login, setLogin] = useState(false);
  useEffect(() => {
    setUsers(getUsers());
    console.log(Login)
  }, [getUsers],Login);
  const [details, setDetails] = useState({ email: "", password: "" });
  const handleLogin = ()=> {
    let a = users.find(user=>user.email===details.email) ; 
    setLogin((a.email===details.email && a.password===details.password)?true:false) ;
    console.log(a) ;
  }
  
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
            <Form className="login-frame" onSubmit={handleLogin}>
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
              <Link to={Login?"/search":"/"}>
                <Button className="btn-login" onClick={handleLogin}>Login</Button>{" "}
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
              <div className="logout"> Logout</div>
            </Link>
          </div>
        )}
        <Footer />
      </Card>
    </Fragment>
  );
}
