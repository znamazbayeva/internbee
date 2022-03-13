import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { create_clientuser } from "../../actions/auth";
import { Redirect, Link } from "react-router-dom";
import hey from "../../assets/img/signup.png";
import "./Signup.css";
const ClientSignup = ({ create_clientuser, isAuthenticated, isClient }) => {
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
		console.log(newClient);
		create_clientuser(newClient);
	};
	if (isAuthenticated && isClient) {
		return <Redirect to="/client/dashboard" />;
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
		// <div className="container">
		// 	<h2>signup as a employer</h2>
		// 	<div className="row">
		// 		<div className="col-md-8 mx-auto">
		// 			<form onSubmit={(e) => handleSubmit(e)}>
		// 				<div className="form-group mb-3">
		// 					<label>Email</label>
		// 					<input
		// 						type="text"
		// 						className="form-control"
		// 						name="email"
		// 						value={email}
		// 						onChange={(e) => handleChange(e)}
		// 					/>
		// 				</div>
		// 				<div className="form-group mb-3">
		// 					<label>password</label>
		// 					<input
		// 						type="text"
		// 						className="form-control"
		// 						name="password"
		// 						value={password}
		// 						onChange={(e) => handleChange(e)}
		// 					/>
		// 				</div>

		// 				<button type="submit" className="btn btn-primary">
		// 					Signup
		// 				</button>
		// 			</form>
		// 		</div>
		// 	</div>
		// </div>
	);
};

ClientSignup.propTypes = {
	create_clientuser: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
	isClient: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	isClient: state.auth.isClient,
});

export default connect(mapStateToProps, { create_clientuser })(ClientSignup);
