const FilterTask = ({ categories, filterItem }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            onClick={() => filterItem(category)}
            key={index}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default FilterTask;
