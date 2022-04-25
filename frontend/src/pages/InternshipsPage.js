import React from "react";
import { useFilterContext } from "../context/filter_context";
import ListView from "./ListView";

const InternshipsPage = () => {
  const { filtered_internships: internships } = useFilterContext();
  return (
    <main>
      <ListView internships={internships} />
    </main>
  );
};

export default InternshipsPage;
