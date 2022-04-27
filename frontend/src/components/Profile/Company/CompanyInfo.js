import React, { useState, useReducer, useEffect } from "react";
import { getCompany } from "../../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Avatar } from "@mui/material";
import Identicon from "identicon.js";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from "../Profile.module.scss";
import CompanyModal from "./CompanyModal";
import { Link } from "react-router-dom";
var data = new Identicon("d3b07384d113edec49eaa6238ad5ff00", 420).toString();

const initialState = {
  description: "Company Description",
  address: "Company Address",
  name: "Company Name",
  image: `data:image/png;base64,${data}`,
  email: "email@email.com",
};

function CompanyInfo() {
  const state = useSelector((state) => state.auth);
  const [company, setCompany] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/v1/api/company/${state.user_id}/`)
      .then((res) => {
        setCompany(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);

  const handleEdit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ display: "block", width: "100%" }}>
      <div
        className={styles.container}
        style={{
          marginRight: "2.5rem",
          justifyContent: "space-between",
          display: "block",
        }}
      >
        <div className={styles.company_header}>
          <Typography gutterBottom variant="h5" component="div">
            {company ? company.user.email : initialState.email}
          </Typography>
          {/* <input type="text" /> */}

          <Link to='/post-internship/'>
            <Button
              variant="contained"
              className={styles.post_job_button}
              sx={{ backgroundColor: "#663399" }}
            >
              + Post Job
            </Button>
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt="profile image"
            src={initialState.image}
            style={{ marginBottom: "1rem", width: "120px", height: "120px" }}
          />

          <div style={{ display: "block" }}>
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              sx={{ marginLeft: 5 }}
            >
              {company ? company.description : initialState.description}
            </Typography>

            <Typography
              gutterBottom
              variant="h7"
              component="div"
              sx={{ marginLeft: 5, color: "blue" }}
            >
              {company ? company.address : initialState.address}
            </Typography>
          </div>
          <div></div>
        </div>
      </div>
      <div
        className={styles.container}
        style={{
          marginRight: "2.5rem",
          justifyContent: "space-between",
          display: "block",
        }}
      >
        <div className={styles.company_header}>
          <Typography gutterBottom variant="h5" component="div">
            Company Profile
          </Typography>

          {/* <Button
            variant="contained"
            className={styles.post_job_button}
            sx={{ backgroundColor: "#663399" }}
            onClick={handleEdit}
          >
            Edit
          </Button> */}
          <CompanyModal />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "block" }}>
            <Typography gutterBottom variant="h7" component="div">
              desc
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
