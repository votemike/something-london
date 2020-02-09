import React from 'react';
import './Barrel.scss';

function Barrel({ items }) {
  return (
    <div className="barrel">
      <a target="_blank" rel="noopener noreferrer" href={items[0].href} className="selection link side">{items[0].name}</a>
      <div className="side">{items[1].name}</div>
      <div className="side">{items[2].name}</div>
      <div className="side">{items[3].name}</div>
      <div className="side">{items[4].name}</div>
      <div className="side">{items[5].name}</div>
    </div>
  );
}

export default Barrel
