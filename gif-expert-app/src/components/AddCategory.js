import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length > 0) {
      setCategories((c) => [...c, inputValue]);
      setInputValue('');
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Add category'
          onChange={handleInputChange}
          value={inputValue}
          type='text'
        />
      </form>
    </Fragment>
  );
};

AddCategory.prototypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
