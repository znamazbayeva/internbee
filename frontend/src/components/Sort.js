import React from "react";
import { useFilterContext } from "../context/filter_context";

const Sort = () => {
  const {
    filtered_internships: internships,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <div>
      <p>{internships.length} internships found</p>
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={updateSort}
        >
          <option value="salary-lowest">salary (lowest)</option>
          <option value="salary-highest">salary (highest)</option>
          <option value="name-a">alphabetically (a-z)</option>
          <option value="name-z">alphabetically (z-a)</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
