import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function Logout() {
  const history = useHistory();
  const Logout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div className="navbar-show">
      <div className="account"> Account </div>

      <div className="logout" onClick={Logout}>
        {" "}
        Logout
      </div>
    </div>
  );
}
