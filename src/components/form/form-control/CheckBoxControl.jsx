import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import CheckBoxField from '../form-field/CheckBoxField';

const CheckBoxControl = (props) => {
  const { type, name, form } = props;
  const { errors } = form;

  return (
    <Controller
      control={form.control}
      name={name}
      render={({ onChange }) => {
        return <CheckBoxField error={errors?.[name]?.message || ''} onChange={onChange} name={name} />;
      }}
    />
  );
};

CheckBoxControl.propTypes = {};

export default CheckBoxControl;
