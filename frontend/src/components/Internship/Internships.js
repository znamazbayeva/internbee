import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Internship from "./Internship";
import axios from "axios";
import SearchInternship from "./SearchInternship";
import styles from "./Internship.module.scss";
import { addInternshipList } from "../../actions/internship";

function Internships() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.internship);

	useEffect(() => {
		axios
			.get("http://127.0.0.1:8000/v1/api/internship/all/")
			.then((res) => {
				dispatch(addInternshipList(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className={styles.general}>
			<div style={{ flexGrow: 1.2 }}>
				<SearchInternship style={{ marginTop: "30px" }} />
			</div>

			<div style={{ flexGrow: 2 }}>
				<div
					style={{
						margin: "1rem",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					{
						// make sort by component
					}
					<h3>All internships</h3>
					<div>Sort by</div>
				</div>

				{state.internships.map((internship) => (
					<Internship key={internship._id} internship={internship} />
				))}
			</div>
		</div>
	);
}

export default Internships;
