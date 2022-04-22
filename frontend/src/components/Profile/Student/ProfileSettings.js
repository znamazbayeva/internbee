import styles from "../Profile.module.scss";
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import SideBar from "./SideBar";

function ProfileSettings() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      <div style={{ marginRight: "3rem" }}>
        <SideBar />
      </div>
      <div
        style={{
          marginRight: "2.5rem",
          height: "400px",
        }}
        className={styles.container}
      >
        <Container component="main" maxWidth="sm">
          <Typography component="h1" variant="h4" align="center">
            Edit Profile
          </Typography>
          <br />
          <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <TextField
                  required
                  id="username"
                  name="username"
                  label=""
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <TextField
                  required
                  id="email"
                  name="email"
                  label=""
                  fullWidth
                  // autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputLabel htmlFor="my-input">Phone number</InputLabel>
                <TextField
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  label=""
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
            </Grid>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "15px",
              }}
            >
              <button className={styles.savechanges}>Save Changes</button>
            </div>
          </React.Fragment>
        </Container>
      </div>
      <div
        style={{
          marginRight: "2.5rem",
          marginLeft: "0px",
          height: "400px",
        }}
        className={styles.container}
      >
        <Container
          component="main"
          maxWidth="sm"
          sx={{ mb: 4, marginRight: "2rem" }}
        >
          <Typography component="h1" variant="h4" align="center">
            Change Password
          </Typography>
          <br />
          <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <InputLabel htmlFor="my-input">Current Password</InputLabel>
                <TextField
                  required
                  id="username"
                  name="username"
                  label=""
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputLabel htmlFor="my-input">New Password</InputLabel>
                <TextField
                  required
                  id="email"
                  name="email"
                  label=""
                  fullWidth
                  // autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputLabel htmlFor="my-input">Confirm New Password</InputLabel>
                <TextField
                  required
                  id="phoneNumber"
                  name=""
                  label=""
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
            </Grid>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "15px",
              }}
            >
              <button className={styles.savechanges}>Save Changes</button>
            </div>
          </React.Fragment>
        </Container>
      </div>
    </div>
  );
}

export default ProfileSettings;
