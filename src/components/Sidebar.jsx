import { useState } from 'react';
import styles from './Sidebar.module.css';

const NAV_ITEMS = [
  { id: 'todo', label: 'Todo', icon: '✓' },
  { id: 'profile', label: 'Profile', icon: '◐' },
  { id: 'settings', label: 'Settings', icon: '⚙' },
];

function Sidebar({ active, onSelect, theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={isOpen ? styles.sidebar : `${styles.sidebar} ${styles.collapsed}`}>
      <div className={styles.header}>
        {isOpen && <span className={styles.logo}>My App</span>}
        <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '‹' : '›'}
        </button>
      </div>

      <nav>
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            className={item.id === active ? `${styles.item} ${styles.active}` : styles.item}
            onClick={() => onSelect(item.id)}
            title={item.label}
          >
            <span className={styles.icon}>{item.icon}</span>
            {isOpen && item.label}
          </button>
        ))}
      </nav>

          <button
        className={styles.item}
        onClick={onToggleTheme}
        title={theme === 'light' ? 'Dark mode' : 'Light mode'}
      >
        <span className={styles.icon}>{theme === 'light' ? '☾' : '☀'}</span>
        {isOpen && (theme === 'light' ? 'Dark mode' : 'Light mode')}
      </button>
    </aside>
  );
}

export default Sidebar;