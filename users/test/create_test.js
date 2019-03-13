// Tests user creation
// imports assertion library installed with mocha
const assert = require('assert');
const User = require('../src/user');
// Creates a test for user creation
describe('Creating records', () => {
  // runs the actual test
  it('saves a user', () => {
    // creates a new user with the username "Joe"
    const joe = new User({ name: 'Joe' });
    // saves the instance of the user model
    joe.save();
    // assertion / what should happen
  });
});
