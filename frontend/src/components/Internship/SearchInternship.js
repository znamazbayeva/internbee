import { FormGroup } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import React from "react";
import { useFilterContext } from "../../context/filter_context";

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
          id="my-input"
          aria-describedby="my-helper-text"
          label="Search here"
          variant="standard"
          type="text"
          name="text"
          placeholder="search"
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
    </FormGroup>
  );
}

export default SearchInternship;
