// FilterSortButtons.js
import React from "react";

function FilterSortButtons({ filters, handleFilterClick }) {
  return (
    <div className='sort'>
      <h4>Show:</h4>
      {filters.map((filter, index) => (
        <button
          key={index}
          className='button-84'
          onClick={() => handleFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterSortButtons;
