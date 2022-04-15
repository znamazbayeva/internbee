import React from "react";
import TextField from "@mui/material/TextField";
const Reviews = () => {
  return (
    <div>
      <h3 className="title">Search Company Reviews & Ratings</h3>
      <h7>Read what employees are saying about companies.</h7>
      <div>
        <input
          style={{ width: "300px" }}
          type="text"
          placeholder="Search by company or job position"
        />
      </div>
    </div>
  );
};

export default Reviews;
