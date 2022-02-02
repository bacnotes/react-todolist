import React, { useState } from "react";
import Card from "./../UI/Card";
import Button from "./../UI/Button";
import ErrorModal from "./../UI/ErrorModal"
const AddTodo = (props) => {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [error, setError] = useState();
  
  const errorHandler = () => {
    setError(null)
  }
  const addTodoHandler = (e) => {
    e.preventDefault();
    // validation
    if (!todo.trim()) {
      setError({
        title:'Invalid title',
        msg: 'Please enter a valid title'
      })
      return;
    }
    if (!date.trim()){
      setError({
        title: "Invalid date",
        msg: "Please enter a valid date",
      });
      return;
    }
    // console.log(todo, date);
    props.onAddTodo(todo, date);
    setTodo("");
    setDate(new Date().toISOString().split("T")[0]);
  };
  const todoChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  return (
    <Card>
      <form
        className='flex flex-col items-left gap-1'
        onSubmit={addTodoHandler}>
        <label className='font-semibold ' htmlFor='todo'>
          Todo
        </label>
        <input
          onChange={todoChangeHandler}
          value={todo}
          className=' bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com'
          type='text'
          size='20'
          maxLength='20'
          id='todo'
        />
        <label className='font-semibold ' htmlFor='date'>
          Deadline
        </label>
        <input
          onChange={dateChangeHandler}
          value={date}
          className=' bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com'
          type='date'
          id='date'
        />
        <Button type='submit'>Add Todo</Button>
      </form>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          msg={error.msg}
        />
      )}
    </Card>
  );
};

export default AddTodo;
