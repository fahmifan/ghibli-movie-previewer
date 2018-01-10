import React from 'react';
import logo from '../../logo.svg';

export default () => (
  <section>
    <article className="fl w-100 w-50-m w-25-ns pa2-ns">
      <div className="aspect-ratio aspect-ratio--1x1">
        <img src={logo} alt="pic" className="items-center"/>
      </div>
      <a href="#" className="ph2 ph0-ns pb3 link db">
        <h3 className="f5 f4-ns mb0 black-90">Title</h3>
        <h3 className="f6 f5 fw4 mt2 black-60">Subtitle</h3>
      </a>
    </article>
  </section>
);