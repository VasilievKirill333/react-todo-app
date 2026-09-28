import { useState } from 'react';
import styles from './TodoItem.module.css';

function TodoItem({ todo, onRemove, onToggle, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
  
    function handleSave() {
        if (editText.trim() === '') {
            setEditText(todo.text); // пусто → возвращаем старый текст
        } else {
            onEdit(todo.id, editText.trim());
        }
        setIsEditing(false);
  }

    function handleCancel() {
        setEditText(todo.text);
        setIsEditing(false);
    }

    function handleKeyDown(e) {
     if (e.key === 'Enter') {
        handleSave();
    } else if (e.key === 'Escape') {
        handleCancel();
    }
}

    return (
    <li className={styles.item}>
        {isEditing ? (
            <input
            className={styles.editInput}
            type='text'
            value={editText}
            onChange={(e)=> setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleCancel}
            autoFocus
            />
        ) : (
      <span
        className={todo.done ? `${styles.text} ${styles.done}` : styles.text}
        onDoubleClick={()=>setIsEditing(true)}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>)}
      <button
        className={styles.remove}
        onClick={() => onRemove(todo.id)}>
            ×
        </button>
    </li>
  );
}

export default TodoItem;