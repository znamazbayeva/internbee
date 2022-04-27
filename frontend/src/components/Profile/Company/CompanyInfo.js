import React, { useState, useReducer, useEffect } from "react";
import { getCompany } from "../../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Avatar, InputLabel } from "@mui/material";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import BadgeIcon from "@mui/icons-material/Badge";
import Identicon from "identicon.js";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from "../Profile.module.scss";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { Box } from "@mui/system";
import PlaceIcon from "@mui/icons-material/Place";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import EmailIcon from "@mui/icons-material/Email";
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
    top: "70%",
    left: "56%",
    transform: "translate(-50%, -100%)",
    width: 820,
    bgcolor: "white",
    color: "black",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
  };

  const { addToast } = useToasts();
  const state = useSelector((state) => state.auth);
  const token = state.token;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [company, setCompany] = useState(null);
  const [address, setAddress] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [company_name, setCompanyName] = useState(null);
  const [description, setDescription] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/v1/api/company/${state.user_id}/`)
      .then((res) => {
        setCompany(res.data);
        setAddress(res.data.address);
        setCompanyName(res.data.company_name);
        setCityName(res.data.cityName);
        setDescription(res.data.description);
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
      company_name,
      cityName,
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
        setCompanyName(res.data.company_name);
        setCityName(res.data.cityName);

        addToast("Saved Successfully", { appearance: "success" });
      })
      .catch((err) => {
        addToast(err.message, { appearance: "error" });
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
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{ fontFamily: "Arial" }}
          >
            Company Logo
          </Typography>

          <Link to="/post-internship/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              className={styles.post_job_button}
              sx={{ backgroundColor: "#663399" }}
            >
              + Post Internship
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
              <span style={{ marginRight: "30px" }}>
                <BadgeIcon style={{ color: "grey" }} />
                <strong>Company Name: </strong>
              </span>

              {company ? company.company_name : initialState.address}
            </Typography>
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              sx={{ marginLeft: 5 }}
            >
              <span style={{ marginRight: "30px" }}>
                <LocationCityIcon style={{ color: "grey" }} />

                <strong>Company Location:</strong>
              </span>
              {company ? company.cityName : initialState.address}
            </Typography>

            <Typography
              gutterBottom
              variant="h7"
              component="div"
              sx={{ marginLeft: 5, color: "grey" }}
            >
              <span style={{ marginRight: "30px" }}>
                <PlaceIcon style={{ color: "grey" }} />
                <strong>Company Address:</strong>
              </span>
              {company ? company.address : initialState.address}
            </Typography>
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              sx={{ marginLeft: 5, color: "grey" }}
            >
              <span style={{ marginRight: "30px" }}>
                <EmailIcon style={{ color: "grey" }} />
                <strong>Company Email:</strong>
              </span>
              {company ? company.user.email : initialState.email}
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
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <InputLabel>Company Name</InputLabel>
                      <input
                        label="Company"
                        value={company_name}
                        onChange={(e) => setCompanyName(e.target.value)}
                        style={{ width: "300px" }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel>Address</InputLabel>
                      <input
                        label="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        style={{ width: "300px" }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel>City Name</InputLabel>
                      <input
                        label="city"
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)}
                        style={{ width: "300px" }}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <InputLabel>Company Description Text</InputLabel>
                      <input
                        label="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{ width: "300px" }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel>Category</InputLabel>
                      <input label="city" style={{ width: "300px" }} />
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel>Website URL</InputLabel>
                      <input label="city" style={{ width: "300px" }} />
                    </Grid>
                  </Grid>
                  <div>
                    <Button
                      sx={{
                        backgroundColor: "#663399",
                        color: "#fcfaff",
                        float: "right",
                        marginRight: "67px",
                        marginTop: "30px",
                        "&:hover": {
                          backgroundColor: "#black",
                          color: "#3c52b2",
                        },
                      }}
                      onClick={handleFormSubmit}
                    >
                      Submit Changes
                    </Button>
                  </div>
                </form>
              </Box>
            </Modal>
          </div>
          {/* -------------MODAL END------------------ */}
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "block" }}>
            <Typography gutterBottom variant="h7" component="div">
              {company ? company.description : initialState.description}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
