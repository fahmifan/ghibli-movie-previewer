import React from 'react';

const backdrop = (props) => (
  props.showed ? (
    <div 
      className="Backdrop"
      onClick={props.clicked}
      ></div>
  ) : null 

);

export default backdrop;