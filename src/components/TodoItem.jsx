import { useState } from 'react';
import styles from './TodoItem.module.css';

function TodoItem({ todo, onRemove, onToggle, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const [isRemoving, setIsRemoving] = useState(false);

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

    function handleRemoveClick() {
        setIsRemoving(true);
        setTimeout(() => {
            onRemove(todo.id);
        }, 200);
    }

    return (
    <li className={isRemoving ? `${styles.item} ${styles.removing}` : styles.item}>
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
        onClick={handleRemoveClick}>
            ×
        </button>
    </li>
  );
}

export default TodoItem;