import { Avatar, Button, MenuItem, Select } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Profile.module.scss";
import { useToasts } from "react-toast-notifications";

function StudenInfo2({ student }) {
  const { addToast } = useToasts();
  const state = useSelector((state) => state.auth);
  const token = state.token;
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [major, setMajor] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");
  const [publicProfile, setPublicProfile] = useState(false);

  const handleFormSubmit = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    };
    const body = JSON.stringify({
      email,
      firstName,
      lastName,
      gender,
      major,
      universityName,
      about,
    });

    axios
      .put(
        `http://127.0.0.1:8000/v1/api/student/edit/${student.sid}/`,
        body,
        config
      )
      .then((res) => {
        addToast("Saved Successfully", { appearance: "success" });
      })
      .catch((err) => {
        addToast(err.message, { appearance: "error" });
        // console.log(err.response.data);
      });
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/v1/api/student/${state.user_id}/`)
      .then((res) => {
        setEmail(res.data.user.email);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setGender(res.data.gender);
        setMajor(res.data.major);
        setUniversityName(res.data.universityName);
        // setImage(res.data.img);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fileSelectedHandler = (e) => {
    setImage(e.target.value[0]);
    console.log(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div
      style={{
        marginRight: "2.5rem",
      }}
      className={styles.container}
    >
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          sx={{ fontFamily: "Segoe UI", marginBottom: "2rem" }}
        >
          Profile Info
        </Typography>

        <React.Fragment>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar
                size="medium"
                sx={{
                  bgcolor: "#663399",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: 100,
                  height: 100,
                }}
              >
                OP
                <input
                  type="file"
                  onChange={(e) => fileSelectedHandler(e)}
                  style={{ display: "none" }}
                />
              </Avatar>
              <div
                sx={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Button style={{ color: "#663399" }}>Upload Image</Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel
                htmlFor="my-input"
                sx={{ fontWeight: "600", fontFamily: "Segoe UI" }}
              >
                First Name
              </InputLabel>
              <TextField
                required
                id="firstName"
                name="firstName"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel
                sx={{ fontWeight: "600", fontFamily: "Segoe UI" }}
                htmlFor="my-input"
              >
                University
              </InputLabel>
              <TextField
                required
                id="university"
                name="university"
                fullWidth
                variant="standard"
                value={universityName}
                onChange={(e) => setUniversityName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel
                sx={{ fontWeight: "600", fontFamily: "Segoe UI" }}
                htmlFor="my-input"
              >
                Last Name
              </InputLabel>
              <TextField
                required
                id="lastName"
                name="lastName"
                fullWidth
                variant="standard"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel
                sx={{ fontWeight: "600", fontFamily: "Segoe UI" }}
                htmlFor="my-input"
              >
                Major
              </InputLabel>
              <TextField
                id="major"
                name="major"
                fullWidth
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel
                sx={{ fontWeight: "600", fontFamily: "Segoe UI" }}
                htmlFor="my-input"
              >
                Gender
              </InputLabel>
              <Select
                sx={{ height: "35px" }}
                select
                name="gender"
                fullWidth
                size="small"
                label="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem key="1" value="female">
                  Female
                </MenuItem>
                <MenuItem key="2" value="male">
                  Male
                </MenuItem>
                <MenuItem key="3" value="none">
                  Prefer not to specify
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel
                sx={{ fontWeight: "600", fontFamily: "Segoe UI" }}
                htmlFor="my-input"
              >
                About me
              </InputLabel>
              <TextField id="about" name="about" fullWidth variant="standard" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputLabel htmlFor="my-input">Email Address</InputLabel>
              <TextField
                disabled
                required
                id="email"
                name="email"
                fullWidth
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={publicProfile}
                    color="secondary"
                    name="saveAddress"
                    value="yes"
                    onChange={() => setPublicProfile(!publicProfile)}
                  />
                }
                label="Show information publicly"
              />
            </Grid>
          </Grid>
          <div style={{ overflow: "hidden" }}>
            <button
              style={{ float: "right" }}
              className={styles.savechanges}
              onClick={handleFormSubmit}
            >
              Save Changes
            </button>
          </div>
        </React.Fragment>
      </Container>
    </div>
  );
}

export default StudenInfo2;
