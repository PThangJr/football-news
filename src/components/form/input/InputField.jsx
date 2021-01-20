import React from 'react';
import PropTypes from 'prop-types';

const InputField = (props) => {
  const handleChange = (e) => {
    console.log(e.target);
  };
  const { type, placeholder, name, cName } = props;
  return <input type={type} placeholder={placeholder} name={name} className={`form-input`} />;
};

InputField.propTypes = {};

export default InputField;
