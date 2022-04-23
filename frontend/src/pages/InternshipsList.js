import React from "react";
import { useFilterContext } from "../context/filter_context";
import ListView from "./ListView";

const InternshipsList = () => {
  const { filtered_internships: internships } = useFilterContext();
  //   const { internships } = useInternshipsContext();

  return <ListView internships={internships} />;
};

export default InternshipsList;
