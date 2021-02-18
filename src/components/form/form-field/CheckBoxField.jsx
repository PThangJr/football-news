import React from 'react';
import PropTypes from 'prop-types';

const CheckBoxField = (props) => {
  const { onChange, name, error } = props;
  // console.log(error);
  return <input onChange={(e) => onChange(e.target.checked)} className="checkbox" type="checkbox" name={name} />;
};

CheckBoxField.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  error: PropTypes.string,
};

export default CheckBoxField;
