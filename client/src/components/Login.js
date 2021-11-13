import React, { useState } from "react";
import axios from "axios";
function Login() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const onChange_handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit_handle = async (e) => {
    e.preventDefault();
    const data = form;
    await axios
      .post("/api/login", data)
      .then((res) => console.log("ok"))
      .catch(async (err) => {
        console.log(err.response.data);
      });
  };
  return (
    <div className="container p-4">
      <form
        className="text-center border border-light p-5"
        onSubmit={onSubmit_handle}
      >
        <p className="h4 mb-4">Sign in</p>

        <input
          type="email"
          name="email"
          className="form-control mb-4"
          placeholder="E-mail"
          onChange={onChange_handle}
        />

        <input
          type="password"
          name="password"
          className="form-control mb-4"
          placeholder="Password"
          onChange={onChange_handle}
        />

        <button className="btn btn-info btn-block my-4" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
