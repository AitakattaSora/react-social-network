import React from 'react';
import { useState, useEffect } from 'react';

const StatusWithHooks = (props) => {
  const [editorMode, setEditorMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const enableEditorMode = () => {
    setEditorMode(true);
  };

  const disableEditorMode = () => {
    if (!status) {
      alert('Status cannot be empty');
      return;
    }
    setEditorMode(false);
    props.updateStatus(props.profile.id, status);
  };

  const onChangeHanlder = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div
      style={{
        marginTop: 10,
      }}
    >
      {!editorMode ? (
        <div
          style={{
            fontStyle: 'italic',
          }}
          onDoubleClick={enableEditorMode}
        >
          <span>{status}</span>
        </div>
      ) : (
        <div onBlur={disableEditorMode}>
          <input
            type='text'
            onChange={onChangeHanlder}
            autoFocus
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default StatusWithHooks;
