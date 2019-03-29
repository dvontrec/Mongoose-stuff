const assert = require('assert');
const User = require('../src/user');

// test for reading user from db
describe('Reading users out of the database', () => {
  // makes q's scope the function
  let q;
  // insert record into users collection so db is populated with data
  beforeEach(done => {
    q = new User({ name: 'Quinten' });
    // saves q then moves to the next test
    q.save().then(() => done());
  });
  // finds all users named q
  it('finds all users with the name of q', done => {
    User.find({ name: 'Quinten' }).then(users => {
      // found users ID should match qs ID must convert to string
      assert(users[0]._id.toString() === q._id.toString());
      done();
    });
  });

  // finds a specific user by id
  it('finds a user with a specific ID', done => {
    User.findOne({ _id: q._id }).then(user => {
      // checks if the users name matches
      assert(user.name === 'Quinten');
      done();
    });
  });
});
