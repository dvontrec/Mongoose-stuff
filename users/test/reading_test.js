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
  it('finds all users with the name of q', done => {
    // finds al users named q
    User.find({ name: 'Quinten' }).then(users => {
      // found users ID should match qs ID must convert to string
      assert(users[0]._id.toString() === q._id.toString());
      done();
    });
  });
});
