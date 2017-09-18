const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user-example-development', {useMongoClient: true});
const User = require('../models/User');

const users = [
  {
  username: 'Admin1',
  firstName: 'José',
  lastName: 'Pérez',
  email: 'admin1@gmail.com',
  password: '123',
  rol:'admin'
  }
];

User.create(users, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((user) => {
    console.log(user.name);
  });
  mongoose.connection.close();
});
