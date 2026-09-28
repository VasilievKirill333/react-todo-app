import TodoItem from './TodoItem';

function TodoList({ todos, onRemove, onToggle, onEdit }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
        key={todo.id}
        todo={todo}
        onRemove={onRemove}
        onToggle={onToggle}
        onEdit={onEdit} 
        />
      ))}
    </ul>
  );
}

export default TodoList;