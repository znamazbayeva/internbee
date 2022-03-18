import React from "react";
import styles from "./Internship.module.scss"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
function Internship({internship}) {
	const findFromDate = (e) => {
		var date = new Date(e); 
		var now = new Date();
		var Difference_In_Time = now.getTime() - date.getTime();
		var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
		return Math.floor(Difference_In_Days).toString();

	}
	return (
		<div className={styles.container}>
			<img src={internship.company.img} alt="" className={styles.imgLogo} />
			<div className={styles.int__info}>
				<div className={styles.first__info}>
					<div className={styles.company_name}>{internship.company.company_name}</div>
					<div className={styles.name}>{internship.name}</div>
					<div className={styles.sub}>
						<AccessTimeIcon fontSize="small" style={{color: "grey"}}/>
						<div className={styles.created_time}>{findFromDate(internship.created_at)} days</div> 
						<FiberManualRecordIcon fontSize="small" style={{color: "grey"}}/>
						<div className={styles.created_time}>{internship.duration}</div> 
						<PlaceIcon fontSize="small" style={{color: "grey"}}/>
						<div className={styles.created_time}>{internship.location}</div>
					</div>

				</div>
				<div className=
				{styles.detail}>
					<div className={styles.name}> KZT {internship.salary} / month       
						<button ><FavoriteBorderIcon fontSize="small" className={styles.button_hi}/></button>
					 {internship.video ? <button> <VideoCameraFrontIcon  fontSize="small" className={styles.button_hi}/></button> : null}	
					</div>
					<button className={styles.button}>See more <ArrowForwardIcon className="arrow" fontSize="small"/></button>
				</div>
			</div>
		</div>
	);
}

export default Internship;
