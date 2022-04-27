import React, { useState, useReducer, useEffect } from "react";
import { getCompany } from "../../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Avatar } from "@mui/material";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Identicon from "identicon.js";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from "../Profile.module.scss";
import CompanyModal from "./CompanyModal";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { Box } from "@mui/system";

var data = new Identicon("d3b07384d113edec49eaa6238ad5ff00", 420).toString();

const initialState = {
  description: "Company Description",
  address: "Company Address",
  name: "Company Name",
  image: `data:image/png;base64,${data}`,
  email: "email@email.com",
};

function CompanyInfo() {
  const styleBox = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -100%)",
    width: 800,
    bgcolor: "white",
    color: "black",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
  };

  const { addToast } = useToasts();
  const state = useSelector((state) => state.auth);
  console.log(state);
  const token = state.token;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [company, setCompany] = useState(null);
  const [address, setAddress] = useState(null);
  const [description, setDescription] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/v1/api/company/${state.user_id}/`)
      .then((res) => {
        setCompany(res.data);
        setAddress(res.data.address);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);

  const handleFormSubmit = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    };
    const body = JSON.stringify({
      address,
      description,
    });

    axios
      .put(
        `http://127.0.0.1:8000/v1/api/company/edit/${company.cid}/`,
        body,
        config
      )
      .then((res) => {
        setCompany(res.data);
        setAddress(res.data.address);
        setDescription(res.data.description);
        addToast("Saved Successfully", { appearance: "success" });
      })
      .catch((err) => {
        addToast(err.message, { appearance: "error" });
        // console.log(err.response.data);
      });
  };

  return (
    <div style={{ display: "block", width: "100%" }}>
      <div
        className={styles.container}
        style={{
          marginRight: "2.5rem",
          justifyContent: "space-between",
          display: "block",
        }}
      >
        <div className={styles.company_header}>
          <Typography gutterBottom variant="h5" component="div">
            {company ? company.user.email : initialState.email}
          </Typography>
          {/* <input type="text" /> */}

          <Link to="/post-internship/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              className={styles.post_job_button}
              sx={{ backgroundColor: "#663399" }}
            >
              + Post Job
            </Button>
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            size="medium"
            sx={{
              bgcolor: "#9DAAD3",

              width: 100,
              height: 100,
            }}
          >
            C
            <input type="file" style={{ display: "none" }} />
          </Avatar>

          <div style={{ display: "block" }}>
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              sx={{ marginLeft: 5 }}
            >
              {company ? company.description : initialState.description}
            </Typography>

            <Typography
              gutterBottom
              variant="h7"
              component="div"
              sx={{ marginLeft: 5, color: "blue" }}
            >
              {company ? company.address : initialState.address}
            </Typography>
          </div>
          <div></div>
        </div>
      </div>
      <div
        className={styles.container}
        style={{
          marginRight: "2.5rem",
          justifyContent: "space-between",
          display: "block",
        }}
      >
        <div className={styles.company_header}>
          <Typography gutterBottom variant="h5" component="div">
            Company Profile Info
          </Typography>

          {/* --------------MODAL-------------- */}

          <div>
            <Button
              onClick={handleOpen}
              sx={{
                backgroundColor: "#663399",
                color: "#fcfaff",
                width: "100%",
              }}
            >
              Edit
            </Button>
            <Modal open={open} onClose={handleClose}>
              <Box sx={styleBox}>
                <form onSubmit={handleFormSubmit}>
                  <Grid container>
                    <Grid item xs={6}>
                      <label>Address</label>
                      <input
                        label="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <div>
                        <Button onClick={handleFormSubmit}>Submit</Button>
                      </div>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Modal>
          </div>
          {/* -------------MODAL END------------------ */}
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "block" }}>
            <Typography gutterBottom variant="h7" component="div">
              Address: {company ? company.address : initialState.address}
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
              Description:{" "}
              {company ? company.description : initialState.description}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
