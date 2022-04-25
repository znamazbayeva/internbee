// import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
// import { DataGrid } from "@mui/x-data-grid";
// import * as React from "react";
// import { Link } from "react-router-dom";
import SideBar from "../Profile/Company/SideBar";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { styled } from "@mui/material/styles";
import styles from "../Profile/Profile.module.scss";
import React, { useContext, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import BaseLayout from "../Applications/BaseLayout";
import { Link } from "react-router-dom";
import moment from "moment";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const applicants_arr = [
  {
    id: 0,

    first_name: "John",
    last_name: "Doe",

    status: "pending",
    created_at: new Date(),
    job: {
      id: 1,
      title: "Web Dev",
      location: "London",
    },
  },
];

const AllApplicants = () => {
  const [applicants, setApplicants] = useState(applicants_arr);
  const [loading, setLoading] = useState(false);
  // const authContext = useContext(AuthContext);
  // const { token, isAuthenticated } = authContext.state;

  // useEffect(() => {
  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` },
  //   };

  //   const fetchApplicants = async () => {
  //     try {
  //       const res = await axios.get("/employer/applicants/", config);
  //       setApplicants(res.data);
  //       setLoading(false);
  //     } catch (e) {
  //       setLoading(false);
  //       console.log(e);
  //     }
  //   };

  //   fetchApplicants().then();
  // }, []);

  const getFullname = (user) => `${user.first_name} ${user.last_name}`;

  const onUpdateApplicant = () => {};
  // const onUpdateApplicant = (applicant, type) => (event) => {

  // }

  return (
    <BaseLayout title={"Applicants"}>
      <SideBar />
      {/* {loading && (
        <div className="col-lg-9 col-md-9 col-xs-12">
          <div className="row">
            <div className="col-md-6 mx-auto">
              LOADER
              <Loader
                                        type="Grid"
                                        color="#00BFFF"
                                        // style={{textAlign: 'center'}}
                                        height={100}
                                        width={100}
                                    /> 
            </div>
          </div>
        </div>
      )} */}

      {/* {!loading && ( */}
      <div
        className={styles.containter}
        style={{ display: "flex", height: "100vh" }}
      >
        <div style={{ marginRight: "3rem" }}>
          <SideBar />
        </div>
        <div className={styles.container_plain}>
          <div
            style={{
              display: "block",
              marginBottom: "2rem",
            }}
          >
            <h3>Manage Applicants</h3>
          </div>
          {/* <div
            style={{
              backgroundColor: "#B8C9E0",
              display: "inline-block",
              padding: "1.2rem",
              borderRadius: "5px",
              marginBottom: "2rem",
              color: "#663399",
            }}
          >
            You can keep track of your resumes, update or delete them below
          </div> */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="left">
                    Internship Title
                  </StyledTableCell>
                  <StyledTableCell align="left">Location</StyledTableCell>
                  <StyledTableCell align="left">Status</StyledTableCell>
                  <StyledTableCell align="left">Applied at</StyledTableCell>
                  <StyledTableCell align="left">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {applicants.map((applicant) => {
                  return (
                    <StyledTableRow key={applicant.id}>
                      <StyledTableCell component="th" scope="row">
                        <Link to={`/jobs/${applicant.job.id}`}>
                          {/* {getFullname(applicant.applied_user)} */}
                          {`${applicant.first_name} ${applicant.last_name}`}
                        </Link>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Link to={`/jobs/${applicant.job.id}`}>
                          {applicant.job.title}
                        </Link>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {applicant.job.location}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {applicant.status}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {moment(applicant.created_at).format(
                          "DD-MM-YYYY hh:mm:ss A"
                        )}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {applicant.status === "pending" && (
                          <>
                            <Button
                              variant="contained"
                              color="success"
                              size="small"
                              style={{ marginRight: "0.7rem" }}
                            >
                              <CheckBoxIcon />
                              Accept
                            </Button>
                            <Button
                              variant="contained"
                              color="error"
                              size="small"
                            >
                              <CancelIcon />
                              Reject
                            </Button>
                            {/* <button
                              // onClick={onUpdateApplicant(applicant, "accept")}
                              className="btn btn-primary btn-xs mr-2"
                            >
                               <i className="fa fa-check" aria-hidden="true" /> 
                              <CheckBoxIcon />
                            </button> 
                            <button
                              // onClick={onUpdateApplicant(applicant, "reject")}
                              className="btn btn-danger btn-xs"
                            >
                               <i className="fa fa-window-close" aria-hidden="true" />
                              <CancelIcon />
                            </button> */}
                          </>
                        )}
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      {/* )} */}
    </BaseLayout>
  );
};

export default AllApplicants;
