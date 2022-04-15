import React from "react";
import FeaturedInternships from "../components/FeaturedInternships";
// import { Filters, InternshipsList, Sort } from "../components";
import InternshipsList from "./InternshipsList";
import Sort from "../components/Sort";
const InternshipsPage = () => {
  return (
    <main>
      <div className="section-center products">
        {/* <Filters />
          <div>
            <Sort />
            <InternshipsList />
          </div> */}
        <InternshipsList />
        <FeaturedInternships />
      </div>
    </main>
  );
};

export default InternshipsPage;
