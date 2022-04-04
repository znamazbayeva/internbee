import {
	INTERNSHIP_LIST_FAILED,
	INTERNSHIP_LIST_LOADED,
} from "../actions/types";

const initialState = {
	internships: [],
};

export const internshipReducer = (state = initialState, action) => {
	switch (action.type) {
		case INTERNSHIP_LIST_LOADED:
			return {
				internships: action.payload,
			};
		case INTERNSHIP_LIST_FAILED:
			return {
				internships: [],
			};
		default:
			return {
				...state,
			};
	}
};
