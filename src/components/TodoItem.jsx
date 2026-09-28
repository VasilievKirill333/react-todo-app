function TodoItem({ todo, onRemove, onToggle }) {
  return (
    <li>
      <span
        onClick={() => onToggle(todo.id)}
        style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
      >
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>×</button>
    </li>
  );
}

export default TodoItem;