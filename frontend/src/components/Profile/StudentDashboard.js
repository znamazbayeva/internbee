import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentUser } from "../../actions/auth";
import styles from "./Profile.module.scss";

import StudentSidebar from "./StudentSidebar";
import { showStudent } from "../../actions/student";
import SideBar from "./Student/SideBar";

function StudentDashboard() {
  const state = useSelector((state) => state.auth);
  console.log(state);
  const [student, setStudent] = useState(null);

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
    <div
      className={styles.containter}
      style={{ display: "flex", height: "100vh" }}
    >
      {/* {student != null ? <StudentSidebar student={student} /> : null} */}
      <div style={{ marginRight: "3rem" }}>
        {student != null ? <SideBar /> : null}
      </div>
      <div>{student != null ? <StudentInfo2 student={student} /> : null}</div>
    </div>
  );
}

export default StudentDashboard;
