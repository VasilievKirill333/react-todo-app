import TodoItem from './TodoItem';
import styles from './TodoList.module.css'; 

function TodoList({ todos, onRemove, onToggle, onEdit }) {
  return (
    <ul className='styles.list'>
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