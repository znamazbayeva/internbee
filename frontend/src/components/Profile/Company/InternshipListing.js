import React from "react";
import SideBar from "./SideBar";
import { DataGrid } from "@mui/x-data-grid";
import styles from "../Profile.module.scss";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import { Link } from "react-router-dom";

const InternshipListing = () => {
  return (
    <>
      <SideBar />
      <div
        style={{ height: 400, width: "81%", marginLeft: "220px" }}
        className={styles.company_table}
      >
        <h3 style={{ padding: "1rem" }}>All Internship Listings</h3>
      </div>
    </>
  );
};

export default InternshipListing;
