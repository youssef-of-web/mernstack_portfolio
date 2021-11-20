import React, { useState } from "react";
import axios from "axios";
import { AuthRegister } from '../redux/actions/AuthAction'
import { connect } from "react-redux";
import InputGroup from "../common/InputGroup";


function Register(props) {
  const [form, setForm] = useState({});
  const onChange_handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit_handle = async (e) => {
    e.preventDefault();
    const data = form;
    props.AuthRegister(data, props.history)
  };

  const { errors } = props;

  return (
    <div className="container p-4">
      <form
        class="text-center border border-light p-5"
        onSubmit={onSubmit_handle}
      >
        <p class="h4 mb-4">Sign up</p>

        <InputGroup
          type="text"
          name="name"
          placeholder="Your name"
          onchange={onChange_handle}
          errors = {errors.name}
        />
       

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
        <InputGroup
          type="password"
          name="confirm"
          placeholder="Confirm your password"
          onchange={onChange_handle}
          errors = {errors.confirm}
        />

        <button class="btn btn-info my-4 btn-block" type="submit">
          Sign in
        </button>

        <hr />
      </form>
    </div>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})
export default connect(mapStateToProps, {AuthRegister})(Register);
