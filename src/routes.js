import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./features/Login/Login";
import RegisterForm from "./features/Register/Register";
import Search from "./features/Search/Search";
import { List } from "./List";




const Routes = () => (
  <Router>
    <Route path="/" exact component={LoginForm} />
    <Route path="/register" component={RegisterForm} />
    <Route path="/search" component={Search}/>
  </Router>
);

export default Routes;
