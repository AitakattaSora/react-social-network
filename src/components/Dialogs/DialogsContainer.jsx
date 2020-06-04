import {
  sendMessage,
  updateDialogInputField,
} from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const state = store.getState();
//         const { dispatch } = store;

//         const { dialogs, messages, newMessageText } = state.dialogsPage;

//         const onClickHandler = () => {
//           dispatch(sendMessage());
//         };

//         const onChangeHandler = (text) => {
//           dispatch(updateDialogInputField(text));
//         };

//         return (
//           <Dialogs
//             messages={messages}
//             dialogs={dialogs}
//             newMessageText={newMessageText}
//             onInputChange={onChangeHandler}
//             onButtonClick={onClickHandler}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: () => {
      dispatch(sendMessage());
    },
    onInputChange: (text) => {
      dispatch(updateDialogInputField(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
