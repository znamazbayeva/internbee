import React, { useEffect, useState } from "react";
import { getCompany } from "../../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CompanyInfo from "./CompanyInfo";
import SideBar from "./SideBar";
import { useCompaniesContext } from "../../../context/companies_context";
import { showCompany } from "../../../actions/company";

function CompanyDashboard() {
  const state = useSelector((state) => state.auth);

  const [company, setCompany] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/v1/api/company/${state.user_id}/`)
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/v1/api/company/${state.user_id}`)
      .then((response) => {
        // console.log(response.data);
        dispatch(showCompany(response.data));
        setCompany(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  }, [dispatch]);

  return (
    <div className="container mt-5" style={{ alignItems: "start" }}>
      <SideBar />
      <CompanyInfo company={company} />
    </div>
  );
}

export default CompanyDashboard;
