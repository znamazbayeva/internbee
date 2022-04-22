import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ResumeForm from "./ResumeForm";

const ApplicationPage = () => {
  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            My Resume
          </Typography>
          <ResumeForm />
        </Paper>
      </Container>
    </>
  );
};

export default ApplicationPage;
