import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import ResumeTable from "../../Applications/ResumeTable";
import styles from "../Profile.module.scss";
import { data } from "../student_data";
import SideBar from "./SideBar";
import Button from "@mui/material/Button";

function MyResume() {
  return (
    <div
      className={styles.containter}
      style={{ display: "flex", height: "100vh" }}
    >
      <CssBaseline />
      <div style={{ marginRight: "3rem" }}>
        <SideBar data={data} />
      </div>
      <div className={styles.container_plain}>
        {/* <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
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
         </Container>  */}
        <div
          style={{
            display: "block",
            marginBottom: "2rem",
          }}
        >
          <h3>My Resumes</h3>
        </div>
        <div
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
        </div>
        <ResumeTable />
        <Button
          variant="contained"
          color="secondary"
          style={{ marginTop: "2rem" }}
        >
          Add Resume
        </Button>
      </div>
    </div>
  );
}

export default MyResume;
