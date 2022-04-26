import { Grid } from "@mui/material";
import React from "react";
import { useCompanyFilterContext } from "../../context/companies_filter_context";
import CompanyCard from "./CompanyCard";

const CompanyList = () => {
  const { filtered_companies: companies } = useCompanyFilterContext();

  console.log(companies);
  return (
    <>
      <h3>Popular Companies</h3>
      <Grid container spacing={4}>
        {companies.map((c, index) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <CompanyCard company={c} key={index} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default CompanyList;
