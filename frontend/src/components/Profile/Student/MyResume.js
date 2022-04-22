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
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import SideBar from "./SideBar";

function MyResume() {
  return (
    <div
      className={styles.containter}
      style={{ display: "flex", height: "100vh" }}
    >
      <div style={{ marginRight: "3rem" }}>
        <SideBar />
      </div>
      <div
        style={{
          marginRight: "2.5rem",
        }}
        className={styles.container}
      >
        <CssBaseline />
        <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
          <Typography component="h1" variant="h4" align="center">
            My Resume
          </Typography>

          <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <InputLabel htmlFor="my-input">Full Name</InputLabel>
                <TextField
                  required
                  id="fullName"
                  name="fullName"
                  label="Full name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="email"
                  fullWidth
                  // autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel htmlFor="my-input">Professional Title</InputLabel>
                <TextField
                  required
                  id="professionalTitle"
                  name="professionalTitle"
                  label=""
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel htmlFor="my-input">Education</InputLabel>
                <TextField
                  id="education"
                  name="education"
                  label=""
                  fullWidth
                  // autoComplete="shipping address-line2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel htmlFor="my-input">Experience</InputLabel>
                <TextField
                  required
                  id="experience"
                  name="experience"
                  label="experience"
                  fullWidth
                  // autoComplete="shipping address-level2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel htmlFor="my-input">Skills</InputLabel>
                <TextField
                  id="skills"
                  name="skills"
                  label=""
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputLabel htmlFor="my-input">Additional Comments</InputLabel>
                <TextField
                  required
                  id="additionalComments"
                  name="additionalComments"
                  label=""
                  fullWidth
                  // autoComplete="shipping postal-code"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      name="saveAddress"
                      value="yes"
                    />
                  }
                  label="Show information publicly"
                />
              </Grid>
            </Grid>
          </React.Fragment>
        </Container>
      </div>
    </div>
  );
}

export default MyResume;
