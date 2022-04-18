import React from "react";
import styles from "../Profile/Profile.css";

function StudenInfo2({ student }) {
  return (
    <div
      className={styles.container}
      style={{
        marginRight: "2.5rem",
      }}
    >
      <div className={styles.profile_settings}>
        <h3>Profile Settings</h3>
        <div className={styles.profile_settings_options}>
          <span>Personal Info</span>
          <span>|</span>
          <span>Password</span>
          <span>|</span>
          <span>Delete Account</span>
        </div>
        <h5>Personal Information</h5>
        <form className={styles.personal_info_form}>
          <div className={styles.column1}>
            <div className={styles.input_group}>
              <label htmlFor="firstname">First Name</label>
              <input type="text" name="" id="" />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="lastname">Last Name</label>
              <input type="text" name="" id="" />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="gender">Gender</label>
              <input type="text" name="" id="" />
            </div>
            {/* <select name="gender" id="gender" form="genderform">
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="none">Prefer not to specify</option>
          </select> */}
            <div className={styles.input_group}>
              <label htmlFor="email">Email</label>
              <input type="text" name="" id="" />
            </div>
          </div>

          <div className={styles.column2}>
            <div className={styles.input_group}>
              <label htmlFor="university">University</label>
              <input type="text" name="" id="" />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="lastname">Major</label>
              <input type="text" name="" id="" />
            </div>

            <div className={styles.input_group}>
              <label htmlFor="gender">About Me</label>
              <input type="text" name="" id="" />
            </div>
          </div>
        </form>
        <button
          type="submit"
          name=""
          id=""
          className={styles.update_info_button}
        >
          Update Information
        </button>
      </div>
    </div>
  );
}

export default StudenInfo2;
