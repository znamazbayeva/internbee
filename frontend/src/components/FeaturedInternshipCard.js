import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import beeImage from "../assets/img/Bee-Logo.png";

const FeaturedInternshipCard = ({ internship }) => {
  const name = internship.name;
  // const image = internship.company.img;
  const image = beeImage;
  return (
    <Box sx={{ width: 280, marginRight: "15px" }}>
      <Card variant="outlined" sx={{ display: "flex" }}>
        <Link to={`/company/${name}`}>
          <CardMedia
            component="img"
            sx={{
              width: 80,
              height: 80,
              // display: "block",
              margin: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "5px",
            }}
            image={image}
            alt={name}
          />
        </Link>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Link
              to={`/company/${name}`}
              style={{
                textDecoration: "none",
                color: "#2d2d2d",
                fontWeight: "700",
              }}
            >
              <Typography variant="h6" component="div">
                {name}
              </Typography>
            </Link>
            <Typography variant="body2">0 reviews</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
};

export default FeaturedInternshipCard;
