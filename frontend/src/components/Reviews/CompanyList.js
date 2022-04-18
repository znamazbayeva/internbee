import React, { useEffect, useState } from "react";
import axios from "axios";
import CompanyCard from "./CompanyCard";
import { Box, Paper, Grid } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
// import styles from "./Company.css";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   outerContainer: {
//     width: "100%",
//     margin: "150px",
//     maxWidth: "fit-content",
//   },
// });

const CompanyList = () => {
  // const classes = useStyles();
  const [companies, setCompanies] = useState([]);
  const fetchCompanies = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/v1/api/companys/"
      );
      const companies = response.data;
      setCompanies(companies);
    } catch (error) {
      console.log("BIG FAT ERROR");
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

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
