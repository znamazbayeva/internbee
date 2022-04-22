import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect, useLocation } from "react-router-dom";

function VerifyEmail() {
  const [verify, setVerify] = useState("");
  const [redirect, setRedirect] = useState(false);
  const state = useSelector((state) => state.auth);
  // let is_stud = false;
  // if (state) {
  //   is_stud = state.auth.is_student;
  // }

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
            <button className="login__btn">Verify</button>
          </form>
        </div>
        {/* {redirect && is_stud && <Redirect push to="/student/dashboard/" />}
        {redirect && !is_stud && <Redirect push to="/company/dashboard/" />} */}
      </div>
    </div>
  );
}

export default VerifyEmail;
