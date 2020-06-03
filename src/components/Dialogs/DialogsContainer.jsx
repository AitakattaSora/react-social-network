import React from 'react';
import {
  sendMessage,
  updateDialogInputField,
} from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const { dispatch } = store;

        const { dialogs, messages, newMessageText } = state.dialogsPage;

        const onClickHandler = () => {
          dispatch(sendMessage());
        };

        const onChangeHandler = (text) => {
          dispatch(updateDialogInputField(text));
        };

        return (
          <Dialogs
            messages={messages}
            dialogs={dialogs}
            newMessageText={newMessageText}
            onInputChange={onChangeHandler}
            onButtonClick={onClickHandler}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
