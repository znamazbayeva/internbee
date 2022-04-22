import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard({ title }) {
  return (
    <div style={{ display: "flex" }}>
      <Card sx={{ width: "200px", height: "120px" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{}} size="small">
            See More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
