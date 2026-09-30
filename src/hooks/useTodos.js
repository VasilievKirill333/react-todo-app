import { useState, useEffect } from 'react';

function useTodos() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function handleAdd(text) {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  }

  function handleRemove(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function handleToggle(id) {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  }

  function handleEdit(id, newText) {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  }

  function handleClearCompleted() {
    setTodos(todos.filter(todo => !todo.done));
  }

  const visibleTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.done;
    if (filter === 'done') return todo.done;
    return true;
  });

  const totalCount = todos.length;
  const doneCount = todos.filter(todo => todo.done).length;

  return {
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
  };
}

export default useTodos;