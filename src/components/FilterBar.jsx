function FilterBar({
  currentFilter,
  onFilterChange,
  categoryFilter,
  onCategoryFilterChange,
  searchTerm,
  onSearchTermChange,
}) {
  const allButtonClass = currentFilter === 'All' ? 'active-filter' : ''
  const activeButtonClass = currentFilter === 'Active' ? 'active-filter' : ''
  const completedButtonClass = currentFilter === 'Completed' ? 'active-filter' : ''

  return (
    <section className="filter-bar" aria-label="Task filters">
      <button
        type="button"
        className={allButtonClass}
        onClick={() => onFilterChange('All')}
      >
        All
      </button>
      <button
        type="button"
        className={activeButtonClass}
        onClick={() => onFilterChange('Active')}
      >
        Active
      </button>
      <button
        type="button"
        className={completedButtonClass}
        onClick={() => onFilterChange('Completed')}
      >
        Completed
      </button>

      <select
        aria-label="Category filter"
        value={categoryFilter}
        onChange={(event) => onCategoryFilterChange(event.target.value)}
      >
        <option value="All Categories">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Study">Study</option>
        <option value="Health">Health</option>
      </select>

      <input
        type="search"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(event) => onSearchTermChange(event.target.value)}
      />
    </section>
  )
}

export default FilterBar
