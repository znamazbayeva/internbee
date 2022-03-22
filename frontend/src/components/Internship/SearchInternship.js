import React, { useState, Component, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

const MyAccordion = styled(Accordion)(({ theme }) => ({
	backgroundColor: "transparent",
	boxShadow: "none",
}));
function SearchInternship() {
	const dispatch = useDispatch();
	const locat = useLocation();

	const [internship, setInternship] = useState({
		name: "",
		location: "",
		category: "",
	});

	const [type, setType] = useState({
		full_time: false,
		part_time: false,
		remote: false,
	});
	const [degree, setDegree] = useState({
		bachelor: false,
		master: false,
		phd: false,
		high_school: false,
		no_degree: false,
	});

	const { full_time, part_time, remote } = type;
	const { bachelor, master, phd, high_school, no_degree } = type;

	const { name, location, category } = internship;

	const inputChange = (e) => {
		setInternship({ ...internship, [e.target.name]: e.target.value });
	};

	const handleTypeChange = (event) => {
		setType({ ...type, [event.target.name]: event.target.checked });
	};
	const handleDegreeChange = (event) => {
		setDegree({ ...degree, [event.target.name]: event.target.checked });
	};

	return (
		<div>
			<form>
				<div>
					<MyAccordion>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<h5>Field of Studies</h5>
						</AccordionSummary>
						<AccordionDetails>
							<FormGroup>
								<FormControlLabel
									control={
										<Checkbox
											onChange={handleDegreeChange}
											checked={bachelor}
											name="bachelor"
										/>
									}
									label="Bachelor"
								/>
								<FormControlLabel
									control={
										<Checkbox
											onChange={handleDegreeChange}
											checked={master}
											name="master"
										/>
									}
									label="Master"
								/>
								<FormControlLabel
									control={
										<Checkbox
											onChange={handleDegreeChange}
											checked={phd}
											name="phd"
										/>
									}
									label="PhD"
								/>
								<FormControlLabel
									control={
										<Checkbox
											onChange={handleDegreeChange}
											checked={high_school}
											name="high_school"
										/>
									}
									label="High School"
								/>
								<FormControlLabel
									control={
										<Checkbox
											onChange={handleDegreeChange}
											checked={no_degree}
											name="no_degree"
										/>
									}
									label="No Education"
								/>
							</FormGroup>
						</AccordionDetails>
					</MyAccordion>
				</div>
				<div>
					<MyAccordion>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<h5>Commitment</h5>
						</AccordionSummary>
						<AccordionDetails>
							<FormGroup>
								<FormControlLabel
									control={
										<Checkbox
											onChange={handleTypeChange}
											checked={full_time}
											name="full_time"
										/>
									}
									label="Full time"
								/>
								<FormControlLabel
									control={
										<Checkbox
											onChange={handleTypeChange}
											checked={part_time}
											name="part_time"
										/>
									}
									label="Part time"
								/>
								<FormControlLabel
									control={
										<Checkbox
											onChange={handleTypeChange}
											checked={remote}
											name="remote"
										/>
									}
									label="Remote"
								/>
							</FormGroup>
						</AccordionDetails>
					</MyAccordion>
				</div>
			</form>
		</div>
	);
}

export default SearchInternship;
