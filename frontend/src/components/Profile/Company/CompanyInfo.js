import React from "react";
import styles from "../Profile.module.scss";
import { Avatar } from "@mui/material";
import Identicon from "identicon.js";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

var data = new Identicon("d3b07384d113edec49eaa6238ad5ff00", 420).toString();

function CompanyInfo({ company }) {
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
            InternBee
          </Typography>

          <Button
            variant="contained"
            className={styles.post_job_button}
            sx={{ backgroundColor: "blueviolet" }}
          >
            + Post Job
          </Button>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt="profile image"
            src={`data:image/png;base64,${data}`}
            style={{ marginBottom: "1rem", width: "120px", height: "120px" }}
          />
          <div style={{ display: "block" }}>
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              sx={{ marginLeft: 5 }}
            >
              Hiring Company based in Kazakhstan
            </Typography>
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              sx={{ marginLeft: 5, color: "blue" }}
            >
              https://internbee.com
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

          <Button
            variant="contained"
            className={styles.post_job_button}
            sx={{ backgroundColor: "blueviolet" }}
          >
            Edit
          </Button>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "block" }}>
            <Typography gutterBottom variant="h7" component="div">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
