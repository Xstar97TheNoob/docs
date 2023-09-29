import React from 'react';
import PropTypes from 'prop-types';

// Define the TrainList component
const TrainsOverView = ({ trainsData }) => {
  return (
    <ul>
      {trainsData.map(train => (
        <li key={train.name}>
          <a href={`#${train.name}`}>{train.name}</a>
        </li>
      ))}
    </ul>
  );
};

TrainsOverView.propTypes = {
  trainsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TrainsOverView;
