import React from "react";
import styles from "../Profile/Profile.css";
import SideBar from "../Profile/Company/SideBar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import MessageIcon from "@mui/icons-material/Message";
import ApplicantContact from "./ApplicantContact";
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

function Applicant() {
  return (
    <>
      <SideBar />
      <div
        style={{ height: 400, width: "30%", marginLeft: "220px" }}
        className={styles.company_table}
      >
        <Card sx={{ maxWidth: 300, marginLeft: 5, marginTop: 5 }}>
          <CardContent>
            <div style={{ display: "flex" }}>
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/200"
                alt="green iguana"
                sx={{ marginRight: 4 }}
              />
              <Typography gutterBottom variant="h5" component="div">
                Miras Askhat
                <Typography variant="body2" color="text.secondary">
                  Product Manager
                </Typography>
              </Typography>
            </div>
            <br />
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              sx={{
                backgroundColor: "#E8E8E8",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              Applied Internships
              <hr
                style={{
                  color: "#663399",
                  backgroundColor: "#663399",
                  height: 2,
                }}
              />
              <Typography variant="body2" color="text.secondary">
                Product Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Marketing
              </Typography>
            </Typography>
          </CardContent>
          <div
            style={{
              backgroundColor: "#E8E8E8",
              padding: "5px",
              borderRadius: "5px",
              marginLeft: "14px",
              marginRight: "14px",
            }}
          >
            <Typography
              variant="body2"
              color="black"
              sx={{
                marginBottom: 1,
              }}
            >
              Stage
            </Typography>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginRight: "15px",
              }}
            >
              <BorderLinearProgress variant="determinate" value={40} />
              <BorderLinearProgress variant="determinate" value={40} />
              <BorderLinearProgress variant="determinate" value={40} />
              <BorderLinearProgress variant="determinate" value={40} />
              <BorderLinearProgress variant="determinate" value={1} />
            </div>
          </div>
          <br />
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small" variant="outlined">
              Schedule Interview
            </Button>
            <Button sx={{ marginLeft: 1 }} size="small" variant="outlined">
              <MessageIcon />
            </Button>
          </CardActions>
        </Card>

        <ApplicantContact />
      </div>
    </>
  );
}

export default Applicant;
