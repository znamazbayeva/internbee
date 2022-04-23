import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import BadgeIcon from "@mui/icons-material/Badge";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export const data = [
  {
    title: "",
    path: "/",
    icon: null,
    cName: "nav-text",
  },
  {
    title: "Dashboard",
    path: "/",
    icon: <HomeOutlinedIcon />,
    cName: "nav-text",
  },
  {
    title: "My Applications",
    path: "/company/applicants",
    icon: <BadgeIcon />,
    cName: "nav-text",
  },
  {
    title: "Saved Internships",
    path: "/company/internship-listings",
    icon: <FavoriteBorderIcon />,
    cName: "nav-text",
  },
  {
    title: "Live Chat",
    path: "/chat",
    icon: <VideoCameraFrontIcon />,
    cName: "nav-text",
  },
  {
    title: "My Resume",
    path: "/student/my-resume",
    icon: <ListAltOutlinedIcon />,
    cName: "nav-text",
  },
  {
    title: "Profile Settings",
    path: "/profile-settings",
    icon: <PersonOutlineOutlinedIcon />,
    cName: "nav-text",
  },
];
