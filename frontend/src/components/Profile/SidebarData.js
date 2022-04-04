import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import BadgeIcon from "@mui/icons-material/Badge";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <HomeOutlinedIcon />,
    cName: "nav-text",
  },
  {
    title: "All Applicants",
    path: "/company/applicants",
    icon: <BadgeIcon />,
    cName: "nav-text",
  },
  {
    title: "Internship Listings",
    path: "/company/internships",
    icon: <ListAltOutlinedIcon />,
    cName: "nav-text",
  },
  {
    title: "Live Chat",
    path: "/chat",
    icon: <VideoCameraFrontIcon />,
    cName: "nav-text",
  },
  {
    title: "Public Profile",
    path: "/public-profile",
    icon: <PersonOutlineOutlinedIcon />,
    cName: "nav-text",
  },
];
