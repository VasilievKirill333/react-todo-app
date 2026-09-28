import { useState } from 'react';
import styles from './TodoForm.module.css';

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
    <div
    className={styles.form}
    >
      <input type="text"
      value={inputValue}
      onChange={(e) => {
        onInputChange(e.target.value);
        setError('');
      }}
      placeholder="enter your value"
      onKeyDown={e => e.key === 'Enter' && handleSubmit()}
      className={error ? `${styles.input} ${styles.inputError}` : styles.input}
      />
      <button className={styles.button} onClick={handleSubmit}>add</button>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default TodoForm;