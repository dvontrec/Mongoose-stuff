const assert = require('assert');
const User = require('../src/user');

// tests for updating records
describe('Updating records', () => {
  let tre;

  // runs before each test
  beforeEach(done => {
    // creates a user
    tre = new User({ name: 'Dvontre' });
    tre.save().then(() => done());
  });

  // helper function
  // runs the passed opperation then asserts that there is one record and the name is updated
  assertName = (opertation, done) => {
    opertation // find all users in db
      .then(() => User.find({}))
      // expect one user named "Tre"
      .then(users => {
        // finds one user
        assert(users.length === 1);
        // users name should be 'Tre' not 'Dvontre'
        assert(users[0].name === 'Tre');
        done();
      });
  };

  // model instance update
  // sets a property and saves
  it('instance set and save', done => {
    // updates the name in memory
    tre.set('name', 'Tre');
    // persists the record to the DB
    assertName(tre.save(), done);
  });

  // model instance update with update
  it('model instance can update', done => {
    // updates the name in the db
    assertName(tre.update({ name: 'Tre' }), done);
  });
});
