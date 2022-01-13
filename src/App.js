import Search from "../src/features/Search/Search";
import LoginForm from "./features/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterForm from "./features/Register/Register";
import Routes from "./routes";


function App() {
  // const Logout = () => {
  //   setUser({ ...user, email: "" });

  //   console.log("Logout", user);
  // };
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route path="/" exact>
            <LoginForm />
          </Route>
          <Route path="/search" component={Search} />

          <Route path="/register">
            <RegisterForm />
          </Route>
        </Switch>
      </Router> */}
     <Routes/>
    </div>
  );
}

export default App;
