import React, { FC, FormEvent, useRef, useContext } from 'react';
import { TodosContext } from './store/todos-context';

import classes from './NewTodo.module.css';
  
const NewTodo: FC = () => {

  const todosCtx = useContext(TodosContext);
  
    const todoTextInput = useRef<HTMLInputElement>(null);

    const submitHandler = (event: FormEvent) => {
         
        event.preventDefault();
        const enteredText = todoTextInput.current!.value;

        if(enteredText.trim().length === 0){
           return;
        };

       todosCtx.addTodo(enteredText);

    };
    return ( 

        <form onSubmit={ submitHandler } className={classes.form}>
          <label htmlFor='text'>Todo text</label>
          <input type='text' id='text' ref={todoTextInput}/>
          <button>Add Todo</button>
        </form>

     );
}
 
export default NewTodo;