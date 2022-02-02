import ReactDOM from "react-dom";
import React from "react";
import Card from "./Card";
import Button from "./Button";
const Backdrop = (props) => {
  return (
    <div
      className='fixed top-0 left-0 h-screen w-full bg-slate-300 opacity-50 z-40'
      onClick={props.onConfirm}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className='overflow-y-auto fixed right-0 left-0 top-4 justify-center items-center md:inset-0 h-modal sm:h-full z-50'>
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
  );
};
const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          msg={props.msg}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
