import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import company_reducer from "./company_reducer";
import { internshipReducer } from "./internshipReducer";
import student_reducer from "./student_reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  company: company_reducer,
  student: student_reducer,
  internship: internshipReducer,
});

export default rootReducer;
