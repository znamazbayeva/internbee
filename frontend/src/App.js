import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import ClientSignup from "./components/Signup/ClientSignup";
import FreelanceSignup from "./components/Signup/FreelanceSignup";
import Login from "./components/Login/Login";
import StudentDashboard from "./components/Profile/StudentDashboard";
import CompanyDashboard from "./components/Profile/CompanyDashboard";

import { CPrivateRoute, FPrivateRoute } from "./private/PrivateRoute";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Internships from "./components/Internship/Internships";
import VerifyEmail from "./components/Login/VerifyEmail";
import DataTable from "./components/Profile/DataTable";

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
          <Route exact path="/search/internships/" component={Internships} />
          <Route exact path="/verify/" component={VerifyEmail} />
          <Route exact path="/company/applicants" component={DataTable} />

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
