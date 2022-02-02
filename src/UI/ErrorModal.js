import React from "react";
import Card from "./Card";
import Button from "./Button";
const ErrorModal = (props) => {
  return (
    <>
      <div
        className='fixed top-0 left-0 h-screen w-full bg-slate-300 opacity-50'
        onClick={props.onConfirm}></div>
      <div className='overflow-y-auto fixed right-0 left-0 top-4 justify-center items-center md:inset-0 h-modal sm:h-full'>
        <Card>
          <header className='p-1'>
            <h2>{props.title}</h2>
          </header>
          <div className='p-1'>
            <p>{props.msg}</p>
          </div>
          <footer className='flex flex-end'>
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
        </Card>
      </div>
    </>
  );
};

export default ErrorModal;
