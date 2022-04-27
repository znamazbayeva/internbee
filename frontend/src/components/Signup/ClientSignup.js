import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { create_clientuser } from "../../actions/auth";
import { Redirect, Link } from "react-router-dom";
import hey from "../../assets/img/signup.png";
import "./Signup.css";

const ClientSignup = ({ create_clientuser, isAuthenticated, isStudent }) => {
  const [client, setClient] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });

  const { email, password } = client;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = {
      email,
      password,
    };
    create_clientuser(newClient);
  };

  if (isAuthenticated && isStudent) {
    return <Redirect to="/verify" />;
  }
  return (
    <div className="singup container">
      <div>
        <img src={hey} alt="" width={619} height={416} />
      </div>
      <div>
        <div className="signup__form">
          <h1>Create an Account</h1>
          <ul className="signup__choice">
            <li className="li">
              <Link to="/client/signup" className="link__btn btn-active">
                Student
              </Link>
            </li>
            <li className="li">
              <Link to="/freelance/signup" className="link__btn">
                Company
              </Link>
            </li>
          </ul>
          <form className="form__container" onSubmit={(e) => handleSubmit(e)}>
            <div className="login-box">
              <label className="box__label">E-mail</label>
              <input
                type="text"
                name="email"
                className="box__input"
                value={email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="login-box">
              <label className="box__label">Password</label>
              <input
                type="password"
                name="password"
                className="box__input" // 						type="text"
                value={password}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <button type="submit" value="Sign Up" className="signup__btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

ClientSignup.propTypes = {
  create_clientuser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  isClient: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isStudent: state.auth.isStudent,
});

export default connect(mapStateToProps, { create_clientuser })(ClientSignup);
