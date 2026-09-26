function FilterBar({ currentFilter, onFilterChange }) {
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
    </section>
  )
}

export default FilterBar
