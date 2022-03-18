import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Login.css";
function Login({ login, isAuthenticated, isClient }) {
  console.log(isClient);
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

  if (isAuthenticated && isClient) {
    return <Redirect to="/student/dashboard" />;
  } else if (isAuthenticated && !isClient) {
    return <Redirect to="/freelance/dashboard" />;
  } else {
    return (
      <div className="LoginMain">
        <div>
          <h2 class="LoginTitle">Sign In</h2>
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
  isClient: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isClient: state.auth.isClient,
});

export default connect(mapStateToProps, { login })(Login);
