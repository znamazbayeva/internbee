import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ResumeForm from "./ResumeForm";
import { Button } from "@progress/kendo-react-buttons";
import { useRef } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import ResumeTable from "./ResumeTable";

const ApplicationPage = () => {
  const pdfExportComponent = useRef(null);
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
    console.log("clicked");
  };
  return (
    <>
      <CssBaseline />
      <PDFExport ref={pdfExportComponent} paperSize="A4">
        <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              My Resume
            </Typography>

            <ResumeForm />

            <Button primary={true} onClick={handleExportWithComponent}>
              Primary Button
            </Button>
          </Paper>
        </Container>
      </PDFExport>
    </>
  );
};

export default ApplicationPage;
