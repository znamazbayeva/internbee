import React, { useEffect, useState } from "react";
import { getStudentUser } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import StudentInfo from "./StudentInfo";
import StudentInfo2 from "./StudenInfo2";
import styles from "./Profile.module.scss";
import axios from "axios";
import StudentSidebar from "./StudentSidebar";

function ClientDashboard() {
	const state = useSelector((state) => state.auth);
	const [student, setStudent] = useState(null);
	console.log(state.user_id);
	useEffect(() => {
		axios
			.get("http://127.0.0.1:8000/v1/api/student/" + state.user_id.toString())
			.then((res) => {
				setStudent(res.data);
				console.log(student);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getStudentUser());
	}, [dispatch]);
	return (
		<div className={styles.containter} style={{ display: "flex" }}>
			<StudentSidebar />
			{student != null ? <StudentInfo student={student} /> : null}
			{student != null ? <StudentInfo2 student={student} /> : null}
		</div>
	);
}

export default ClientDashboard;
