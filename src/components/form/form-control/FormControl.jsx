import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../form-group/FormGroup';
import { Controller } from 'react-hook-form';

const FormControl = (props) => {
  const { type, name, placeholder, cName, message, form } = props;
  const { errors, formState } = form;
  const hasError = errors[name];
  // console.log(message?.[name]);
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ onChange, onBlur }) => (
        <FormGroup
          onBlur={onBlur}
          onChange={onChange}
          name={name}
          type={type}
          placeholder={placeholder}
          status={hasError ? 'error' : message?.[name] ? 'error' : ''}
          message={hasError?.message || message?.[name] || ''}
        />
      )}
    />
  );
};

FormControl.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  cName: PropTypes.string,
  status: PropTypes.string,
  message: PropTypes.object,
};
FormControl.defaultProps = {
  message: {},
};

export default FormControl;
