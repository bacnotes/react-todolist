import React from "react";
import Card from "../UI/Card";
const TodoList = (props) => {
  return (
    <Card>
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id} className='flex justify-between'>
            <span>{todo.name}</span>
            <span>{todo.date}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TodoList;
