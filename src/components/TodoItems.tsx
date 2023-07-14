import classes from './TodoItem.module.css';

import React, { FC } from "react";

import Todo from "./models/todo";

const TodoItems: FC<{ text: string, onRemoveTodo: () => void }> = ( props ) => {
  return (
    <div style={{'cursor': 'pointer'}}>
      <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
    </div>
  );
};

export default TodoItems;
