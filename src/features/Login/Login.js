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
import { Link, useHistory } from "react-router-dom";
import "../Style.css";
import Footer from "../../components/footer/Footer";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user-infor"))) {
      history.push("/member");
    }
  }, []);

  const [passwordShow, setPasswordShow] = useState(false);
  const [togglenav, setTogglenav] = useState(true);
  const toggleVisiblityPassword = () => {
    setPasswordShow(passwordShow ? false : true);
  };
  const toggleVissiblityNavbar = () => {
    setTogglenav(togglenav ? false : true);
  };
  const [error, setError] = useState();
  async function handleLogin() {
    console.warn(email, password);
    let item = { email, password };
    let respon = await fetch("http://44.193.147.154:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    respon = await respon.json();
    if (respon.success) {
      localStorage.setItem("user-infor", JSON.stringify(respon));
      history.push("/member");
    } else {
      setError(respon.error);
    }
  }
  return (
    <Fragment>
      <Card>
        <Header
          toggleVissiblityNavbar={toggleVissiblityNavbar}
          togglenav={togglenav}
          isLogin={true}
          handleLogin={false}
        />
        {togglenav ? (
          <CardBody>
            <Form className="login-frame">
              <div className="login-title"> Login </div>
              <div className="login-request "></div>
              <FormGroup>
                <Label for="exampleEmail">Your Email</Label>

                <Input
                  className="Email"
                  placeholder="Enter your name"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
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
              <div className="error-login">{error}</div>
              <Button className="btn-login" onClick={handleLogin}>
                Login
              </Button>{" "}
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
          <div>{/* <Logout /> */}</div>
        )}
        <Footer />
      </Card>
    </Fragment>
  );
}
