import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaStar } from "react-icons/fa";
import { Card } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ButtonGroup from "@mui/material/ButtonGroup";

const SingleCompanyReview = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  const fetchCompanies = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/v1/api/companys/"
      );
      const companies = response.data;
      const cmp = companies.find((c) => c.user.email === id);
      setCompany(cmp);
      console.log(cmp);
    } catch (error) {
      console.log("BIG FAT ERROR");
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const location = "Almaty, KZ";
  //   const [age, setAge] = React.useState("");

  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };
  return (
    <div style={{ margin: "80px 200px", padding: "5px" }}>
      <header
        style={{
          backgroundColor: "#7167B7",
          border: "1px solid #663399",
          borderRadius: "10px",
        }}
      >
        <div
          className="cmp-header"
          style={{
            display: "flex",
            height: "100px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {company && (
              <img
                src={company.img}
                //   src=""
                alt=""
                style={{
                  height: "80px",
                  borderRadius: "5px",
                  marginRight: "5px",
                  marginLeft: "25px",
                }}
              />
            )}

            <Typography sx={{ color: "white" }}>
              0 reviews
              <br />
              <FaStar style={{ color: "#663399" }} />
              <FaStar style={{ color: "#663399" }} />
              <FaStar style={{ color: "#663399" }} />
              <FaStar style={{ color: "#663399" }} />
              <FaStar />
            </Typography>
          </div>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              height: "20px",
              justifyContent: "center",
              marginRight: "25px",
            }}
          >
            Write a review
          </Button>
        </div>
      </header>
      <Card sx={{ p: 1 }}>
        <h5>Intern Reviews</h5>
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <FormControl sx={{ m: 1, flexGrow: "3" }}>
            <label id="demo">Internship Position</label>
            <Select
              labelId="demo"
              id="demo-simple-select-helper"
              value="Software Engineering Intern"
              // value={age}
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>With label + helper text</FormHelperText>
          </FormControl>

          <FormControl sx={{ m: 1, flexGrow: "2" }}>
            <label id="demo2">Internship Location</label>
            <Select
              labelId="demo2"
              id="demo-simple-select-helper2"
              value={location}
              // value={age}
              label="Location"
              // onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="rating" style={{ marginBottom: "20px" }}>
          <h5>Ratings by Category</h5>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                borderRadius: "5px",
                marginRight: "1rem",
              }}
            >
              3.5 <FaStar /> Work-Life Balance
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                borderRadius: "5px",
                marginRight: "1rem",
              }}
            >
              4.5 <FaStar /> Salary
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                borderRadius: "5px",
                marginRight: "1rem",
              }}
            >
              4.0 <FaStar /> Advancement
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                borderRadius: "5px",
                marginRight: "1rem",
              }}
            >
              4.0 <FaStar /> Culture
            </Button>
          </div>
        </div>
        <div className="sort-by">
          <h5>Sort by</h5>
          <ButtonGroup
            variant="outlined"
            color="secondary"
            aria-label="outlined primary button group"
          >
            <Button>Usefulness</Button>
            <Button>Rating</Button>
            <Button>Date</Button>
          </ButtonGroup>
        </div>
      </Card>
    </div>
  );
};

export default SingleCompanyReview;
