const SEND_MESSAGE = 'SEND_MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            message: action.message,
          },
        ],
      };
    }

    default:
      return state;
  }
};

// Action creators
export const sendMessage = (message) => ({ type: SEND_MESSAGE, message });

export default dialogsReducer;
