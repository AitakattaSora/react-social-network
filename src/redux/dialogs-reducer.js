const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_DIALOG_INPUT_FIELD = 'UPDATE_DIALOG_INPUT_FIELD';

const initialState = {
  dialogs: [
    { id: 1, name: 'Ann' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Helen' },
    { id: 5, name: 'Samantha' },
  ],
  messages: [
    { id: 1, message: 'Hello!' },
    { id: 2, message: 'What is up?' },
    { id: 3, message: 'How are you doing?' },
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DIALOG_INPUT_FIELD: {
      return {
        ...state,
        newMessageText: action.body,
      };
    }

    case SEND_MESSAGE: {
      const message = {
        id: state.messages.length + 1,
        message: state.newMessageText,
      };
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, message],
      };
    }

    default:
      return state;
  }
};

export const sendMessage = () => ({ type: SEND_MESSAGE });

export const updateDialogInputField = (text) => ({
  type: UPDATE_DIALOG_INPUT_FIELD,
  body: text,
});

export default dialogsReducer;
