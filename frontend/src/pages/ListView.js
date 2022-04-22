import React from "react";
import Internship from "../components/Internship/Internship";
import SearchInternship from "../components/Internship/SearchInternship";
import styles from "../components/Internship/Internship.module.scss";
import Sort from "../components/Sort";
const ListView = ({ internships }) => {
  let content;

  if (internships.length < 1) {
    content = (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no internships matched your search...
      </h5>
    );
  } else {
    content = internships.map((internship) => {
      return <Internship key={internship._id} internship={internship} />;
    });
  }
  return (
    <div className={styles.general}>
      {/* <div style={{ flexGrow: 1.2 }}> */}
      <div>
        <SearchInternship style={{ marginTop: "30px" }} />
      </div>

      {/* <div style={{ flexGrow: 2 }}> */}
      <div>
        <div
          style={{
            margin: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {
            // make sort by component
          }
          <h3>All internships</h3>
          <Sort />
        </div>

        {content}
      </div>
    </div>
  );
};

export default ListView;
