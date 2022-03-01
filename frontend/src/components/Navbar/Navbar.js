import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../Button/Button";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Internbee</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/internships">Internships</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Button onClick={logoutHandler}>Logout</Button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

// TRY TO IMPLEMENT history more logically, understand the concept!
