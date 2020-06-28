import React from 'react';

const MultilineField = (props) => {
  let { width, height, placeholder, value, onChange } = props;

  if (width === undefined && height === undefined) {
    width = '400px';
    height = '50px';
  }

  return (
    <div>
      <textarea
        style={{
          width,
          height,
          padding: '10px',
          border: 0,
          borderRadius: '3px',
        }}
        placeholder={placeholder}
        type='text'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default MultilineField;
