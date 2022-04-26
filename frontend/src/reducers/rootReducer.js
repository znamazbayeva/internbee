import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { internshipReducer } from "./internshipReducer";
import student_reducer from "./student_reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  student: student_reducer,
  internship: internshipReducer,
});

export default rootReducer;
