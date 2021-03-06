'use strict';

const mongoose = require('mongoose');

const User = require('../../models/user.js');
const data = require('../../data/users.js');

mongoose.connect('mongodb://localhost/hackpong')
  .then(() => {
    console.log('Connected to Mongo!');
    return User.remove({});
  })
  .then(() => {
    console.log('Empty db');
    return User.insertMany(data);
  })
  .then((results) => {
    console.log('You have some users', results.length);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log('There is a problem', error);
  });
