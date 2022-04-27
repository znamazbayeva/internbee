import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { create_clientuser } from "../../actions/auth";
function VerifyEmail({ isAuthenticated, isStudent }) {
  const [verify, setVerify] = useState("");
  const [redirect, setRedirect] = useState(false);
  const state = useSelector((state) => state.auth);
  console.log("hello  ");

  const loginChange = (e) => {
    setVerify(e.target.value);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setRedirect(true);
  };

  return (
    <div className="LoginMain">
      <div>
        <h2 className="LoginTitle">Verify Email</h2>
        <div className="formCss">
          <form className="LoginForm" onSubmit={(e) => handleLoginSubmit(e)}>
            <div>
              <input
                type="text"
                className="LoginInput"
                onChange={(e) => loginChange(e)}
                placeholder="Enter the verification code"
                name="verify"
                value={verify}
              />
            </div>
            {isStudent && (
              <Link to="/student/dashboard" style={{ textDecoration: "none" }}>
                <button className="login__btn">Verify</button>
              </Link>
            )}
            {!isStudent && (
              <Link to="/company/dashboard" style={{ textDecoration: "none" }}>
                <button className="login__btn">Verify</button>
              </Link>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

VerifyEmail.propTypes = {
  create_clientuser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  isClient: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isStudent: state.auth.isStudent,
});

export default connect(mapStateToProps, { create_clientuser })(VerifyEmail);
