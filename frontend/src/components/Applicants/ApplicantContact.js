import React from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import MessageIcon from "@mui/icons-material/Message";
import PhoneIcon from "@mui/icons-material/Phone";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  width: 30,
  borderRadius: 1,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 1,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

function ApplicantContact() {
  return (
    <Card sx={{ maxWidth: 300, marginLeft: 5, marginTop: 5 }}>
      <CardContent>
        <div style={{ display: "flex" }}>
          <Typography gutterBottom variant="h5" component="div">
            Contact
          </Typography>
        </div>

        <div style={{ display: "flex", margin: "2px" }}>
          <EmailIcon />
          <div style={{ display: "block", marginLeft: "10px" }}>
            <Typography variant="body2" color="text.secondary">
              Email
            </Typography>
            <Typography variant="body2" color="text.secondary">
              miras.askhat@gmail.com
            </Typography>
          </div>
        </div>
        <br />
        <div style={{ display: "flex" }}>
          <PhoneIcon />
          <div style={{ display: "block", margin: "2px", marginLeft: "10px" }}>
            <Typography variant="body2" color="text.secondary">
              Phone
            </Typography>
            <Typography variant="body2" color="text.secondary">
              +7 777 405 60 39
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ApplicantContact;
