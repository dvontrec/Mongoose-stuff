const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
  let smoke;
  // runs before each test
  beforeEach(done => {
    // creates and saves the user names smokey
    smoke = new User({ name: 'Smokey' });
    smoke.save().then(() => done());
  });

  // removes using an object with values
  it('model instance remove', done => {
    // removes the user smoke from the database using model remove method
    smoke
      .remove() // removes
      .then(() => User.findOne({ name: 'Smokey' })) // after user is removed search for a user with the name
      .then(user => {
        // no user should be found
        assert(user === null);
        done();
      });
  });

  // Removes all users with given criteria
  it('class method remove', done => {
    User.remove({ name: 'Smokey' })
      .then(() => User.findOne({ name: 'Smokey' })) // after user is removed search for a user with the name
      .then(user => {
        // no user should be found
        assert(user === null);
        done();
      });
  });

  // Removes first user with given criteria
  it('class method findAndRemove', done => {
    User.findOneAndRemove({ name: 'Smokey' })
      .then(() => User.findOne({ name: 'Smokey' })) // after user is removed search for a user with the name
      .then(user => {
        // no user should be found
        assert(user === null);
        done();
      });
  });

  // Removes the user based on the Object_id
  it('class method findByIdAndRemove', done => {
    User.findByIdAndRemove(smoke._id)
      .then(() => User.findOne({ name: 'Smokey' })) // after user is removed search for a user with the name
      .then(user => {
        // no user should be found
        assert(user === null);
        done();
      });
  });
});
