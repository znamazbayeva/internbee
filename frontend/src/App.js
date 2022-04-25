import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AllApplicants from "./components/Applicants/AllApplicants";
import Applicant from "./components/Applicants/Applicant";
import ApplicationPage from "./components/Applications/ApplicationPage";
import PostInternshipPage from "./components/Applications/PostInternshipPage";
import HomePage from "./components/HomePage";
import SingleInternshipPage from "./components/Internship/SingleInternshipPage";
import Login from "./components/Login/Login";
import VerifyEmail from "./components/Login/VerifyEmail";
import Navbar from "./components/Navbar/Navbar";
import CompanyDashboard from "./components/Profile/Company/CompanyDashboard";
import InternshipListing from "./components/Profile/Company/InternshipListing";
import InternshipListings from "./components/Profile/Company/InternshipListings";
import MyResume from "./components/Profile/Student/MyResume";
import ProfileSettings from "./components/Profile/Student/ProfileSettings";
import SubmitResume from "./components/Profile/Student/SubmitResume";
import StudentDashboard from "./components/Profile/StudentDashboard";
import Reviews from "./components/Reviews/Reviews";
import SingleCompanyReview from "./components/Reviews/SingleCompanyReview";
import ClientSignup from "./components/Signup/ClientSignup";
import FreelanceSignup from "./components/Signup/FreelanceSignup";
import About from "./pages/About";
import InternshipsPage from "./pages/InternshipsPage";
import { CPrivateRoute, FPrivateRoute } from "./private/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: "#f0f0f2" }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/client/signup" component={ClientSignup} />
          <Route exact path="/freelance/signup" component={FreelanceSignup} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/profile-settings" component={ProfileSettings} />
          <Route exact path="/student/my-resume" component={MyResume} />
          <Route exact path="/student/submit-resume" component={SubmitResume} />
          <Route exact path="/application/apply" component={ApplicationPage} />
          <Route exact path="/internships" component={InternshipsPage} />
          <Route
            exact
            path="/internships/:id"
            children={<SingleInternshipPage />}
          />
          <Route
            exact
            path="/post-internship/"
            component={PostInternshipPage}
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
