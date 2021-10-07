import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = ({ value, onChange, onBlur }) => {
  return (
    <>
      <Label htmlFor={'lab'}>
        Find contacts by name
        <Input
          type="text"
          id={'lab'}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </Label>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
