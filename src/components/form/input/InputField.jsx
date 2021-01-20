import React from 'react';
import PropTypes from 'prop-types';

const InputField = (props) => {
  const { type, placeholder, name, cName } = props;
  return <input type={type} placeholder={placeholder} name={name} className={`form-input ${cName}`} />;
};

InputField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  cName: PropTypes.string,
};
InputField.defaultProps = {
  cName: '',
};

export default InputField;
