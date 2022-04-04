import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentUser } from "../../actions/auth";
import styles from "./Profile.module.scss";
import StudentInfo2 from "./StudenInfo2";
import SideBar from "./Student/SideBar";
import { data } from "./student_data.js";

function StudentDashboard() {
	const state = useSelector((state) => state.auth);
	const [student, setStudent] = useState(null);
	const sidebarValues = {
		current: "dashboard"
	}

	const SidebarContext = React.createContext(sidebarValues);
	useEffect(() => {
		axios
			.get(`http://127.0.0.1:8000/v1/api/student/${state.user_id}/`)
			.then((res) => {
				setStudent(res.data);
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
		<div className={styles.containter} style={{ display: "flex", height: '100vh'}}>
		<SidebarContext.Provider value={sidebarValues} >
		{student != null ? 	<StudentSidebar student={student} /> : null}
		{student != null ? <StudentInfo2 student={student} /> : null}
		</SidebarContext.Provider>
		</div>
	);
}

export default StudentDashboard;
