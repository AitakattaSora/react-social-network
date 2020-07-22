import React from 'react';
import { Field, useField } from 'formik';

const FormikTextarea = (props) => {
  const width = props.width ? props.width : '400px';
  const height = props.height ? props.height : '50 px';

  const [field] = useField(props);

  return (
    <Field
      {...field}
      as='textarea'
      style={{
        width,
        height,
        padding: '10px',
        border: 0,
        borderRadius: '3px',
      }}
      placeholder={props.placeholder}
    />
  );
};

export default FormikTextarea;
