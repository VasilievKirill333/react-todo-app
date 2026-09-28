import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ items, onRemove, onToggle }) {
  return (
       <ul>
        {items.map(item => (
        <TodoItem key={item.id} item={item} onRemove={onRemove} onToggle={onToggle}/>
      ))}
      </ul>
  )
}

export default TodoList