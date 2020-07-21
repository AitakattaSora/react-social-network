import React from 'react';
import { Formik, Form, Field } from 'formik';

export const Login = () => {
  console.log('render');
  return (
    <div>
      <Formik
        initialValues={{ firstName: '', lastName: '', remember: false }}
        onSubmit={(data, { resetForm }) => {
          console.log('submit:', data);
          resetForm();
        }}
      >
        {({ values }) => (
          <Form>
            <Field name='firstName' placeholder='first name' />
            <div>
              <Field name='lastName' placeholder='last name' />
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
            <div>
              <label>
                <Field type='checkbox' name='remember' />
                <span>Remeber me</span>
              </label>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
