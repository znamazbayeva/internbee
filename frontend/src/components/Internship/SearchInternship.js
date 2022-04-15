import React, { useState, Component, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
// import { useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { useFilterContext } from "../../context/filter_context";
import { TextField } from "@mui/material";
const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type == "colors") {
    unique = unique.flat();
  }

  return ["all", ...new Set(unique)];
};

export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

const MyAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
}));
function SearchInternship() {
  // const dispatch = useDispatch();
  // const locat = useLocation();

  // const [internship, setInternship] = useState({
  // 	name: "",
  // 	location: "",
  // 	category: "",
  // });

  // const [type, setType] = useState({
  // 	full_time: false,
  // 	part_time: false,
  // 	remote: false,
  // });
  // const [degree, setDegree] = useState({
  // 	bachelor: false,
  // 	master: false,
  // 	phd: false,
  // 	high_school: false,
  // 	no_degree: false,
  // });

  // const { full_time, part_time, remote } = type;
  // const { bachelor, master, phd, high_school, no_degree } = type;

  // const { name, location, category } = internship;

  // const inputChange = (e) => {
  // 	setInternship({ ...internship, [e.target.name]: e.target.value });
  // };

  // const handleTypeChange = (event) => {
  // 	setType({ ...type, [event.target.name]: event.target.checked });
  // };
  // const handleDegreeChange = (event) => {
  // 	setDegree({ ...degree, [event.target.name]: event.target.checked });
  // };
  const {
    filters: {
      text,
      category,
      company,
      min_salary,
      max_salary,
      salary,
      location,
    },
    updateFilters,
    clearFilters,
    all_internships,
  } = useFilterContext();

  const categories = getUniqueValues(all_internships, "category");

  const locations = getUniqueValues(all_internships, "location");
  console.log(locations);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <TextField
            id="standard-basic"
            label="Search here"
            variant="standard"
            type="text"
            name="text"
            placeholder="search"
            className="search-input"
            value={text}
            onChange={updateFilters}
          />

          <div>
            <h5>Category</h5>

            <select name="category" value={category} onChange={updateFilters}>
              {locations.map((l, index) => {
                return (
                  <option key={index} value={l}>
                    {l}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <h5>Location</h5>

            <select name="location" value={location} onChange={updateFilters}>
              {locations.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <h5>Salary</h5>
            <p className="salary">{formatPrice(salary)}</p>
            <input
              type="range"
              name="salary"
              onChange={updateFilters}
              min={min_salary}
              max={max_salary}
              value={salary}
            />
          </div>
          {/* </div>
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
          </MyAccordion> */}
        </div>
      </form>
    </div>
  );
}

export default SearchInternship;
