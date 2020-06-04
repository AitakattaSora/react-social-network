const ADD_POST = 'ADD_POST';
const UPDATE_POST_INPUT_FIELD = 'UPDATE_POST_INPUT_FIELD';

const initialState = {
  posts: [
    { id: 1, post: "What's up?", likesCount: 5 },
    { id: 2, post: 'This is my first react app', likesCount: 7 },
    { id: 3, post: 'No one loves me', likesCount: 19 },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  // Функция должна быть чистой
  // Нельзя менять существующий объект
  switch (action.type) {
    case ADD_POST: {
      const stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      const post = {
        id: stateCopy.posts.length + 1,
        post: stateCopy.newPostText,
        likesCount: 0,
      };
      stateCopy.posts.push(post);
      stateCopy.newPostText = '';
      return stateCopy;
    }

    case UPDATE_POST_INPUT_FIELD: {
      const stateCopy = { ...state };
      stateCopy.newPostText = action.body;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updatePostInputField = (text) => ({
  type: UPDATE_POST_INPUT_FIELD,
  body: text,
});

export default profileReducer;
