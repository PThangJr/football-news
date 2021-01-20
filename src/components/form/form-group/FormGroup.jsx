import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../input/InputField';

const FormGroup = (props) => {
  const { type, name, placeholder, cName, message, status } = props;
  //   const hasError = error ? 'form-group--error' : '';
  const hasStatus = status === 'success' ? 'form-group--success' : status === 'error' ? 'form-group--error' : '';
  const renderStatus = () => {
    if (status === 'success') {
      return (
        <span className="icon-box icon-box--success">
          <i className="fas fa-check"></i>
        </span>
      );
    } else if (status === 'error') {
      return (
        <span className="icon-box icon-box--error">
          <i className="fas fa-times"></i>
        </span>
      );
    }
  };
  return (
    <div className={`form-group ${hasStatus}`}>
      <div className="form-field">
        <InputField type={type} name={name} placeholder={placeholder} className={cName} />
        {renderStatus()}
      </div>
      {hasStatus === 'form-group--error' && (
        <span className="form-message">
          <span>(*)</span>
          {message}
        </span>
      )}
    </div>
  );
};

FormGroup.propTypes = {};

export default FormGroup;