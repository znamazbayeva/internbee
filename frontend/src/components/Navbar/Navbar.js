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
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

// function Navbar({ handleLoginClick }) {
//   state = { clicked: false };
//   handleClick = () => {
//     this.setState({ clicked: !this.state.clicked });
//     console.log(this.state);
//   };

// const handleClick = () => {
//   handleLoginClick();
// };

//const history = useNavigate();

//   return (
//     <nav className="NavbarItems">
//       <h1 className="navbar-logo">Internbee</h1>

//       <ul className="nav-menu">
//         <li>
//           <Link to="/" className="nav-links">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/reviews" className="nav-links">
//             Reviews
//           </Link>
//         </li>
//         <li>
//           {isLoggedIn && (
//             <Link to="/profile" className="nav-links">
//               My Profile
//             </Link>
//           )}
//         </li>
//         <li>
//           <Link to="/internships" className="nav-links">
//             Internships
//           </Link>
//         </li>
//         <li>
//           <Link to="/about" className="nav-links">
//             About Us
//           </Link>
//         </li>
//       </ul>
//       {!isLoggedIn && <Button onClick={handleClick}>Sign Up</Button>}
//       {isLoggedIn && <Button onClick={handleClick}>Logout</Button>}
//     </nav>
//   );
// }

export default Navbar;

// TRY TO IMPLEMENT history more logically, understand the concept!
