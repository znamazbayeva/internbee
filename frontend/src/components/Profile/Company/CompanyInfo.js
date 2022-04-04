import React from "react";
import styles from "../Profile.module.scss";
import { Avatar } from "@mui/material";
import Identicon from "identicon.js";
import { Button } from "@mui/material";
var data = new Identicon("d3b07384d113edec49eaa6238ad5ff00", 420).toString();

function CompanyInfo({ company }) {
  return (
    <div
      className={styles.container}
      style={{
        marginRight: "2.5rem",
        justifyContent: "space-between",
        display: "block",
      }}
    >
      <div className={styles.company_header}>
        Company
        <Button variant="contained" className={styles.post_job_button}>
          + Post Job
        </Button>
      </div>

      <div>
        <Avatar
          alt="profile image"
          src={`data:image/png;base64,${data}`}
          style={{ marginBottom: "1rem", width: "120px", height: "120px" }}
        />
      </div>
    </div>
  );
}

export default CompanyInfo;
