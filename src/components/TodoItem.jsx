import React from 'react'

function TodoItem({ item, onRemove, onToggle }) {
  return (
        <li>
            <span onClick={()=>onToggle(item.id)} style={{ textDecoration: item.done ? 'line-through' : 'none' }}>{item.text}</span>
            <button onClick={() => onRemove(item.id)}>×</button>
        </li>
  )
}

export default TodoItem