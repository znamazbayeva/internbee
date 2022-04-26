import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PlaceIcon from "@mui/icons-material/Place";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FeaturedInternships from "../FeaturedInternships";
import Disqus from "disqus-react";

const SingleInternshipPage = () => {
  const { id } = useParams();
  const disqusShortname = "internbee";
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier: id,
    title: `internship${id}`,
  };
  const url = "http://127.0.0.1:8000/v1/api/internship/all/";
  const [internship, setInternship] = useState(null);

  const fetchInternships = async () => {
    try {
      const response = await axios.get(url);
      const internships = response.data;
      const internship = internships.find((c) => c._id === parseInt(id));
      setInternship(internship);
    } catch (error) {
      console.log("BIG FAT ERROR");
    }
  };

  useEffect(() => {
    fetchInternships();
  }, []);

  if (internship) {
    console.log(internship);
    return (
      //   <div style={{ display: "flex", justifyContent: "space-around" }}>
      //     <Card
      //       color="primary"
      //       variant="outlined"
      //       sx={{ display: "flex", width: 800 }}
      //     >
      //       <CardMedia
      //         component="img"
      //         sx={{
      //           width: 100,
      //           height: 100,
      //           // display: "block",
      //           margin: "auto",
      //           maxWidth: "100%",
      //           maxHeight: "100%",
      //           borderRadius: "5px",
      //         }}
      //         image={internship.company.img}
      //         alt={internship.name}
      //       />
      //       <Box sx={{ display: "flex", flexDirection: "column" }}>
      //         <CardContent>
      //           <Link
      //             to={`/company/${internship.company.cid}`}
      //             style={{
      //               textDecoration: "none",
      //               color: "#2d2d2d",
      //               fontWeight: "700",
      //             }}
      //           >
      //             <Typography variant="h6" component="div">
      //               {internship.name}
      //             </Typography>
      //           </Link>
      //           <Typography variant="body2">0 reviews</Typography>
      //         </CardContent>
      //         <CardActions>
      //           <button
      //             className={styles.applybutton}
      //             style={{ backgroundColor: "#663399" }}
      //           >
      //             Apply
      //           </button>
      //         </CardActions>
      //       </Box>
      //     </Card>
      //   </div>
      <div style={{ margin: "80px 200px", padding: "5px" }}>
        <h5 style={{ color: "#888" }}>{internship.category.toUpperCase()}</h5>
        <h6
          style={{
            letterSpacing: "2px",
            marginTop: "5px",
            marginBottom: "20px",
          }}
        >
          {internship.name.toUpperCase()}
        </h6>

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
              <img
                src={internship.company.img}
                //   src=""
                alt=""
                style={{
                  height: "80px",
                  borderRadius: "5px",
                  marginRight: "5px",
                  marginLeft: "25px",
                }}
              />

              <Typography sx={{ color: "white" }}>
                0 reviews
                <br />
              </Typography>
            </div>
            <Link to={`/application/apply`} style={{ textDecoration: "none" }}>
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
                Apply to the internship
              </Button>
            </Link>
          </div>
        </header>
        <div
          className="cmp-header"
          style={{
            display: "flex",
            height: "100px",
            alignItems: "center",
            // justifyContent: "space-between",
          }}
        >
          <h6 style={{ marginRight: "25px" }}>
            <PlaceIcon fontSize="small" style={{ color: "#888" }} />
            {internship.location.toUpperCase()}
          </h6>
          <h6>
            <MonetizationOnIcon style={{ color: "#888" }} />
            {parseInt(internship.salary)}
          </h6>
        </div>
        <div className="cmp-header" style={{ display: "flex" }}>
          <p style={{ width: "65%", marginRight: "10%" }}>
            {internship.description}
            <hr />
            {internship.requirements}
          </p>

          <p style={{ width: "25%" }}>
            <h6>Job Overview</h6>
            {internship.skills}
          </p>
        </div>
        <div>
          <FeaturedInternships />
        </div>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    );
  }

  return <div>Internship Page Not Found</div>;
};

export default SingleInternshipPage;
