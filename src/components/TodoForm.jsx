import { useState } from 'react';

function TodoForm({ inputValue, onInputChange, onAdd }) {
  const [error, setError] = useState('');

  function handleSubmit() {
    if (inputValue.trim()===''){
      setError("Field can't be empty")
      return;
    }
    else {
      setError('')
      onAdd();
    }
  }
  
  return (
    <div>
      <input type="text"
      value={inputValue}
      onChange={(e) => {
        onInputChange(e.target.value);
        setError('');
      }}
      placeholder="enter your value"
      onKeyDown={e => e.key === 'Enter' && handleSubmit()}
      />
      <button onClick={handleSubmit}>add</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default TodoForm;