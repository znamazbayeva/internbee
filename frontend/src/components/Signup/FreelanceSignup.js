import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { create_freelanceuser } from "../../actions/auth";
import { Redirect, Link } from "react-router-dom";
import hey from "../../assets/img/signup.png";
import "./Signup.css";
import { signInWithGoogle } from "../../Firebase";

const FreelanceSignup = ({
  create_freelanceuser,
  isAuthenticated,
  isClient,
}) => {
  const [freelancer, setFreelancer] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFreelancer({
      ...freelancer,
      [e.target.name]: e.target.value,
    });

  const { email, password } = freelancer;
  const handleSubmit = (e) => {
    e.preventDefault();
    //implement the register logic
    const newUser = {
      email,
      password,
    };
    create_freelanceuser(newUser);
  };

  const signUpWithGoogle = () => {
    signInWithGoogle();
    const newEmail = localStorage.getItem("email");
    const newPassword = localStorage.getItem("email");
    setFreelancer({
      ...freelancer,
      email: newEmail,
      password: newPassword,
    });
    const newClient = {
      email,
      password,
    };

    create_freelanceuser(newClient);

    console.log(isAuthenticated);
    console.log("isAuthenticated?");
  };
  if (isAuthenticated && !isClient) {
    return <Redirect to="/company/dashboard" />;
  }
  return (
    <div className="signup container">
      <div>
        <img src={hey} alt="" width={619} height={416} />
      </div>
      <div>
        <div className="signup__form">
          <h1>Create an Account</h1>
          <ul className="signup__choice">
            <li className="li">
              <Link to="/client/signup" className="link__btn ">
                Student
              </Link>
            </li>
            <li className="li">
              <Link to="/freelance/signup" className="link__btn btn-active">
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
            <button onClick={signUpWithGoogle}>Sign In With Google</button>
          </form>
        </div>
      </div>
    </div>
  );
};
FreelanceSignup.propTypes = {
  create_freelanceuser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  isClient: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isClient: state.auth.isClient,
});

export default connect(mapStateToProps, { create_freelanceuser })(
  FreelanceSignup
);
