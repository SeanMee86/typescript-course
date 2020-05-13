import React, { useState } from 'react';

import ToDoList from "./components/ToDoList";
import NewTodo from "./components/NewToDo";

import {Todo} from "./todo.model";


const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const retrieveTodo = (todo: Todo) => {
        setTodos(prevTodos => [...prevTodos, todo]);
    }

    const todoDeleteHandler = (todoId: string): void => {
        setTodos(prevTodos =>
            prevTodos.filter(todo => todoId !== todo.id)
        );
    }

    return (
      <div className={'App'}>
          <NewTodo getTodo={retrieveTodo} />
          <ToDoList onTodoDelete={todoDeleteHandler} items={todos}/>
      </div>
  )
}

export default App;
