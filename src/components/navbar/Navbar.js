import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../style.css";
export default function Navbar({ name }) {
  const history = useHistory();
  const Logout = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <div className="selected-navbar">
      <div className="member-infor">
        <div className="member-avt"></div>
        <div className="member-infora_item">
          {" "}
          <div className="member-name">{name}</div>
          <div className="member-type">Member</div>
        </div>
      </div>
      <ul className="selected-list">
        <Link to="Account_overview">
          <li>Account overview</li>
        </Link>
        <Link to="Available_plans">
          <li>Available plans</li>
        </Link>
        <Link to="Change_password">
          <li>Change password</li>
        </Link>

        <li onClick={Logout}>Logout</li>
      </ul>
      <div></div>
    </div>
  );
}
