import CompanySidebar from "./CompanySidebar";
import React, { useEffect, useState } from "react";
import { getCompany } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CompanyInfo from "./CompanyInfo";
import MatxSidenav from "./DataTable";
import styles from "./Profile.module.scss";
import DataTable from "./DataTable";
import SideBar from "./SideBar";
function CompanyDashboard() {
  const state = useSelector((state) => state.auth);
  const [company, setCompany] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/v1/api/company/${state.user_id}/`)
      .then((res) => {
        setCompany(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);
  return (
    <div className="container mt-5" style={{ alignItems: "start" }}>
      {/* <CompanySidebar company={company} /> */}

      <SideBar />
      <CompanyInfo company={company} />
    </div>
  );
}

export default CompanyDashboard;
