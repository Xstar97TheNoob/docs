import React from 'react';
import HelperUtil, { capitalizeWords } from './HelperUtil.js';

const MarkdownTrains = ({ trains }) => {
  return (
    <ul>
      {trains.map(train => (
        <li key={train.name}>
          <a href={`#${capitalizeWords(train.name)}`}>{capitalizeWords(train.name)}</a>
        </li>
      ))}
    </ul>
  );
};

export default MarkdownTrains;
