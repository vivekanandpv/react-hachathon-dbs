import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { httpService } from '../http-service';
import { useHistory } from 'react-router-dom';

const CustomerForm = (props) => {
  const history = useHistory();

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().required('Email is required'),
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const handleSubmit = (formData) => {
    httpService
      .post('customers', formData)
      .then((r) => {
        console.log('Success', r);
        history.push('/customers');
      })
      .catch((e) => {
        console.log('Error', e.message);
        alert('Error!');
      });
  };

  return (
    <>
      <h4>New Customer Registration</h4>
      <hr />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className='form-group'>
            <label>First Name</label>
            <Field type='text' className='form-control' name='firstName' />
            <div className='form-text text-danger'>
              <ErrorMessage name='firstName' />
            </div>
          </div>

          <div className='form-group mt-4'>
            <label>Last Name</label>
            <Field type='text' className='form-control' name='lastName' />
            <div className='form-text text-danger'>
              <ErrorMessage name='lastName' />
            </div>{' '}
          </div>

          <div className='form-group mt-4'>
            <label>Email</label>
            <Field type='text' className='form-control' name='email' />
            <div className='form-text text-danger'>
              <ErrorMessage name='email' />
            </div>{' '}
          </div>

          <button className='btn btn-primary mt-4' type='submit'>
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default CustomerForm;
