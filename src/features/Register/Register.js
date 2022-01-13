import { Fragment, useState } from "react";
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
import "../Login/Login.css";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { setUsers } from "../../localStorage";
export default function RegisterForm() {
  const [fullname, setFullName] = useState("");
  const [password, setPasssword] = useState("");
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const handleRegister = () => {
    // e.preventDefault();
    let data = {
      fullname,
      email,
      password,
    };
  (  fullname !== "" &&
  email !== "" &&
  password!=="")?setUsers(data):alert({erro})
  };

  const [passwordShow, setPasswordShow] = useState(false);
  const [togglenav, setTogglenav] = useState(true);
  const toggleVisiblityPassword = () => {
    console.log(passwordShow);
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
                  onChange={(e) => setFullName(e.target.value)}
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
                  />
                  <img
                    className="visible-password"
                    src={passwordShow ? hide : show}
                    alt={passwordShow ? "Hide password" : "Show password"}
                    onClick={toggleVisiblityPassword}
                  />
                </div>
              </FormGroup>{" "}
              <Link to="/">
                <Button className="btn-register" onClick={handleRegister}>
                  REGISTER
                </Button>
              </Link>
              <div className="terms">
                By using George Gurdjieff you agree to our{" "}
                <span className="term"> Terms</span>
              </div>
            </Form>
          </CardBody>
        ) : (
          <div className="navbar-show">
            <div className="account"> Account </div>
            <div className="logout"> Logout</div>
          </div>
        )}
        <Footer />
      </Card>
    </Fragment>
  );
}
