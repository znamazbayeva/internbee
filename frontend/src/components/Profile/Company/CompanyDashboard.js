import React from "react";
import CompanyInfo from "./CompanyInfo";
import SideBar from "./SideBar";

function CompanyDashboard() {
  return (
    <div
      className="container mt-5"
      style={{ alignItems: "start", height: "100vh" }}
    >
      <SideBar />
      <CompanyInfo />
    </div>
  );
}

export default CompanyDashboard;
