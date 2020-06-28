import React from 'react';

const ActionButton = (props) => {
  return (
    <button
      style={{
        cursor: 'pointer',
        border: 'none',
        color: 'white',
        padding: '10px 20px',
        textAlign: 'center',
        display: 'inline-block',
        fontSize: '15px',
        borderRadius: '10px',
        backgroundColor: '#1f3a4c',
        marginTop: '10px',
      }}
      className={props.className}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default ActionButton;
