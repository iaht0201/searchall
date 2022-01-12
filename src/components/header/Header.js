import React from "react";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Logo from "../../image/Vector.png";
import show from "../../image/show.svg";
import hide from "../../image/hide.svg";
import navbarhiden from "../../image/navbar.svg";
import exit from "../../image/exit.svg";
import "../style.css";
import { Link } from "react-router-dom";
export default function Header({ toggleVissiblityNavbar, togglenav, isLogin }) {
  return (
    <CardHeader className="navbar">
      <div className="container">
        <div className="navbar_item">
          <img src={Logo} alt="Logo" />
          <span className="navbar_title">George Gurdjieff </span>
        </div>
        {isLogin ? (
          <Link to="/register">
            {" "}
            <div className="navbar_login">Sign up</div>
          </Link>
        ) : (
          <Link to="/">
            {" "}
            <div className="navbar_login">Login</div>
          </Link>
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
