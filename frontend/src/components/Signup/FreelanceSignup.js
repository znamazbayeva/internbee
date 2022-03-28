import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { create_freelanceuser } from "../../actions/auth";
import { Redirect, Link } from "react-router-dom";
import hey from "../../assets/img/signup.png";
import "./Signup.css";
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
	if (isAuthenticated && !isClient) {
		return <Redirect to="/company/dashboard" />;
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
					</form>
				</div>
			</div>
		</div>
		// <div className="container">
		// 	<h2>signup and start freelancing</h2>
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
