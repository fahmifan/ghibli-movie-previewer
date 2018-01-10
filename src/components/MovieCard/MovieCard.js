import React from 'react';
import logo from '../../logo.svg';

export default (props) => {
  const star = (
    <svg style={{height: 25, width: 25, fill: '#FFD055'}} className="star rating" data-rating="1">
      <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style={{fillRule: "nonzero"}} />
    </svg>
  );

  return (
    <section>
      <article className="fl w-100 w-50-m w-25-ns pa2-ns mv3">
        <div className="m-100 h5 flex flex-column items-center shadow-4">
          <img src={logo} alt="pic" className="h-100 items-center"/>
        </div>
        <a href="#" className="pv2 ph3 ph0-ns pb3 link db helvetica shadow-4">
          <h3 className="f5 f4-ns mb0 black-90">Castle in the Sky</h3>
          <h3 className="f6 f5 fw4 mt2 mb0 black-60">Release date: 1986</h3>
          <div className="w3 h2 flex flex-row items-center">
            <span>{star}</span> <span>95</span>
          </div>
        </a>
      </article>
    </section>
  );
}