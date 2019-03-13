// Test file for helping tests to run
// Initial setup for tests
// imports mongoose library to the file
const mongoose = require('mongoose');

// runs before test suite starts
before(done => {
  // connects to the database using new URLparser
  mongoose.connect('mongodb://localhost/users_test', { useNewUrlParser: true });
  // when connection is made
  mongoose.connection
    // when the connection works
    .once('open', () => {
      done();
    })
    // on error print put the error
    .on('error', err => {
      console.warn('Error', err);
    });
});
// defines a testing hook
// runs before each test
beforeEach(done => {
  // Drops all records from the users collection
  mongoose.connection.collections.users.drop(() => {
    // Once all users are dropped run next test
    done();
  });
});
