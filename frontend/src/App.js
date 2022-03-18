import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import ClientSignup from "./components/Signup/ClientSignup";
import FreelanceSignup from "./components/Signup/FreelanceSignup";
import Login from "./components/Login/Login";
import ClientDashboard from "./components/ClientDashboard";
import FreelanceDashboard from "./components/FreelanceDashboard";

import { CPrivateRoute, FPrivateRoute } from "./private/PrivateRoute";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Internships from "./components/Internship/Internships";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/client/signup" component={ClientSignup} />
					<Route exact path="/freelance/signup" component={FreelanceSignup} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/search/internships/" component={Internships} />

					<CPrivateRoute
						exact
						path="/client/dashboard"
						component={ClientDashboard}
					/>
					<FPrivateRoute
						exact
						path="/freelance/dashboard"
						component={FreelanceDashboard}
					/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
