import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleAdd() {
    if (inputValue.trim() === '') return;
    setItems([...items, { id: Date.now(), text: inputValue, done: false }]);
    setInputValue('');
  }

  function handleRemove(id) {
    setItems(items.filter(item => item.id !== id));
}

  function handleToggle(id) {
    setItems(items.map(item => item.id === id ? {...item, done: !item.done} : item));
  }
  
  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm
        inputValue={inputValue}
        onInputChange={setInputValue}
        onAdd={handleAdd}
      />

      <TodoList items={items} onRemove={handleRemove} onToggle={handleToggle} />
    </div>
  );
}

export default App;