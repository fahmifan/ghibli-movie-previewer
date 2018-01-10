import React from 'react';

export default (props) => {
  const title = props.detail.title;
  const desc = props.detail.description;
  const director = props.detail.director;
  return (
   <span className="w5 bg-white fixed pa2 br3 tl db z-200 helvetica shadow-3">
    <p className="f3">{title}</p>
    <p className="f5">Director: <i>{director}</i></p>
    <p className="f4">{desc}</p>
  </span>
)
};