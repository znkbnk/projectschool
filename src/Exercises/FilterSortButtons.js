import React from "react";

function FilterSortButtons({ filters, handleFilterClick }) {
  return (
    <div className="sort">
      <h4>Filter:</h4>
      <select
        className="filter-dropdown"
        onChange={(e) => handleFilterClick(e.target.value)}
      >
        {filters.map((filter, index) => (
          <option key={index} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterSortButtons;
