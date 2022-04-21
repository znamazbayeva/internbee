import styles from "./Profile.module.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editStudentEmail, showStudent } from "../../actions/student";
import axios from "axios";

function StudenInfo2({ student }) {
  const state = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  // const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };

  const handleFormSubmit = () => {
    console.log(email, student.sid);
    // editStudentEmail(email, state.user_id);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token f085d4303a710beffd2037b30d54dab512c0355d",
      },
    };
    const body = JSON.stringify({ email });
    console.log(body);

    axios
      .put(
        `http://127.0.0.1:8000/v1/api/student/edit/${student.sid}/`,
        body,
        config
      )
      .then((res) => {
        console.log(firstName);
        console.log(res.data);
        dispatch({
          type: "EDIT_STUDENT_ADDR",
          payload: res.data.firstName,
        });
      })
      .catch((err) => {
        //   dispatch({
        //     type: REGISTER_FUSER_FAILED,
        //   });
        console.log("BIF FAT ERR");
        console.log(err.response.data);
      });
  };
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/v1/api/student/${state.user_id}/`)
      .then((res) => {
        dispatch(showStudent(res.data));
        setEmail(res.data.user.email);
        setFirstName(res.data.firstName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
              <input
                type="text"
                name=""
                id=""
                value={firstName}
                onChange={(e) => handleFirstNameChange(e)}
              />
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
              <input
                type="text"
                name=""
                id=""
                value={email}
                onChange={(e) => handleEmailChange(e)}
              />
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
          onClick={handleFormSubmit}
        >
          Update Information
        </button>
      </div>
    </div>
  );
}

export default StudenInfo2;
