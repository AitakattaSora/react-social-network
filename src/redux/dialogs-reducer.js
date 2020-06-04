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
      const stateCopy = { ...state };
      stateCopy.newMessageText = action.body;
      return stateCopy;
    }

    case SEND_MESSAGE: {
      const stateCopy = { ...state };
      const body = stateCopy.newMessageText;
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push({
        id: stateCopy.messages.length + 1,
        message: body,
      });
      stateCopy.newMessageText = '';
      return stateCopy;
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
