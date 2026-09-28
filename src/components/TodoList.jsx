import TodoItem from './TodoItem';

function TodoList({ todos, onRemove, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </ul>
  );
}

export default TodoList;