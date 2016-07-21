'use strict';

const assert = require('assert');
const process = require('../../../../src/services/movie/hooks/process.js');

describe('movie process hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    process()(mockHook);

    assert.ok(mockHook.process);
  });
});
