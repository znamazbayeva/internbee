import React from "react";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { useCompanyFilterContext } from "../../context/companies_filter_context";

const SearchReviews = () => {
  const {
    filters: { text_title, text_location },
    updateFilters,
    clearFilters,
  } = useCompanyFilterContext();
  return (
    <div
      style={{
        display: "flex",
        marginTop: "20px",
        marginBottom: "80px",
      }}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{
          display: "flex",
        }}
      >
        <div style={{ display: "block" }}>
          <InputLabel sx={{ fontSize: "medium" }}>Company Name</InputLabel>
          <InputBase
            type="text"
            name="text_title"
            value={text_title}
            onChange={updateFilters}
            sx={{ flex: 1, width: 325 }}
            placeholder="Search by Company"
          />
        </div>

        <div style={{ display: "block" }}>
          <InputLabel sx={{ ml: 1, fontSize: "medium" }}>Location</InputLabel>
          <InputBase
            type="text"
            name="text_location"
            value={text_location}
            onChange={updateFilters}
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
              bottom: "-21px",
              right: "0",
            }}
          >
            Find Companies
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchReviews;
