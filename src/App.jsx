import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  const totalCount = todos.length;
  const doneCount = todos.filter(todo => todo.done).length;

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function handleAdd() {
    if (inputValue.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: inputValue, done: false }]);
    setInputValue('');
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
      todo.id === id ? {...todo, text: newText} : todo
    ));
  }

  const visibleTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.done;
    if (filter === 'done') return todo.done;
    return true;
  });

  return (
    <div>
      <h1>Todo App</h1>
      <p>Completed: {doneCount} of {totalCount}</p>
      <TodoForm
        inputValue={inputValue}
        onInputChange={setInputValue}
        onAdd={handleAdd}
      />
      <FilterButtons filter={filter} onFilterChange={setFilter} />
      <TodoList todos={visibleTodos} onRemove={handleRemove} onToggle={handleToggle} onEdit={handleEdit} />
    </div>
  );
}

export default App;