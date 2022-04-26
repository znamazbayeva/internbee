import React from "react";
import Internship from "../components/Internship/Internship";
import SearchInternship from "../components/Internship/SearchInternship";
import styles from "../components/Internship/Internship.module.scss";
import Sort from "../components/Sort";
import { Typography } from "@mui/material";
const ListView = ({ internships }) => {
  let content;

  if (internships.length < 1) {
    content = (
      <Typography
        variant="h6"
        style={{ textTransform: "none", marginLeft: "1.2rem", height: "55vh" }}
      >
        Sorry, no internships matched your search...
      </Typography>
    );
  } else {
    content = internships.map((internship) => {
      return <Internship key={internship._id} internship={internship} />;
    });
  }
  return (
    <div
      className={styles.general}
      style={{ minHeight: "100vh", overflow: "hidden" }}
    >
      <div style={{ flex: "0 0 10em" }}>
        <SearchInternship />
      </div>
      <div style={{ flex: "0 0 55em", marginLeft: "30px" }}>
        <div
          style={{
            margin: "1rem",
            display: "flex",
            position: "sticky",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" style={{ marginTop: "-3rem" }}>
            All internships
          </Typography>
          <Sort />
        </div>

        {content}
      </div>
    </div>
  );
};

export default ListView;
