import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import ClientSignup from "./components/Signup/ClientSignup";
import FreelanceSignup from "./components/Signup/FreelanceSignup";
import Login from "./components/Login/Login";
import StudentDashboard from "./components/Profile/StudentDashboard";
import CompanyDashboard from "./components/Profile/Company/CompanyDashboard";
import InternshipListing from "./components/Profile/Company/InternshipListing";
import { CPrivateRoute, FPrivateRoute } from "./private/PrivateRoute";
import InternshipListings from "./components/Profile/Company/InternshipListings";
import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import VerifyEmail from "./components/Login/VerifyEmail";

import AllApplicants from "./components/Applicants/AllApplicants";
import Applicant from "./components/Applicants/Applicant";
import Reviews from "./components/Reviews/Reviews";
import SingleCompanyReview from "./components/Reviews/SingleCompanyReview";
import InternshipsPage from "./pages/InternshipsPage";
import SingleInternshipPage from "./components/Internship/SingleInternshipPage";
import ApplicationPage from "./components/Applications/ApplicationPage";
import MyResume from "./components/Profile/Student/MyResume";
import ProfileSettings from "./components/Profile/Student/ProfileSettings";

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: "#f0f0f2" }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/client/signup" component={ClientSignup} />
          <Route exact path="/freelance/signup" component={FreelanceSignup} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/profile-settings" component={ProfileSettings} />
          <Route exact path="/student/my-resume" component={MyResume} />
          <Route exact path="/application/apply" component={ApplicationPage} />
          <Route exact path="/internships" component={InternshipsPage} />
          <Route
            exact
            path="/internships/:id"
            children={<SingleInternshipPage />}
          />

          <Route exact path="/verify/" component={VerifyEmail} />
          <Route exact path="/company/applicants" component={AllApplicants} />
          <Route exact path="/company/applicants/1" component={Applicant} />
          <Route
            exact
            path="/company/internship-listings"
            component={InternshipListings}
          />
          <Route
            exact
            path="/company/internship-listings/1"
            component={InternshipListing}
          />
          <CPrivateRoute
            exact
            path="/student/dashboard"
            component={StudentDashboard}
          />
          <FPrivateRoute
            exact
            path="/company/dashboard"
            component={CompanyDashboard}
          />
          <Route exact path="/reviews" component={Reviews} />
          <Route
            exact
            path="/company/:id/"
            children={<SingleCompanyReview />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
