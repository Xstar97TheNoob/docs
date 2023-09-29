import React from 'react';
import HelperUtil, { capitalizeWords } from './HelperUtil.js';

const MarkdownTrains = ({ trains }) => {
  return (
    <>
      {trains.map(train => (
        <>
        <a href={`#${capitalizeWords(train.name)}`}>{capitalizeWords(train.name)}</a>
        <br />
        </>
      ))}
    </>
  );
};

export default MarkdownTrains;
