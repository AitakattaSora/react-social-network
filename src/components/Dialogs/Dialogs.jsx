import React from 'react';
import styles from './Dialogs.module.css';
import Message from './Message/Message.jsx';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
  const dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));

  const messagesElements = props.messages.map((msg) => {
    return <Message message={msg.message} />;
  });

  const onClickHandler = () => {
    props.onButtonClick();
  };

  const onChangeHandler = (event) => {
    let message = event.target.value;
    props.onInputChange(message);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div className={styles.inputField}>
          <textarea
            value={props.newMessageText}
            onChange={onChangeHandler}
            placeholder='Start writing message...'
            cols='50'
            rows='10'
          ></textarea>
          <div>
            <button onClick={onClickHandler}>Send Message</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dialogs;
