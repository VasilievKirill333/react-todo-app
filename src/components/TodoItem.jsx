import { useState } from 'react';

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
    <li>
        {isEditing ? (
            <input
            type='text'
            value={editText}
            onChange={(e)=> setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleCancel}
            autoFocus
            />
        ) : (
      <span
        onDoubleClick={()=>setIsEditing(true)}
        onClick={() => onToggle(todo.id)}
        style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
      >
        {todo.text}
      </span>)}
      <button onClick={() => onRemove(todo.id)}>×</button>
    </li>
  );
}

export default TodoItem;