import {
  LOAD_INTERNSHIPS,
  UPDATE_SORT,
  SORT_INTERNSHIPS,
  UPDATE_FILTERS,
  FILTER_INTERNSHIPS,
  CLEAR_FILTERS,
} from "../actions/types";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_INTERNSHIPS) {
    let maxSalary = action.payload.map((p) => p.salary);
    maxSalary = Math.max(...maxSalary);

    return {
      ...state,
      all_internships: [...action.payload],
      filtered_internships: [...action.payload],
      filters: { ...state.filters, max_salary: maxSalary, salary: maxSalary },
    };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_INTERNSHIPS) {
    const { sort, filtered_internships } = state;
    let tempInternships = [...filtered_internships];
    if (sort === "salary-lowest") {
      tempInternships = tempInternships.sort((a, b) => a.salary - b.salary);
    }
    if (sort === "salary-highest") {
      tempInternships = tempInternships.sort((a, b) => b.salary - a.salary);
    }
    if (sort === "name-a") {
      tempInternships = tempInternships.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempInternships = tempInternships.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    return { ...state, filtered_internships: tempInternships };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_INTERNSHIPS) {
    const { all_internships } = state;
    const { text, category, company, location, salary } = state.filters;
    let tempInternships = [...all_internships];

    if (text) {
      tempInternships = tempInternships.filter((internship) => {
        return internship.name.toLowerCase().includes(text);
      });
    }
    if (category !== "all") {
      tempInternships = tempInternships.filter(
        (internship) => internship.category === category
      );
    }
    if (company !== "all") {
      tempInternships = tempInternships.filter(
        (internship) => internship.company === company
      );
    }

    if (location !== "all") {
      tempInternships = tempInternships.filter(
        (internship) => internship.location === location
      );
    }

    tempInternships = tempInternships.filter(
      (internship) => internship.salary <= salary
    );

    return { ...state, filtered_internships: tempInternships };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        salary: state.filters.max_salary,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
