import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from '../../redux/actions/AuthAction'
function Navbar(props) {
  
  const logout_handler = ()=>{
    props.logout();
  }

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
              <Link class="nav-link" to="/profile">
                Profiles
              </Link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto nav-flex-icons">
            <div>
              {
                props.auth.authenticate === true ? 
                <Link to="/logout" className="btn btn-info btn-sm" onClick={logout_handler}>
                Logout
              </Link>
                :
                <>
                <Link to="/login" className="btn btn-info btn-sm">
                Login
              </Link>
              <Link to="/register" className="btn btn-info btn-sm">
                Register
              </Link>
                </>
              }
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logout})(Navbar);
