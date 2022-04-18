import React from "react";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

const SearchReviews = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div style={{ display: "block" }}>
        <InputLabel
          sx={{ ml: 1, fontWeight: "bold", fontSize: "large" }}
          variant="h6"
        >
          Company Name
        </InputLabel>
        <InputBase
          sx={{ ml: 1, flex: 1, width: 325 }}
          placeholder="Search by Company"
        />
      </div>

      <div style={{ display: "block" }}>
        <InputLabel sx={{ ml: 1, fontWeight: "bold", fontSize: "large" }}>
          Location
        </InputLabel>
        <InputBase
          sx={{ ml: 1, flex: 1, width: 325 }}
          placeholder="Search by Location"
        />
      </div>
      <div style={{ display: "block" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#663399",
            ml: 1,
            width: 280,
            height: 35,
            position: "relative",
            bottom: "-25px",
            right: "0",
          }}
        >
          Find Companies
        </Button>
      </div>
    </div>
  );
};

export default SearchReviews;
