'use strict';

const assert = require('assert');
const app = require('../../../src/app');
//const reactApp = require('../../../public/app.jsx');
const messageService = app.service('messages');
const testInput = 'My first review!';

describe('message service', function() {
  it('registered the messages service', () => {
    assert.ok(app.service('messages'));
  });

  //test authorization/log in first?
  it('created a new message on input', () => {
    assert.equal(messageService.create({
      text: testInput
    }), true);
  });
});
