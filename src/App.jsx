import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import Sidebar from './components/Sidebar';

import useTodos from './hooks/useTodos';
import useTheme from './hooks/useTheme';

import styles from './App.module.css';

function App() {
  const {
    visibleTodos,
    filter,
    setFilter,
    totalCount,
    doneCount,
    handleAdd,
    handleRemove,
    handleToggle,
    handleEdit,
    handleClearCompleted,
  } = useTodos();

  const [inputValue, setInputValue] = useState('');

  function handleAddClick() {
    if (inputValue.trim() === '') return;
    handleAdd(inputValue);
    setInputValue('');
  }

  const [activeSection, setActiveSection] = useState('todo');

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.layout}>
      <Sidebar
        active={activeSection}
        onSelect={setActiveSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main className={styles.content}>
        <TodoForm
          inputValue={inputValue}
          onInputChange={setInputValue}
          onAdd={handleAddClick}
        />
        <FilterButtons filter={filter} onFilterChange={setFilter} />
        <TodoList
          todos={visibleTodos}
          onRemove={handleRemove}
          onToggle={handleToggle}
          onEdit={handleEdit}
        />
        <div className={styles.footer}>
          <span>Completed: {doneCount} of {totalCount}</span>
          {doneCount > 0 && (
            <button className={styles.clear} onClick={handleClearCompleted}>
              Clear completed
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;