import React from "react";
// import { Filters, InternshipsList, Sort } from "../components";
import InternshipsList from "./InternshipsList";
const InternshipsPage = () => {
  return (
    <main>
      <div className="section-center products">
        <InternshipsList />
        {/* <FeaturedInternships /> */}
      </div>
    </main>
  );
};

export default InternshipsPage;
