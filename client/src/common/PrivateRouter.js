import React from "react";
import { Redirect, Route } from "react-router-dom";
//import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth = true, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth.authenticate === true ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

/* const mapStateToProps = (state) => ({
    auth: state.auth
}) */
export default PrivateRoute;
