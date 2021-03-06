import React from 'react';
import './styles.scss';

const Windows98 = (props) => (
    <div className="window" style={{width: props.width, height: props.height}}>
    <div className="title-bar">
      <div className="title-bar-text">{props.title}</div>
      <div className="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close"></button>
      </div>
    </div>
    <div className="window-body">
      {props.children}
    </div>
  </div>
);

export default Windows98;
