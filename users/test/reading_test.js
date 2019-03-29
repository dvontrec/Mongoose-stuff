const assert = require('assert');
const user = require('../src/user');

// test for reading user from db
describe('Reading users out of the database', () => {
  // makes q's scope the function
  let q;
  // insert record into users collection so db is populated with data
  beforeEach(done => {
    q = new user({ name: 'Quinten' });
    // saves q then moves to the next test
    q.save().then(() => done());
  });
  it('finds all users with the name of q', () => {});
});
