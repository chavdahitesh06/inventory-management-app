import React from "react"

function FilterSort({ categories, selectedCategory, setSelectedCategory, sortBy, setSortBy }) {
  return (
    <div className="filter-sort">
      <label>
        Filter by category:
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sort by:
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Name</option>
          <option value="quantity">Quantity</option>
        </select>
      </label>
    </div>
  )
}

export default FilterSort

