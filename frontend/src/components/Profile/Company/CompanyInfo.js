import React, { useState, useReducer } from "react";
import { Avatar } from "@mui/material";
import Identicon from "identicon.js";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from "../Profile.module.scss";
import reducer from "../../../reducers/company_reducer";
import CompanyModal from "./CompanyModal";
var data = new Identicon("d3b07384d113edec49eaa6238ad5ff00", 420).toString();

const initialState = {
  description: "Company Description",
  address: "Company Address",
  name: "Company Name",
  image: `data:image/png;base64,${data}`,
};

function CompanyInfo({ company }) {
  const [state, dispatch] = useReducer(reducer, initialState);

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
            {initialState.name}
          </Typography>
          {/* <input type="text" /> */}

          <Button
            variant="contained"
            className={styles.post_job_button}
            sx={{ backgroundColor: "#663399" }}
          >
            + Post Job
          </Button>
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
              {initialState.description}
            </Typography>

            <Typography
              gutterBottom
              variant="h7"
              component="div"
              sx={{ marginLeft: 5, color: "blue" }}
            >
              {initialState.address}
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
