import { Button } from "@mui/material";
import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

function StudentSidebar() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-start",
				alignItems: "flex-start",
				marginLeft: "6rem",
			}}
		>
			<Button>
				<HomeOutlinedIcon />
				Dashboard
			</Button>
			<Button >
				<ListAltOutlinedIcon />
				My Applications
			</Button>
			<Button>
				<SearchOutlinedIcon />
				Find jobs
			</Button>
			<Button>
				<BusinessOutlinedIcon />
				Browse Companies
			</Button>
			<Button>
				<PersonOutlineOutlinedIcon />
				Public Profile
			</Button>
		</div>
	);
}

export default StudentSidebar;
