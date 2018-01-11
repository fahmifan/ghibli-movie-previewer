import React from 'react';
import logo from '../../logo.svg';

export default (props) => {
  const star = (
    <svg style={{height: 25, width: 25, fill: '#FFD055'}} className="star rating" data-rating="1">
      <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style={{fillRule: "nonzero"}} />
    </svg>
  );

  const truncateString = (str, num) => {
    if(str.length > num) {
      if(num <= 3) {
        return  str.slice(0,num) + "...";
      }
      return  str.slice(0,num-3) + "...";
    }
    return str;
  }

  return (
    <section>
      <article className="fl w-100 w-50-m w-25-ns pa2-ns mv3 dim pointer z-50" onClick={props.clicked}>
        <div className="aspect-ratio aspect-ratio--1x1 h-100 pb0 flex flex-row justify-center shadow-3 bg-white br3 br--top">
          <img src={logo} alt="pic" className="dib w-100 h-100"/>
        </div>
        <a href="#" className="mt1 pv2 ph3 pb3 link db helvetica shadow-3 bg-white b3 br3 br--bottom">
          <h3 className="f5 f4-ns mb0 black-90">{truncateString(props.title, 15)}</h3>
          <h3 className="f6 f5 fw4 mt2 mb0 black-60">Release date: {props.relDate}</h3>
          <div className="w3 h2 flex flex-row items-center">
            <span>{star}</span> <span className="black">{props.rtScore}</span>
          </div>
        </a>
      </article>
    </section>
  );
}