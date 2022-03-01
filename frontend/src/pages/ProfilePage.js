import { useContext, useRef } from "react";
//import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import classes from "./ProfilePage.module.css";

const ProfilePage = () => {
  //  const navigate = useNavigate();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // add validation & err handling

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDerzU2YXZ8guhGbEgUf498kdmMoH8oZoQ",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      // assumption: always succeeds!
      // navigate("/", { replace: true });
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfilePage;
