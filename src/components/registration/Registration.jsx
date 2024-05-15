import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormInput from './FormInput';
import FormRadio from './FormRadio';
import { FormWrap } from './Register.styled';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .required('This field is required'),
  email: Yup.string().email('Invalid email').required('This field is required'),
  birthDate: Yup.date()
    // .nullable('YYYY.MM.DD')
    .min(new Date(1900, 0, 1))
    .required('YYYY.MM.DD'),
  radioValue: Yup.string().required('Please select'),
  //   picked: Yup.string().required('Please select'),
});

const initialValues = {
  name: '',
  email: '',
  birthDate: '',
  radioValue: '',
};

export default function Registration() {
  const radioOptions = [
    { value: 'Social media', label: 'Social media' },
    { value: 'Friends', label: 'Friends' },
    { value: 'Found myself', label: 'Found myself' },
  ];
  return (
    <FormWrap>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(true);
            console.log(values);
            resetForm();
          }, 400);
        }}
      >
        {props => (
          <Form className="my-form" autoComplete="off">
            <h3 className="my-title"> Event registration</h3>
            <FormInput label="Name*" name="name" type="text" />
            <FormInput label="Email*" name="email" type="email" />
            <FormInput label="Date*" name="birthDate" type="birthDate" />
            {/* <FormRadio label="picked" name="picked" type="radio" /> */}
            <FormRadio name="radioValue" options={radioOptions} />
            <button type="submit" className="button">
              {props.isSubmitting ? 'loading...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </FormWrap>
  );
}
