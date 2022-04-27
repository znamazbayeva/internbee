import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

export default function BasicCard({ title }) {
  return (
    <div style={{ display: "flex" }}>
      <Card sx={{ width: "200px", height: "120px" }}>
        <CardContent>
          <Typography variant="h7" component="div">
            <strong>{title}</strong>
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
