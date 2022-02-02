import React from 'react';

const Card = (props) => {
  return <div className='drop-shadow-md bg-slate-50 p-2 m-5'>{props.children}</div>;
}

export default Card;
