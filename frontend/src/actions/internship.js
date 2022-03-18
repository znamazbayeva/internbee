import axios from "axios";

import {
	INTERNSHIP_LIST_FAILED,
	INTERNSHIP_LIST_LOADED,
} from "../actions/types";
export const addInternshipList = (url) => (dispatch, getState) => {
	// const config = {
	// 	headers: {
	// 		"Content-type": "application/json",
	// 	},
	// };

	dispatch({
		type: INTERNSHIP_LIST_LOADED,
		payload: url,
	});
};
