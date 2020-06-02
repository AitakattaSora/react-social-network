import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message.jsx';
import DialogItem from './DialogItem/DialogItem';
import { sendMessage, updateInputField } from './../../redux/dialogs-reducer';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));

  let messagesElements = state.messages.map((msg) => {
    return <Message message={msg.message} />;
  });

  let onClickHandler = () => {
    props.dispatch(sendMessage());
  };

  let onChangeHandler = (event) => {
    let message = event.target.value;
    props.dispatch(updateInputField(message));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div className={s.inputField}>
          <textarea
            value={props.dialogsPage.newMessageText}
            onChange={onChangeHandler}
            placeholder='Start writing message...'
            cols='30'
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
