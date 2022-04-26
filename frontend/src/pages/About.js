import { Typography } from "@mui/material";
import React, { Component } from "react";
import image from "../assets/img/internship-illustration.jpg";
import ContactForm from "./ContactForm";

const About = () => {
  return (
    <div
      style={{
        margin: "auto",
        width: "50%",
        padding: "10px",
      }}
    >
      <Typography
        variant="h4"
        style={{
          marginTop: "3rem",
          color: "#222222",
          fontFamily: "Segoe UI",
        }}
      >
        About InternBee
        <hr />
      </Typography>
      <div style={{ display: "flex" }}>
        <Typography
          variant="h7"
          style={{ fontFamily: "Roboto", marginRight: "2rem" }}
        >
          The internship programs and development of competence in certain
          fields while studying in the university are the must-have experiences
          to succeed in the industry. Studies have shown a positive correlation
          between internship experience and success in the industry.
          <br />
          <br />
          The purpose of our project is to develop such an online internship
          platform for student-employee interaction to ease the way students
          choose and apply for internships and for companies to find students
          with relevant skills.
        </Typography>
        <img
          src={image}
          alt="internship illustration"
          style={{ borderRadius: "5px", width: "300px", height: "300px" }}
        />
      </div>
      <ContactForm />
    </div>
  );
};

export default About;
