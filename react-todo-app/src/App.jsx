import { useState } from 'react';
import TodoForm from './components/TodoForm';

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

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm
        inputValue={inputValue}
        onInputChange={setInputValue}
        onAdd={handleAdd}
      />

      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}<button onClick={() => handleRemove(item.id)}>×</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App;