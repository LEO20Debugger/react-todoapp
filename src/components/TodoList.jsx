import React from 'react'
import TodoCard from './TodoCard'

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
                    <TodoCard key={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}