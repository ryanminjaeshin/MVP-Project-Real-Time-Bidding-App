const mongoose = require('mongoose');
const faker = require('faker');
const db = require('./index.js');

const seeds = [];

for (let i = 0; i < 2; i += 1) {
  const seed = {
    id: i,
    name: faker.lorem.words(),
    description: faker.lorem.sentences(),
    price: Math.floor(faker.random.number({
      min: 1000000,
      max: 3000000,
    }) / 10000) * 10000,
    image: `https://unzwillingimg.s3-us-west-1.amazonaws.com/images/${i}.jpg`,
  };
  seeds.push(seed);
}

mongoose.connection.collections.galleries.drop()
  .then(() => {
    console.log('Collection successfully dropped');
  });

db.Gallery.insertMany(seeds)
  .then(() => {
    console.log('[SUCCESS] insert fake galleries');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('[FAILED] insert fake galleries', err);
    mongoose.connection.close();
  });
