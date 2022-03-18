import React from 'react'
import styles from "./Profile.module.scss"

function StudenInfo2({student}) {
  return (
    <div className={styles.student_hi}>
        <div>University: {student.universityName}</div>
        <div>Major: {student.major}</div>
        <div>Gender: {student.gender}</div>
        <div>cGpa: {student.cGpa}</div>
    </div>
  )
}

export default StudenInfo2