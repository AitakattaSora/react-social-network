const faker = require('faker');

module.exports = () => {
  const data = { users: [], posts: [] };

  const amount = 48;

  for (let i = 0; i < 10; i++) {
    data.posts.push({
      id: i,
      userId: 0,
      post: faker.lorem.paragraph(3),
      likesCount: faker.random.number(100),
    });
  }

  data.users.push({
    id: 0,
    name: 'Samurai',
    location: { city: 'Tokyo', country: 'Japan' },
    photos: {
      small:
        'https://st4.depositphotos.com/9449108/25247/i/450/depositphotos_252470670-stock-photo-illustration-japanese-warrior-ink-circle.jpg',
      large:
        'https://s3.eu-central-1.amazonaws.com/sol-assets/uploads/public/5eb/9e3/923/thumb_408108_500_500_0_0_crop.jpeg',
    },
    followed: false,
    status: 'Zen',
  });

  for (let i = 1; i < amount; i++) {
    data.users.push({
      id: i,
      name: faker.name.firstName(),
      location: {
        city: faker.address.city(),
        country: faker.address.country(),
      },
      photos: {
        small: faker.random.image(),
        large: faker.random.image(),
      },
      status: faker.lorem.sentence(4),
      followed: faker.random.boolean(),
    });
  }
  return data;
};
