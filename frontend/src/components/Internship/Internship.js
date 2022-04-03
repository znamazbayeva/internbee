import React from "react";
import { useSelector } from "react-redux";
import styles from "./Internship.module.scss";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import axios from "axios"
function Internship({ internship }) {
	const state = useSelector((state) => state.auth);
	function sendLike() {
		const token = state.token;
		console.log(token)
		const config = {
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({ internship: internship._id })
		};
	
		if (token) {
			config.headers["Authorization"] = `Token ${token}`;
		}
		console.log((internship._id))
		axios
		.post(`http://127.0.0.1:8000/v1/api/internship/like/${internship._id}/`, null, config)
		.then((res) => {
			console.log(res.data)
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
	return (
		<div className={styles.container}>
			<img src={internship.company.img} alt="" className={styles.imgLogo} />
			<div className={styles.int__info}>
				<div className={styles.first__info}>
					<div className={styles.company_name}>
						{internship.company.company_name}
					</div>
					<div className={styles.name}>{internship.name}</div>
					<div className={styles.sub}>
						<AccessTimeIcon fontSize="small" style={{ color: "grey" }} />
						<div className={styles.created_time}>
							{findFromDate(internship.created_at)} days
						</div>
						<FiberManualRecordIcon fontSize="small" style={{ color: "grey" }} />
						<div className={styles.created_time}>{internship.duration}</div>
						<PlaceIcon fontSize="small" style={{ color: "grey" }} />
						<div className={styles.created_time}>{internship.location}</div>
					</div>
				</div>
				<div className={styles.detail}>
 					<div className={styles.name}>
 						{
 							//KZT {internship.salary} / month
 						}
 						<button onClick={sendLike}>
 							<FavoriteBorderIcon
 								fontSize="small"
 								className={styles.button_hi}
 							/>
 						</button>
 						{internship.video ? (
 							<button>
 								{" "}
 								<VideoCameraFrontIcon
 									fontSize="small"
 									className={styles.button_hi}
 								/>
 							</button>
 						) : null}
 					</div>
 					<button className={styles.button}>
 						See more <ArrowForwardIcon className="arrow" fontSize="small" />
 					</button>
				</div>
			</div>
		</div>
	);
}

export default Internship;
