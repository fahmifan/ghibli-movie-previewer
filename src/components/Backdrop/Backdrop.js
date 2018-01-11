import React from 'react';

const backdrop = (props) => {
  let isDisplayed = '';
  if(props.modalClose) {
    isDisplayed = 'dn';
  }
  return  (
    <div 
      onClick={props.clicked}
      className={`Backdrop ${isDisplayed} pointer`}
      ></div> 
    );
}

export default backdrop;