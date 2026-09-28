import styles from './FilterButtons.module.css';

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'done', label: 'Done' },
];

function FilterButtons({ filter, onFilterChange }) {
  return (
    <div className={styles.filters}>
      {FILTERS.map(({ value, label }) => (
        <button
          key={value}
          className={
            filter === value
              ? `${styles.filter} ${styles.active}`
              : styles.filter
          }
          onClick={() => onFilterChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;