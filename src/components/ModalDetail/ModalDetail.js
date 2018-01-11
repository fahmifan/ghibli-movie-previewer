import React from 'react';

export default (props) => {
  const title = props.detail.title;
  const desc = props.detail.description;
  const director = props.detail.director;
  const closeIcon = (
    <svg
      onClick={props.closeButtonClicked}
      className="h1 w1 fr ba center b--black-30 br-100 pa1 pointer"
      xmlns="http://www.w3.org/2000/svg">
      <line x1="2" y1="13" 
            x2="13" y2="2" 
            stroke="black" 
            strokeWidth="2"/>
      <line x1="1" y1="1" 
            x2="13" y2="13" 
            stroke="black" 
            strokeWidth="2"/>
    </svg>
  );
  let isClose = '';
  if(props.backdropClose || props.modalClose) {
    isClose = 'dn';
  }
  return (
    <span 
      className={`w5 mt3 mt6-ns w-50-ns bg-white fixed pa2 br3 tl z-200 helvetica shadow-3 ${isClose}`}>
      {closeIcon}
      <p className="f3 mt3">{title}</p>
      <p className="f5">Director: <i>{director}</i></p>
      <p className="f4">{desc}</p>
    </span>
  )
};