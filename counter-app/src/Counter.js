import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const handleReset = () => setCounter(value);

  const handleSubtract = () => setCounter(counter - 1);

  return (
    <div className='text-center'>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button className='btn btn-primary mr-2' onClick={handleClick}>
        +1
      </button>
      <button className='btn btn-secondary mr-2' onClick={handleReset}>
        Reset
      </button>
      <button className='btn btn-danger' onClick={handleSubtract}>
        -1
      </button>
    </div>
  );
};

Counter.propTypes = {
  value: PropTypes.number,
};

export default Counter;
