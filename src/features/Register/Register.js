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
import "../Style.css";
import Footer from "../../components/footer/Footer";
import { Link, useHistory } from "react-router-dom";
import { setUsers } from "../../localStorage";
import Logout from "../../components/Logout/Logout";
export default function RegisterForm() {
  /*Register */

  /* */

  const history = useHistory();
  const handleRegister = async () => {
    let param = { name, email, password, password_confirmation };
    let respon = await fetch("http://44.193.147.154:8080/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(param),
    });
    respon = await respon.json();
    if (respon.success) {
      localStorage.setItem("user-infor", JSON.stringify(respon));
      history.push("/member");
    } else {
      setError(respon.error);
    }
    //
  };
  const [name, setName] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPasssword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  const [passwordShow, setPasswordShow] = useState(false);
  const [togglenav, setTogglenav] = useState(true);
  const toggleVisiblityPassword = () => {
    setPasswordShow(passwordShow ? false : true);
  };
  const toggleVissiblityNavbar = () => {
    setTogglenav(togglenav ? false : true);
  };

  return (
    <Fragment>
      <Card>
        <Header
          toggleVissiblityNavbar={toggleVissiblityNavbar}
          togglenav={togglenav}
          isLogin={false}
          handleLogin={false}
        />
        {togglenav ? (
          <CardBody>
            <Form className="register-frame" onSubmit={handleRegister}>
              <div className="register-title"> Register </div>
              <FormGroup>
                <Label for="FullName">FullName</Label>
                <Input
                  className="InputName"
                  placeholder="Enter your name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="InputEmail">Your Email</Label>
                <Input
                  className="Email"
                  placeholder="name@example.com"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Password">Password</Label>
                <div className="password-frame">
                  <Input
                    method="post"
                    className="Password"
                    placeholder="Enter your password"
                    type={passwordShow ? "text" : "password"}
                    onChange={(e) => setPasssword(e.target.value)}
                  />
                  <img
                    className="visible-password"
                    src={passwordShow ? hide : show}
                    alt={passwordShow ? "Hide password" : "Show password"}
                    onClick={toggleVisiblityPassword}
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="ConfirmPassword">Confirm Password</Label>
                <div className="password-frame">
                  <Input
                    method="post"
                    className="ConfirmPassword"
                    placeholder="Re-type password"
                    type={passwordShow ? "text" : "password"}
                    onChange={(e) => setPassword_confirmation(e.target.value)}
                  />
                  <img
                    className="visible-password"
                    src={passwordShow ? hide : show}
                    alt={passwordShow ? "Hide password" : "Show password"}
                    onClick={toggleVisiblityPassword}
                  />
                </div>
              </FormGroup>{" "}
              <Button className="btn-register" onClick={handleRegister}>
                REGISTER
              </Button>
              <div className="terms">
                By using George Gurdjieff you agree to our{" "}
                <span className="term"> Terms</span>
              </div>
            </Form>
          </CardBody>
        ) : (
          <Logout />
        )}
        <Footer />
      </Card>
    </Fragment>
  );
}
