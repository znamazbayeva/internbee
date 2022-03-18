import React from 'react'
import {useSelector} from "react-redux"
import Internship from './Internship';
import SearchInternship from "./SearchInternship"
import styles from "./Internship.module.scss"
function Internships() {
    const state = useSelector((state) => state.internship);
    console.log(state)
  return (
    <div className={styles.general}>
    <div style={{width: "100%"}}>
    {state.internships.map((internship) => (
        <Internship 
            key = {internship._id}
            internship = {internship}
        />
    ))}
    </div>
    <SearchInternship/>
    </div>
  )
}

export default Internships
