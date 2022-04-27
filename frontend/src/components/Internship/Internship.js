import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Internship.module.scss";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import axios from "axios";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import beeImage from "../../assets/img/Bee-Logo.png";

function Internship({ internship }) {
  const state = useSelector((state) => state.auth);
  const [like, setLike] = useState(false);
  const [likeID, setLikeID] = useState("");

  function sendLike() {
    const token = state.token;
    console.log(token);
    const config = {
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ internship: internship._id }),
    };

    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }

    axios
      .post(
        `http://127.0.0.1:8000/v1/api/internship/like/create/${internship._id}/`,
        null,
        config
      )
      .then((res) => {
        console.log(res.data);
        setLike(true);
        setLikeID(res.data.internship_like.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function removeLike() {
    const token = state.token;
    const config = {
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ internship: internship._id }),
    };

    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }

    axios
      .delete(
        `http://127.0.0.1:8000/v1/api/internship/like/delete/${likeID}/`,
        null,
        config
      )
      .then((res) => {
        setLike(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const findFromDate = (e) => {
    var date = new Date(e);
    var now = new Date();
    var Difference_In_Time = now.getTime() - date.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Math.floor(Difference_In_Days).toString();
  };
  const validName = internship && internship.name;
  // const validCompany = internship && internship.company.company_name;
  const validCategory = internship && internship.category;
  const validLocation = internship && internship.location;

  return (
    <div className={styles.container}>
      <img src={beeImage} alt="" className={styles.imgLogo} />
      <div className={styles.int__info}>
        <div className={styles.first__info}>
          <div className={styles.company_name}>
            {/* {validCompany && internship.company.company_name} */}
          </div>
          <div className={styles.name}>{validName && internship.name}</div>
          <div className={styles.sub}>
            <AccessTimeIcon fontSize="small" style={{ color: "grey" }} />
            <div className={styles.created_time}>
              {findFromDate(internship.created_at)}
              days
            </div>
            <FiberManualRecordIcon fontSize="small" style={{ color: "grey" }} />
            <div className={styles.created_time}>
              {validCategory && internship.category}
            </div>
            <PlaceIcon fontSize="small" style={{ color: "grey" }} />
            <div className={styles.created_time}>
              {validLocation && internship.location}
            </div>
            <MonetizationOnIcon fontSize="small" style={{ color: "grey" }} />
            <div className={styles.created_time}>{internship.salary}</div>
          </div>
        </div>
        <div className={styles.detail}>
          <div className={styles.name}>
            <button onClick={sendLike}>
              {like ? (
                <FavoriteIcon
                  fontSize="small"
                  style={{ color: "#e32636" }}
                  className={styles.button_hi}
                  onClick={removeLike}
                />
              ) : (
                <FavoriteBorderIcon
                  fontSize="small"
                  style={{ color: "#e32636" }}
                  className={styles.button_hi}
                  onClick={sendLike}
                />
              )}
            </button>
            <Link
              to="/student/video/url?=wiroewutbsndfbnzxnbhhwfafs"
              style={{ color: "black" }}
            >
              <VideoCameraFrontIcon />
            </Link>
          </div>
          <Link
            to={`/internships/${internship._id}`}
            style={{ textDecoration: "none" }}
          >
            <button className={styles.button}>
              See more <ArrowForwardIcon className="arrow" fontSize="small" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Internship;
