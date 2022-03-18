import React, { useState, Component, useEffect } from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addInternshipList } from "../../actions/internship";
function SearchInternship() {
    const dispatch = useDispatch();
	const locat = useLocation();
	// const [list, setList] = useState([]);
	const [internship, setInternship] = useState({
		name: "",
		location: "",
		category: "",
	});

	const [redirect, setRedirect] = useState(false);

	// useEffect(() => {
	// 	if (list.length == 0) {
	// 		axios
	// 			.get("http://127.0.0.1:8000/v1/api/internships/", {params:{key:value, key1:value1}}).then((data)=>{}).catch((error)=>{})
	// 			.then((response) => {
	// 				console.log(response.data);
	// 				setList(response.data);
	// 			});
	// 	}
	// }, []);

	const { name, location, category } = internship;

	const internshipSearchChange = (e) => {
		setInternship({ ...internship, [e.target.name]: e.target.value });
	};

	const sendInternshipData = (e) => {
		axios
			.get("http://127.0.0.1:8000/v1/api/internship/", {
				params: {
					name: internship.name,
					location: internship.location,
					category: internship.category,
				},
			})
			.then((response) => {
				console.log(response.data);
				dispatch(addInternshipList(response.data));
			})
			.catch((error) => {
				console.log(error.data);
			});
	}

	const handleInternshipSearchSubmit = (e) => {
			sendInternshipData();
			e.preventDefault();
			setRedirect(true);
	};
  return (
    <div>				<form
    className="internship__search-form"
    onSubmit={(e) => handleInternshipSearchSubmit(e)}
>
    <h2 className="internship__title">Find Internship</h2>
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
            name="location"
            value={location}
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
</form></div>
  )
}

export default SearchInternship