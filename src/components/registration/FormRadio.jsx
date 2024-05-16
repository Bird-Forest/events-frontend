import { useField } from 'formik';
import React from 'react';
import { ErrorMessage, RadioWrap } from './Register.styled';

export default function FormRadio({ name, options }) {
  const [field, meta] = useField(name);
  const errorClass = meta.touched && meta.error ? 'error' : '';

  return (
    <RadioWrap>
      {options.map(option => (
        <label key={option.value} className={`label-picked ${errorClass}`}>
          <input
            type="radio"
            {...field}
            value={option.value}
            checked={field.value === option.value}
            className={`input-input ${errorClass}`}
          />
          {option.label}
        </label>
      ))}
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </RadioWrap>
  );
}
