import React from "react";
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./common/PrivateRouter";
import setAuthToken from "./common/setAuthToken";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Navbar from "./components/utils/Navbar";
import { setCurrentUser } from "./redux/actions/AuthAction";
import store from "./redux/store";
import jwt_decode from 'jwt-decode'


if(localStorage.jwtToken){

  setAuthToken(localStorage.jwtToken);

  const decode = jwt_decode(localStorage.jwtToken);

  store.dispatch(setCurrentUser(decode));

  const currentDate = Date.now / 1000;

   
}




export default function App() {
  return (
    <Provider store={store}>
      <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register } />
          <PrivateRoute exact path="/profile" component={Profile } />
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}
