import React from 'react';

const MarkdownTrains = ({ trains }) => {
  return (
    <>
      {trains.map(train => (
        <>
        <a href={`#${train.name}`}>{train.name}</a>
        <br />
        </>
      ))}
    </>
  );
};

export default MarkdownTrains;
