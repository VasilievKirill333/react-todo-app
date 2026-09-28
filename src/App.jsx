import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [inputValue, setInputValue] = useState('');

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

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm
        inputValue={inputValue}
        onInputChange={setInputValue}
        onAdd={handleAdd}
      />
      <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
    </div>
  );
}

export default App;