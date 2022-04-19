import React from "react";
import CompanyList from "./CompanyList";
import SearchReviews from "./SearchReviews";

const Reviews = () => {
  return (
    <div
      style={{
        width: "100%",
        marginLeft: "150px",
        marginRight: "150px",
        marginTop: "50px",
        maxWidth: "fit-content",
      }}
    >
      <h3>Find a great place to work </h3>

      <SearchReviews />
      <CompanyList />
    </div>
  );
};

export default Reviews;
