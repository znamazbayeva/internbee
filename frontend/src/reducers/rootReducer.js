import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { internshipReducer } from "./internshipReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	internship: internshipReducer,
});

export default rootReducer;
