import React, { useRef } from "react";
import './NewTodo.css';

interface GetTodoProps {
    getTodo: (todo: {id: string, text: string}) => void;
}

const NewTodo: React.FC<GetTodoProps> = (props) => {

    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.getTodo({id: Math.random().toString(), text: enteredText})
        textInputRef.current!.value = ''
    }

    return (
        <form> onSubmit={todoSubmitHandler}>
            <div className={'form-control'} >
                <label htmlFor="todo-text">Todo Text</label>
                <input ref={textInputRef} type="text" id="todo-text"/>
            </div>
            <button type={'submit'}>ADD TODO</button>
        </form>
    )
}

export default NewTodo;