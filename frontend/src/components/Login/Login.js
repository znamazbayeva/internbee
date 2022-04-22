import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Login.css";

function Login({ login, isAuthenticated, isStudent }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user;

  const loginChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  if (isAuthenticated && isStudent) {
    return <Redirect to="/verify/" />;
  } else if (isAuthenticated && !isStudent) {
    return <Redirect to="/company/dashboard" />;
  } else {
    return (
      <div className="LoginMain">
        <div>
          <h2 className="LoginTitle">Sign In</h2>
          <div className="formCss">
            <form className="LoginForm" onSubmit={(e) => handleLoginSubmit(e)}>
              <div>
                <input
                  type="text"
                  className="LoginInput"
                  onChange={(e) => loginChange(e)}
                  placeholder="Enter your email address"
                  name="username"
                  value={username}
                />
              </div>
              <div>
                <input
                  type="password"
                  className="LoginInput"
                  onChange={(e) => loginChange(e)}
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                />
              </div>
              <button className="login__btn">Login</button>
            </form>
            <div className="login__back">
              Don't have an account? <Link to="/client/signup">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  isStudent: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isStudent: state.auth.isStudent,
});

export default connect(mapStateToProps, { login })(Login);
