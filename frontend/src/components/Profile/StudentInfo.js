import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styles from "./Profile.module.scss";

function StudentInfo({ student }) {
  console.log(student);

  return (
    <div className={styles.student_hi + " " + styles.container}>
      <img src={student.img} alt="" width={120} height={120} />
      <div className={styles.welcome_msg}>
        Welcome, {student.firstName} {student.lastName}!
      </div>
      <div>
        <div>My Resume</div>
        <div>My Rating</div>
        <div>Saved Internships</div>
        <div>Application History</div>
      </div>
    </div>
  );
}

export default StudentInfo;
