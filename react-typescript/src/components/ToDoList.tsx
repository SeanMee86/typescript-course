import React from 'react';
import './ToDoList.css';

interface ToDoListProps {
    items: {id: string, text: string}[];
    onTodoDelete: (todoId: string) => void;
}

const ToDoList: React.FC<ToDoListProps> = props => {

    return (
        <ul>
            {props.items.map(todo =>
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={() => props.onTodoDelete(todo.id)}>DELETE</button>
                </li>
            )}
        </ul>
    )
}

export default ToDoList;