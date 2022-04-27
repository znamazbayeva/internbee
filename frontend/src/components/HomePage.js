import React, { useState, Component, useEffect } from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import "./HomePage.css";
import image from "../assets/img/landing.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addInternshipList } from "../actions/internship";
import FeaturedInternships from "./FeaturedInternships";
import { useFilterContext } from "../context/filter_context";
import BasicCard from "./BasicCard";
import Grid from "@mui/material/Grid";
import Footer from "./Footer";

const HomePage = () => {
  const dispatch = useDispatch();
  const locat = useLocation();

  const [internship, setInternship] = useState({
    name: "",
    location: "",
    category: "",
  });

  const [redirect, setRedirect] = useState(false);

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
  };

  const handleInternshipSearchSubmit = (e) => {
    sendInternshipData();
    e.preventDefault();
    setRedirect(true);
  };

  const { all_internships } = useFilterContext();

  const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type]);
    if (type == "colors") {
      unique = unique.flat();
    }

    return ["all", ...new Set(unique)];
  };

  const categories = getUniqueValues(all_internships, "category");

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
          <div
            style={{
              margin: "20px 0px 0px 0px",
              textAlign: "center",
            }}
          >
            <span>Need more search options?</span>
            <span>
              <a href="/internships">Advanced Search</a>
            </span>
          </div>
        </form>
      </div>
      {redirect ? <Redirect push to="/internships/" /> : null}

      <div className="title">
        <h5
          style={{
            padding: "100px",
            paddingBottom: "0px",
            letterSpacing: "2px",
          }}
        >
          POPULAR CATEGORIES
        </h5>
      </div>
      <Grid
        container
        spacing={4}
        style={{ padding: "100px", paddingTop: "50px" }}
      >
        {categories.map((c, index) => {
          return (
            <Grid item xs={12} sm={4} md={2}>
              <BasicCard title={c} key={index} />
            </Grid>
          );
        })}
      </Grid>
      <Footer />
    </div>
  );
};

export default HomePage;
