function TodoForm({ inputValue, onInputChange, onAdd }) {
  return (
    <div>
      <input type="text"
      value={inputValue}
      onChange={(e) => onInputChange(e.target.value)}
      placeholder="enter your value"
      onKeyDown={e => e.key === 'Enter' && onAdd()}
      />
      <button onClick={onAdd}>add</button>
    </div>
  );
}

export default TodoForm;