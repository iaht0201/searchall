import React, { useState } from "react";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Logo from "../../image/Vector.png";
import navbarhiden from "../../image/navbar.svg";
import exit from "../../image/exit.svg";
import "../style.css";
import { Link } from "react-router-dom";
import iconProfile from "../../image/profile.svg";
export default function Header({
  toggleVissiblityNavbar,
  togglenav,
  isLogin,
  handleLogin,
  type,
}) {
  const [typea, setTypea] = useState(type);
  console.log(typea);
  return (
    <CardHeader className="navbar">
      <div className="container">
        <div className="navbar_item">
          <img src={Logo} alt="Logo" />
          <span className="navbar_title">George Gurdjieff </span>
        </div>
        {!handleLogin ? (
          <Link to={`${isLogin ? "/register" : "/"}`}>
            <div className="navbar_login">
              {`${isLogin ? "Sign up" : "Login"}`}
            </div>
          </Link>
        ) : (
          <div className="navbar_login navbar-login_item">
            <img src={iconProfile} alt="iconProfile" className="iconProfile" />
            <div className="navbar-login_profile">Profile </div>
          </div>

        )}
        {togglenav ? (
          <img
            src={navbarhiden}
            alt="navbar"
            className="navbar-visible"
            onClick={toggleVissiblityNavbar}
          />
        ) : (
          <img
            src={exit}
            alt="navbar"
            className="navbar-visible"
            onClick={toggleVissiblityNavbar}
          />
        )}
      </div>
    </CardHeader>
  );
}
