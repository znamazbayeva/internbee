import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const CompanyCard = ({ company }) => {
  const name = company.user.email;
  const image = company.img;
  return (
    <Box sx={{ minWidth: 225 }}>
      <Card variant="outlined" sx={{ display: "flex" }}>
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
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Typography variant="h6" component="div">
              {name}
            </Typography>

            <Typography variant="body2">0 reviews</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
};

export default CompanyCard;
