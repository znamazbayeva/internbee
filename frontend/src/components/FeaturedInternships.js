import React from "react";
import { useInternshipsContext } from "../context/internships_context";
import { Link } from "react-router-dom";
import Internship from "./Internship/Internship";
import FeaturedInternshipCard from "./FeaturedInternshipCard";

const FeaturedInternships = () => {
  const {
    internships_loading: loading,
    internships_error: error,
    featured_internships: internships,
  } = useInternshipsContext();

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <div className="title">
        <h6 style={{ textDecoration: "capitalize", letterSpacing: "2px" }}>
          RECOMMENDED INTERNSHIPS
        </h6>
        <div className="underline"></div>
      </div>
      <div className="section-center featured" style={{ display: "flex" }}>
        {internships.slice(0, 3).map((internship) => {
          return (
            <FeaturedInternshipCard
              key={internship._id}
              internship={internship}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedInternships;
