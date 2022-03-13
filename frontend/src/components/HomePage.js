import React, { useState, Component, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import image from "../assets/img/landing.png";
import axios from "axios";

const HomePage = () => {
	const [list, setList] = useState([]);
	const [internship, setInternship] = useState({
		name: "",
		city: "",
		category: "",
	});

	useEffect(() => {
		if (list.length == 0) {
			axios
				.get("http://127.0.0.1:8000/v1/api/internships/")
				.then((response) => {
					console.log(response.data);
					setList(response.data);
				});
		}
	}, []);

	const { name, city, category } = internship;

	const internshipSearchChange = (e) => {
		setInternship({ ...internship, [e.target.name]: e.target.value });
	};

	const handleInternshipSearchSubmit = (e) => {
		e.preventDefault();

		// login({ username, password });
	};

	return (
		<div className="search__container">
			<div className="container__main">
				<img
					src={image}
					alt="landing_image"
					width={600}
					height={600}
					className="internship__img"
				/>
				<form
					className="internship__search-form"
					onSubmit={(e) => handleInternshipSearchSubmit(e)}
				>
					<h2 class="internship__title">Find Internship</h2>
					<div className="input__container">
						<label>What job are you looking for?</label>
						<input
							type="text"
							className="internship__input"
							placeholder="Software Engineer Intern"
							name="name"
							value={name}
							onChange={(e) => internshipSearchChange(e)}
						/>
					</div>
					<div className="input__container">
						<label>Where?</label>
						<input
							type="text"
							className="internship__input"
							placeholder="Almaty"
							name="city"
							value={city}
							onChange={(e) => internshipSearchChange(e)}
						/>
					</div>
					<div className="input__container">
						<label>Categories</label>
						<input
							type="text"
							className="internship__input"
							placeholder="Agrobusiness"
							name="category"
							value={category}
							onChange={(e) => internshipSearchChange(e)}
						/>
					</div>
					<button className="login__btn">Search</button>
					<div>Make more advanced search</div>
				</form>
			</div>
		</div>
	);
};

export default HomePage;
