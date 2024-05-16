import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormInput from './FormInput';
import FormRadio from './FormRadio';
import { FormWrap } from './Register.styled';
import { useUpdateEventMutation } from '../../redux/EventSlice';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .required('This field is required'),
  email: Yup.string().email('Invalid email').required('This field is required'),
  birthday: Yup.date()
    .min(new Date(1900, 0, 1))
    .required('This field is required'),
  radio: Yup.string().required('Please select'),
});

const initialValues = {
  name: '',
  email: '',
  birthday: '',
  radio: '',
};

export default function Registration({ id, data }) {
  const radioOptions = [
    { value: 'Social media', label: 'Social media' },
    { value: 'Friends', label: 'Friends' },
    { value: 'Found myself', label: 'Found myself' },
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
            <h3 className="my-title"> Event registration</h3>
            <FormInput label="Full name*" name="name" type="text" />
            <FormInput label="Email*" name="email" type="email" />
            <FormInput label="Birthday*" name="birthday" type="date" />
            <FormRadio name="radio" options={radioOptions} />
            <button type="submit" className="button">
              {props.isSubmitting ? 'loading...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </FormWrap>
  );
}
