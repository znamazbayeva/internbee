/* eslint-disable */
import React, { useEffect, useState, Fragment, useContext, FC } from "react";
import BaseLayout from "./BaseLayout";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import { Link, Redirect } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import axios from "axios";
import SideBar from "../Profile/Student/SideBar";
import { data } from "../Profile/student_data";
import styles from "../Profile/Profile.module.scss";
import { Card, Grid, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";

const PostInternshipPage = () => {
  const state = useSelector((state) => state.auth);
  const token = state.token;
  console.log(token);
  const [tags, setTags] = useState([
    { value: "php", label: "PHP" },
    { value: "django", label: "Django" },
    { value: "kotlin", label: "Kotlin" },
    { value: "java", label: "Java" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
  ]);
  const [types, setTypes] = useState([
    { value: 1, label: "Full Time" },
    { value: 2, label: "Part Time" },
    { value: 3, label: "Internship" },
  ]);
  const [categories, setCategories] = useState([
    { value: "web-design", label: "Web design" },
    { value: "graphic-design", label: "Graphic design" },
    { value: "web-development", label: "Web development" },
    { value: "human-resource", label: "Human Resources" },
    { value: "support", label: "Support" },
    { value: "android", label: "Android Development" },
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState(0);
  const [internship_tags, setInternshipTags] = useState([]);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [last_date, setLastDate] = useState(new Date());
  const [company_name, setCompanyName] = useState("");
  const [company_description, setCompanyDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [internshipID, setInternshipID] = useState("");
  const { addToast } = useToasts();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  const animatedComponents = makeAnimated();

  const handleSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    };
    console.log(name, description, location);
    const body = JSON.stringify({
      name,
      description,
      salary,
      location,
      category,
      // last_date: last_date,
      company_name,
      // company_description: company_description,
      // website: website,
    });

    axios
      .post(`http://127.0.0.1:8000/v1/api/internship/create/`, body, config)
      .then((res) => {
        addToast("Saved Successfully", { appearance: "success" });
        console.log(res.data);
        setInternshipID(res.data._id);
      })
      .catch((err) => {
        addToast(err.message, { appearance: "error" });
        // console.log(err.response.data);
      });
  };

  // const handleSkillsChange = (selectedOptions: any) => {
  //   let my_tags: ICustomTag[] = selectedOptions.map(
  //     (selected: any) => selected.value
  //   );
  //   setInternshipTags([...my_tags]);
  // };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <BaseLayout title={"Post new internship"}>
      <div className={styles.containter} style={{ display: "flex" }}>
        <div style={{ marginRight: "2rem" }}>
          <SideBar data={data} />
        </div>
        {/* <div className={styles.container_plain}></div> */}
        {/* <div className="page-header" style={{ textAlign: "center" }}>
          <h3>Post A intIrnship</h3>
        </div> */}

        {!loading && (
          <div className="text-center justify-content-center align-self-center">
            <InfinitySpin
              type="Grid"
              color="#00BFFF"
              height={100}
              width={100}
              visible={loading}
            />
          </div>
        )}

        {loading && (
          <Fragment>
            <div className={styles.container} style={{ display: "block" }}>
              <div>
                <div
                  style={{
                    fontWeight: "500",
                    textAlign: "center",
                    fontSize: "1.7rem",
                  }}
                >
                  <label htmlFor="">Post a new Internship</label>
                </div>
                <form className="form-ad" onSubmit={handleSubmit}>
                  <Grid>
                    <Grid item xs={12} sm={6} style={{ display: "block" }}>
                      <label className={styles.control_label}>
                        Internship Title
                      </label>
                      <TextField
                        type="text"
                        className="form-control"
                        onChange={(event) => setName(event.target.value)}
                        placeholder=""
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <label className={styles.control_label}>
                        Internship Description
                      </label>
                      <textarea
                        className="form-control"
                        placeholder="Write internship description"
                        onChange={(event) => setDescription(event.target.value)}
                        rows={4}
                      />
                    </Grid>
                    <div className="row">
                      <div className="col-md-6">
                        <Grid item xs={12} sm={6}>
                          <label className={styles.control_label}>Salary</label>
                          <TextField
                            type="number"
                            className="form-control"
                            onChange={(e) => setSalary(e.target.value)}
                            placeholder=""
                            size="small"
                          />
                        </Grid>
                      </div>
                      <div className="col-md-6">
                        <Grid item xs={12} sm={6}>
                          <label className={styles.control_label}>
                            Required skills
                          </label>
                          <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            // defaultValue={[colourOptions[4], colourOptions[5]]}
                            isMulti
                            options={tags}
                            className="React"
                            classNamePrefix="select"
                            // onChange={handleSkillsChange}
                          />
                        </Grid>
                      </div>
                    </div>
                    <Grid item xs={12} sm={6}>
                      <label className={styles.control_label}>Location</label>
                      <TextField
                        type="text"
                        className="form-control"
                        onChange={(event) => setLocation(event.target.value)}
                        placeholder="e.g.Almaty"
                        size="small"
                      />
                    </Grid>
                    <div className="row">
                      <div className="col-md-6">
                        <Grid item xs={12} sm={6}>
                          <label className={styles.control_label}>
                            Company
                          </label>
                          <TextField
                            type="text"
                            className="form-control"
                            onChange={(event) =>
                              setCompanyName(event.target.value)
                            }
                            placeholder="Write company name"
                            size="small"
                          />
                        </Grid>
                      </div>
                      <div className="col-md-6">
                        <label className={styles.control_label}>Type</label>
                        <Select
                          className="React"
                          classNamePrefix="select"
                          name="type"
                          onChange={(type) => setType(type.value)}
                          options={types}
                        />
                      </div>
                    </div>
                    <Grid item xs={12} sm={6}>
                      <label className={styles.control_label}>Category</label>
                      <div className="search-category-container">
                        <Select
                          className="React"
                          classNamePrefix="select"
                          name="category"
                          onChange={(category) => setCategory(category.value)}
                          options={categories}
                        />
                      </div>
                    </Grid>
                    <div className="row">
                      <div className="col-md-6">
                        <Grid item xs={12} sm={6}>
                          <label className={styles.control_label}>
                            Apply URL (company's own website)
                          </label>
                          <TextField
                            type="text"
                            className="form-control"
                            onChange={(event) => setWebsite(event.target.value)}
                            placeholder="Apply URL"
                          />
                        </Grid>
                      </div>
                      <div className="col-md-6">
                        <label className={styles.control_label}>
                          Application Deadline
                        </label>
                        <Flatpickr
                          className="form-control"
                          value={last_date}
                          options={{ minDate: new Date() }}
                          onChange={(date) => setLastDate(date[0])}
                        />
                      </div>
                    </div>
                    <Grid item xs={12} sm={6}>
                      <label className={styles.control_label}>
                        Company name
                      </label>
                      <TextField
                        type="text"
                        className="form-control"
                        onChange={(event) => setCompanyName(event.target.value)}
                        placeholder="Company name"
                        size="small"
                      />
                    </Grid>
                    <div className="form-group">
                      <label className={styles.control_label}>
                        Company description
                      </label>
                      <textarea
                        className="form-control"
                        rows={6}
                        onChange={(event) =>
                          setCompanyDescription(event.target.value)
                        }
                        placeholder="Company description"
                      />
                    </div>

                    <button
                      type="submit"
                      hidden={submitted}
                      className={styles.savechanges}
                      style={{
                        float: "right",
                        marginTop: "1rem",
                        marginLeft: "15px",
                      }}
                    >
                      Submit your internship
                    </button>
                    <Link
                      to={`/internships/${internshipID}`}
                      className={styles.savechanges}
                      style={{
                        backgroundColor: "#8286C5",
                        float: "right",
                        marginTop: "1rem",
                        textDecoration: "none",
                      }}
                    >
                      Go to Internship's Page
                    </Link>
                  </Grid>
                </form>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </BaseLayout>
  );
};

export default PostInternshipPage;
