import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./features/Login/Login";
import RegisterForm from "./features/Register/Register";
import Search from "./features/Search/Search";
import BookPremium from "./features/SelectedCredit/BookPrenium";
import FreeTrial from "./features/SelectedCredit/FreeTrial";
import AvailablePlans from "./features/Member/AvailablePlans";
import ConfirmThreeMonth from "./components/confirm/Confirm_3month";
import ConfirmSixMonth from "./components/confirm/Confirm_6month";
import Index from "./features/Member";
import ChangePassword from "./features/Member/ChangePassword";
import CancelsixMonth from "./components/cancel/Cancel3month";
import CancelthreeMonth from "./components/cancel/Cancel3month";
const Routes = () => (
  <Router>
    <Route path="/" exact component={LoginForm} />
    <Route path="/register" component={RegisterForm} />
    <Route path="/search" component={Search} />
    <Route path="/free-trial" component={FreeTrial} />
    <Route path="/book-premium" component={BookPremium} />
    <Route path="/member" component={Index} />
    <Route path="/available_plans" component={Index} />
    <Route path="/member/:type" component={AvailablePlans} />
    <Route path="/confirm_threemonth" component={ConfirmThreeMonth} />
    <Route path="/confirm_sixmonth" component={ConfirmSixMonth} />
    <Route path="/cancel_threemonth" component={CancelthreeMonth} />
    <Route path="/cancel_sixmonth" component={CancelsixMonth} />
    <Route path="/Change_password" component={ChangePassword} />
  </Router>
);

export default Routes;
