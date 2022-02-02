import React from "react";

const Button = (props) => {
  return (
    <button
      className='text-sm bg-sky-500 hover:bg-sky-300 rounded-full my-2 p-1 w-20'
      type={props.type || "button"}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
