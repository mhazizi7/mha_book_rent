const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect('mongodb://localhost/mha_book_rent')
    .then(() => winston.info('Connected to MongoDB...'));
}