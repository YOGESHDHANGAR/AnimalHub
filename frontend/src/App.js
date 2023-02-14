import React, { useEffect } from "react";
import "./App.css";
import BottomNav from "./Components/BottomNav/BottomNav";
import Home from "./Components/Home/Home";
import Sell from "./Components/SellAnimal/Sell";
import TopNav from "./Components/TopNav/TopNav";
import Account from "./Components/Account/Account";
import store from "./Redux/store";
import { loadUser } from "./Redux/actions/userActions";
import ProtectedRoute from "./Routes/ProtectedRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration from "./Components/Registration/Registration";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Router>
        <TopNav />
        <Switch>
          <Route exact path="/" component={Home} />

          <ProtectedRoute exact path="/sell" component={Sell} />

          <ProtectedRoute exact path="/account" component={Account} />
        </Switch>
        <Route exact path="/registration" component={Registration} />

        <BottomNav />
      </Router>
    </>
  );
};

export default App;
