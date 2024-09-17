import React from 'react'

export default function TodoList() {

    let todos = [
        'Attend Choir rehersal.',
        'Study React.',
        'Go to the gym.'
    ]
  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) => {
            return (
                <li className='todoItem' key={todoIndex}>{todo}
                <i class="fa-solid fa-pen-to-square"></i>
                </li>
            )
        })}
    </ul>
  )
}