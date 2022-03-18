import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import axios from "axios"
import styles from "./Profile.module.scss"

function StudentInfo({student}) {
console.log(student)

return (
    <div className={styles.student_hi}>
            <img src={student.img} alt="" width={120} height={120}/>
            <div>Welcome, {student.firstName} {student.lastName}!</div>
            <div>
                <div>Your Resume</div>
                <div>Your ratings</div>
                <div>Liked Internships</div>
                <div>Applied to</div>
            </div>
    </div>
  )
}

export default StudentInfo