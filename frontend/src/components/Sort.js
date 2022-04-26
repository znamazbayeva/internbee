import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { useFilterContext } from "../context/filter_context";

const Sort = () => {
  const {
    filtered_internships: internships,
    sort,
    updateSort,
  } = useFilterContext();
  const options = [
    { value: "salary-lowest", title: "by lowest salary" },
    { value: "salary-highest", title: "by highest salary" },
    { value: "name-a", title: "alphabetically (a-z)" },
    { value: "name-z", title: "alphabetically (z-a)" },
  ];
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0 0 8em" }}>
        <Typography>{internships.length} internships found</Typography>
        <hr />
        <FormControl sx={{ marginBottom: "30px" }}>
          <InputLabel htmlFor="sort">Sort By</InputLabel>
          <Select
            sx={{ height: "35px" }}
            select
            label="sort"
            name="sort"
            id="sort"
            value={sort}
            onChange={updateSort}
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Sort;
