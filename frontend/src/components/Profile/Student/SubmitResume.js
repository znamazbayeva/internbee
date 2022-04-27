import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import ResumeTable from "../../Applications/ResumeTable";
import styles from "../Profile.module.scss";
import { data } from "../student_data";
import SideBar from "./SideBar";
import Button from "@mui/material/Button";
import ResumeForm from "../../Applications/ResumeForm";
import { Card } from "@mui/material";

function SubmitResume() {
  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <div style={{ marginRight: "3rem" }}>
        <SideBar data={data} />
      </div>
      <div className={styles.container_plain}>
        <div
          style={{
            display: "block",
            marginBottom: "2rem",
          }}
        >
          <h3>My Resumes</h3>
        </div>
        <div
          style={{
            backgroundColor: "#B8C9E0",
            display: "inline-block",
            padding: "1.2rem",
            borderRadius: "5px",
            marginBottom: "2rem",
            color: "#663399",
          }}
        >
          You can keep track of your resumes, update or delete them below
        </div>
        <Card style={{ padding: "1.5rem" }}>
          <ResumeForm />
        </Card>
      </div>
    </div>
  );
}

export default SubmitResume;
