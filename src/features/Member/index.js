import React, { Fragment, useState, useEffect } from "react";
import { Card, CardBody, Button, Form } from "reactstrap";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "../Style.css";
import { Link } from "react-router-dom";
import { getUsers } from "../../localStorage";
import Navbar from "../../components/navbar/Navbar";
import Account from "./Account";
import SelectMenu from "../../components/navbar/SelectMenu";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Logout from "../../components/Logout/Logout";
import AvailablePlans from "./AvailablePlans";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";
import Loading from "../../components/loading/Loading";
export default function Index() {
  const [price, setPrice] = useState([]);
  const [togglenav, setTogglenav] = useState(true);
  const [responsiveMember, setResponsiveMember] = useState(false);
  const toggleVissiblityNavbar = () => {
    setTogglenav(togglenav ? false : true);
    setResponsiveMember(responsiveMember ? false : true);
  };
  const [name, setName] = useState();
  const [userPlan, setUserPlan] = useState();
  const [loading, setLoading] = useState(true);
  const token = JSON.parse(localStorage.getItem("user-infor")).data;
  async function getUser() {
    await fetch("http://44.193.147.154:8080/api/auth/get-user-plan", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setUserPlan(data.userPlan);
        setLoading(false);
      });
  }
  useEffect(() => {
    getUser();
  }, []);

  /* */

  return (
    <Fragment>
      {!loading ? (
        <Card>
          <Header
            toggleVissiblityNavbar={toggleVissiblityNavbar}
            togglenav={togglenav}
            isLogin={true}
            handleLogin={true}
            type="member"
          />
          {togglenav ? (
            <CardBody>
              <div className="member-frame">
                <Navbar name={name} />
                <AvailablePlans userPlan={userPlan} />
              </div>
            </CardBody>
          ) : (
            <Logout />
          )}
          <Footer />
        </Card>
      ) : (
        <Loading />
      )}
    </Fragment>
  );
}
