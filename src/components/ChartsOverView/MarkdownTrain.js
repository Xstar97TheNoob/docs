import React from 'react';

const MarkdownTrain = ({ trains }) => {
  return (
    <ul>
      {trains.map(train => (
        <li key={train.name}>
          <a href={`#${train.name}`}>{train.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default MarkdownTrain;
