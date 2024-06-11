import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormInput from './FormInput';
import FormRadio from './FormRadio';
import { FormWrap } from './Register.styled';
import { useUpdateEventMutation } from '../../redux/EventSlice';
import { useTranslation } from 'react-i18next';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .required('This field is required'),
  email: Yup.string().email('Invalid email').required('This field is required'),
  radio: Yup.string().required('Please select'),
});

const initialValues = {
  name: '',
  email: '',
  radio: '',
};

export default function Registration({ id, data }) {
  const { t } = useTranslation();
  const radioOptions = [
    { value: 'Social media', label: `${t('radio.label1')}` },
    { value: 'Friends', label: `${t('radio.label2')}` },
    { value: 'Found myself', label: `${t('radio.label3')}` },
  ];

  const [updateEvent] = useUpdateEventMutation();

  return (
    <FormWrap>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          let arr = data.participants.concat(values);

          let newData = {
            title: data.title,
            description: data.description,
            date: data.date,
            organizer: data.organizer,
            participants: arr,
          };

          updateEvent({ id, newData });
          setSubmitting(true);

          resetForm();
        }}
      >
        {props => (
          <Form className="my-form" autoComplete="off">
            <h3 className="my-title">{t('auth.title')}</h3>
            <FormInput label={t('auth.name')} name="name" type="text" />
            <FormInput label="Email" name="email" type="email" />
            <FormRadio name="radio" options={radioOptions} />
            <button type="submit" className="button">
              {props.isSubmitting ? 'loading...' : `${t('auth.btn')}`}
            </button>
          </Form>
        )}
      </Formik>
    </FormWrap>
  );
}
