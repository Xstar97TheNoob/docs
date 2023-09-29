import React from 'react';

const MarkdownTrain = ({ chart }) => {
  // Assuming you want to link to an element with the same id as chart
  const link = `#${chart}`;

  return (
    <a href={link}>{chart}</a>
  );
};

export default MarkdownTrain;
