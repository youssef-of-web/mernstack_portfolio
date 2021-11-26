import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
//import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth , ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth.authenticate === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

 const mapStateToProps = (state) => ({
    auth: state.auth
}) 
export default connect(mapStateToProps)(PrivateRoute);
