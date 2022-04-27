// import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import SideBar from "./SideBar";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import styles from "../Profile.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React, { useContext, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import BaseLayout from "../../Applications/BaseLayout";
import UpdateIcon from "@mui/icons-material/Update";
import { Link } from "react-router-dom";
import moment from "moment";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ArrowCircleRight } from "@mui/icons-material";

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

    first_name: "Web",
    last_name: "Dev",

    status: "10",
    created_at: new Date(),
    job: {
      id: 1,
      title: "Tech",
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
            <h3>Manage Internship Listings</h3>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="left">Type</StyledTableCell>
                  <StyledTableCell align="left">Tags</StyledTableCell>
                  <StyledTableCell align="left">
                    Total Candidates
                  </StyledTableCell>
                  <StyledTableCell align="left">Created at</StyledTableCell>
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
                        <Button
                          variant="text"
                          color="success"
                          size="small"
                          style={{ marginRight: "0.7rem" }}
                        >
                          <UpdateIcon />
                          Update
                        </Button>
                        <Button
                          variant="text"
                          color="error"
                          size="small"
                          style={{ marginRight: "0.7rem" }}
                        >
                          <CancelIcon />
                          Delete
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          style={{
                            marginRight: "0.7rem",
                            color: "#663399",
                            border: "#663399",
                          }}
                        >
                          <VisibilityIcon />
                          View
                        </Button>
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
