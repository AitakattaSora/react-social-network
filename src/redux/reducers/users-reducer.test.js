const { default: usersReducer } = require('./users-reducer');

const state = {
  users: [
    {
      id: 1,
      name: 'Andreane',
      location: {
        city: 'Roscoefort',
        country: 'Vietnam',
      },
      photos: {
        small: 'https://fakeimg.pl/500x500/282828/?retina=1&text=Andreane',
        large: 'https://fakeimg.pl/500x500/282828/?retina=1&text=Andreane',
      },
      status: 'At necessitatibus sed.',
      followed: false,
    },
    {
      id: 2,
      name: 'Emelia',
      location: {
        city: 'Port Rodolfofurt',
        country: 'Cambodia',
      },
      photos: {
        small: 'https://fakeimg.pl/500x500/282828/?retina=1&text=Emelia',
        large: 'https://fakeimg.pl/500x500/282828/?retina=1&text=Emelia',
      },
      status: 'Earum consequuntur omnis.',
      followed: false,
    },
  ],
};
test('followed is true after follow action', () => {
  const action = { type: 'FOLLOW_USER', userId: 1 };
  const newState = usersReducer(state, action);

  expect(newState.users.filter((user) => user.id === 1)[0].followed).toBe(true);
});

test('followed is false after unfollow action', () => {
  const state = {
    users: [
      { id: 1, followed: true },
      { id: 2, followed: false },
    ],
  };
  const action = { type: 'UNFOLLOW_USER', userId: 1 };
  const newState = usersReducer(state, action);

  expect(newState.users.filter((user) => user.id === 1)[0].followed).toBe(
    false
  );
});
