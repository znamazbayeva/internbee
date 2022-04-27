import { FormGroup } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";
import { useFilterContext } from "../../context/filter_context";

const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  return ["all", ...new Set(unique)];
};

export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

function SearchInternship() {
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
  console.log(categories);

  return (
    <FormGroup
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
    >
      <FormControl sx={{ marginBottom: "30px" }}>
        <InputLabel htmlFor="text">Title</InputLabel>
        <Input
          label="Search here"
          variant="standard"
          type="text"
          name="text"
          placeholder="search by title"
          className="search-input"
          value={text}
          onChange={updateFilters}
        />
      </FormControl>

      <FormControl sx={{ marginBottom: "30px" }}>
        <InputLabel htmlFor="text">Category</InputLabel>
        <Select
          sx={{ height: "35px" }}
          select
          label="Category"
          name="category"
          value={category}
          onChange={updateFilters}
        >
          {categories.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ marginBottom: "30px" }}>
        <InputLabel htmlFor="text">Location</InputLabel>
        <Select
          sx={{ height: "35px" }}
          select
          label="Location"
          name="location"
          value={location}
          onChange={updateFilters}
        >
          {locations.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <label htmlFor="text">Salary</label>
        <input
          type="range"
          defaultValue={0}
          name="salary"
          aria-label="Always visible"
          valueLabelDisplay="auto"
          value={salary}
          onChange={updateFilters}
          min={min_salary}
          max={max_salary}
          sx={{ overflow: "visible" }}
        />
      </FormControl>
      <Button
        onClick={clearFilters}
        variant="contained"
        style={{ marginTop: "2rem", backgroundColor: "#663399" }}
      >
        Clear Filters
      </Button>
    </FormGroup>
  );
}

export default SearchInternship;
