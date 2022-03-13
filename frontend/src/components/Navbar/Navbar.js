import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import { Button } from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import logo from "../../assets/img/Bee-Logo.png";

function Navbar() {
	const state = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const authLink = (
		<div>
			<li>
				<button
					onClick={() => dispatch(logout())}
					className="nav-links authButton"
				>
					Logout
				</button>
			</li>
		</div>
	);

	const publicLink = (
		<div className="publicLink">
			<li>
				<Link to="/client/signup" className="nav-links authButton">
					Register
				</Link>
			</li>
			<li>
				<Link to="/login" href="#" className="nav-links  authButton">
					Login
				</Link>
			</li>
		</div>
	);
	return (
		<nav className="NavbarItems">
			<Link to="/" className="logo__links">
				<img src={logo} alt="logo" width={28} height={28} />
				<h1 className="navbar-logo">internbee</h1>
			</Link>

			<ul className="nav-menu">
				<li>
					<Link to="/" className="nav-links">
						Home
					</Link>
				</li>
				<li>
					<Link to="/reviews" className="nav-links">
						Reviews
					</Link>
				</li>
				<li>
					<Link to="/internships" className="nav-links">
						Internships
					</Link>
				</li>
				<li>
					<Link to="/about" className="nav-links">
						About Us
					</Link>
				</li>
				{state.isAuthenticated ? authLink : publicLink}
			</ul>
		</nav>
	);
}

export default Navbar;
