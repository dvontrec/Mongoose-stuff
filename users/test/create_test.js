// Tests user creation
// imports assertion library installed with mocha
const assert = require('assert');
const User = require('../src/user');
// Creates a test for user creation
describe('Creating records', () => {
  // runs the actual test
  it('saves a user', done => {
    // creates a new user with the username "Joe"
    const joe = new User({ name: 'Joe' });
    // saves the instance of the user model
    joe.save().then(() => {
      // has joe been saved successfully
      assert(!joe.isNew); // joe should not be new
      done();
    });
    // assertion / what should happen
  });
});
