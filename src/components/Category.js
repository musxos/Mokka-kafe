import { useEffect } from "react";

function Category({ categories, filterItems }) {
  return (
    <div className="btn-container">
      <button
        type="button"
        onClick={() => filterItems()}
        className="filter-btn"
      >
        Categories <i className="	fa fa-angle-double-right"></i>
      </button>
      {categories.map((category, i) => {
        return (
          <button
            type="button"
            key={i}
            onClick={() => filterItems(category)}
            className="filter-btn"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Category;
