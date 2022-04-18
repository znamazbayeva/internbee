import React from "react";
import CompanyList from "./CompanyList";
import SearchReviews from "./SearchReviews";

const Reviews = () => {
  return (
    <div
      style={{
        width: "100%",
        margin: "150px",
        maxWidth: "fit-content",
      }}
    >
      <SearchReviews />
      <CompanyList />
    </div>
  );
};

export default Reviews;
