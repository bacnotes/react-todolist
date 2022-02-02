import React, { useState } from "react";

import AddTodo from "./Todos/AddTodo";
import TodoList from "./Todos/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    {
      name: "Todo",
      date: new Date().toISOString().split("T")[0],
      id: "0.2341231",
    },
  ]);
  const addTodoHandler = (todo, date) => {
    setTodoList((prev) => {
      return [...prev, { name: todo, date, id: Math.random().toString() }];
    });
  };
  return (
    <div>
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList todos={todoList} />
    </div>
  );
}

export default App;
