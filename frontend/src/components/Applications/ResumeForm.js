import { Button, Card } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import * as React from "react";

const Input = styled("input")({
  display: "none",
});

const UploadButton = ({ title }) => {
  return (
    <label htmlFor="contained-button-file">
      <Input accept="image/*" id="contained-button-file" multiple type="file" />
      <Button
        variant="contained"
        color="secondary"
        component="span"
        size="small"
      >
        {title}
      </Button>
    </label>
  );
};

export default function ResumeForm() {
  return (
    // <Card style={{ padding: "1.5rem" }}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <label>Full name</label>
        <TextField required id="fullName" name="fullName" label="" fullWidth />
      </Grid>

      <Grid item xs={12} sm={6}>
        <label>Email address</label>
        <TextField required id="email" name="email" label="" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <label htmlFor="title">Your Professional Title</label>
        <TextField
          required
          id="title"
          name="title"
          label="e.g. Project Manager"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <label htmlFor="location">Location</label>
        <TextField id="location" name="location" label="" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <label htmlFor="education">Education</label>
        <TextField
          required
          id="education"
          name="education"
          label=""
          fullWidth
          InputProps={{
            startAdornment: <UploadButton title="Upload Transcript" />,
          }}
        ></TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <label htmlFor="experience">Experience</label>
        <TextField id="experience" name="experience" label="" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <label htmlFor="links">Links</label>
        <TextField
          required
          id="links"
          name="links"
          label="Relevant Links"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <label htmlFor="skills">Skills</label>
        <TextField required id="skills" name="skills" label="" fullWidth />
      </Grid>
      <Grid item xs={12} sm={12}>
        <label htmlFor="info">Additional Information & Comments</label>
        <TextField
          required
          id="info"
          name="info"
          label=""
          fullWidth
          InputProps={{
            startAdornment: <UploadButton title="Upload Files" />,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox color="secondary" name="saveAddress" value="yes" />
          }
          label="Make information visible to employees"
        />
      </Grid>
    </Grid>
    // </Card>
  );
}
