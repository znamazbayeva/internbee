import { Button } from "@mui/material";
import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import styles from "./Profile.module.scss";
import { styled } from "@mui/material/styles";
import { Avatar } from "@mui/material";
import Identicon from "identicon.js";
// create a base64 encoded PNG
var data = new Identicon("d3b07384d113edec49eaa6238ad5ff00", 420).toString();

// write to a data URI
// document.write('<img width=420 height=420 src="data:image/png;base64,' + data + '">');

const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  color: "black",
  textAlign: "center",
  width: "100%",
  margin: "0.25rem",
  textTransform: "none",
  fontSize: "1rem",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'",
  fontWeight: "300",
  "&:hover": {
    color: "blueviolet",
    backgroundColor: "#f1defa",
    borderRadius: "4px",
    transition: "all 0.2s ease-out",
  },
  ":first-of-type": {
    marginRight: "4px",
  },
}));

function StudentSidebar({ student }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        // alignItems: "flex-start",
        marginLeft: "6rem",
      }}
      className={styles.student_hi + " " + styles.container}
    >
      <div className={styles.welcome_msg}>
        {/* <img
          src={student.img}
          alt=""
          width={120}
          height={120}
          style={{ marginBottom: "1rem" }}
        /> */}
        <Avatar
          alt="profile image"
          src={`data:image/png;base64,${data}`}
          style={{ marginBottom: "1rem", width: "120px", height: "120px" }}
        />

        <div
          style={{
            fontSize: "1rem",
            marginBottom: "0.5rem",
          }}
        >
          Welcome, {student.firstName} {student.lastName}!
        </div>
      </div>
      <MyButton>
        <HomeOutlinedIcon />
        <div>Dashboard</div>
      </MyButton>
      <MyButton>
        <ListAltOutlinedIcon />
        <div>My Applications</div>
      </MyButton>
      <MyButton>
        <SearchOutlinedIcon />
        <div>Find internships</div>
      </MyButton>
      <MyButton>
        <BusinessOutlinedIcon />
        <div>Browse Companies</div>
      </MyButton>
      <MyButton>
        <PersonOutlineOutlinedIcon />
        <div>Public Profile</div>
      </MyButton>
    </div>
  );
}

export default StudentSidebar;
