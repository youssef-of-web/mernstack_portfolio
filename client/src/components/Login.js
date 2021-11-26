import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { AuthLogin } from "../redux/actions/AuthAction";
import InputGroup from "../common/InputGroup";
import { withRouter } from "react-router";



function Login(props) {
  const [form, setForm] = useState({});
  const onChange_handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit_handle = async (e) => {
    e.preventDefault();
    const data = form;
    props.AuthLogin(data, props.history)
  };
  
  useEffect(()=>{
    const redirect = ()=>{
      if(props.auth.authenticate === true){
         props.history.push('/profile')
      }
    }
    redirect();
  })
  
  
  const {errors} = props;
  return (
    <div className="container p-4">
      <form
        className="text-center border border-light p-5"
        onSubmit={onSubmit_handle}
      >
        <p className="h4 mb-4">Sign in</p>

        <InputGroup
          type="email"
          name="email"
          placeholder="E-mail"
          onchange={onChange_handle}
          errors = {errors.email}
        />

        <InputGroup
          type="password"
          name="password"
          placeholder="Password"
          onchange={onChange_handle}
          errors = {errors.password}
        />

        <button className="btn btn-info btn-block my-4" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { AuthLogin })(withRouter(Login));
