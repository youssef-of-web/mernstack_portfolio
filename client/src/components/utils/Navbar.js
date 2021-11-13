import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-333"
          aria-controls="navbarSupportedContent-333"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Profiles
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto nav-flex-icons">
            <div>
              <Link to="/login" className="btn btn-info btn-sm">
                Login
              </Link>
              <Link to="/register" className="btn btn-info btn-sm">
                Register
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
