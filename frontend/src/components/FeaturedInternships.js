import React from "react";
import { useInternshipsContext } from "../context/internships_context";
import { Link } from "react-router-dom";
import Internship from "./Internship/Internship";

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
        <h2>featured internships</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {internships.slice(0, 3).map((internship) => {
          return <Internship internship={internship} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedInternships;
