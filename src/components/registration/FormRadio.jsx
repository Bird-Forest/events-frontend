import { useField } from 'formik';
import React from 'react';
import { ErrorMessage, RadioWrap } from './Register.styled';
import { useTranslation } from 'react-i18next';

export default function FormRadio({ name, options }) {
  const { t } = useTranslation();
  const [field, meta] = useField(name);
  const errorClass = meta.touched && meta.error ? 'error' : '';

  return (
    <RadioWrap>
      <h4 className="radio-title">{t('auth.info')}</h4>
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
