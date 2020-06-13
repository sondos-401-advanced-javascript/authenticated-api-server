'use strict';

const server = require('./src/server');
const mongoose = require('mongoose');
server.start();
// mongodb://localhost:27017/users
// mongodb+srv://sondos-admin:test123@users-q63hp.mongodb.net/test
const MONGO_URL = 'mongodb+srv://sondos-admin:test123@users-q63hp.mongodb.net/test';
const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
mongoose.connect(MONGO_URL,mongooseOptions);
