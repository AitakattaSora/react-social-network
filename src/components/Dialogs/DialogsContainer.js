import {
  sendMessageAC,
  updateDialogInputFieldAC,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(sendMessageAC());
    },
    onChange: (text) => {
      dispatch(updateDialogInputFieldAC(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
