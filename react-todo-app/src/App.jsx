import { useState } from 'react';
import TodoForm from './components/TodoForm';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleAdd() {
    if (inputValue.trim() === '') return;
    setItems([...items, { id: Date.now(), text: inputValue, bought: false }]);
    setInputValue('');
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
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;