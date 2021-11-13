import React, { useState } from "react";
import axios from "axios";
function Register() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const onChange_handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit_handle = async (e) => {
    e.preventDefault();
    const data = form;
    await axios
      .post("/api/registration", data)
      .then((res) => console.log("ok"))
      .catch(async (err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div className="container p-4">
      <form
        class="text-center border border-light p-5"
        onSubmit={onSubmit_handle}
      >
        <p class="h4 mb-4">Sign up</p>

        <input
          type="text"
          name="name"
          class="form-control mb-4"
          placeholder="Your name"
          onChange={onChange_handle}
        />

        <input
          type="email"
          name="email"
          class="form-control mb-4"
          placeholder="E-mail"
          onChange={onChange_handle}
        />

        <input
          type="password"
          name="password"
          class="form-control mb-4"
          placeholder="Password"
          onChange={onChange_handle}
        />
        <input
          type="password"
          name="confirm"
          class="form-control mb-4"
          placeholder="Confirm your password"
          onChange={onChange_handle}
        />

        <button class="btn btn-info my-4 btn-block" type="submit">
          Sign in
        </button>

        <hr />
      </form>
    </div>
  );
}

export default Register;
