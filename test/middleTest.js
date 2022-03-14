const assert = require('chai').assert;
const middle = require('../middle');

// const assertEqual = require('../assertEqual')
// const eqArrays = require('../eqArrays')
// const middle = require('../middle')
// const assertArraysEqual = require('../assertArraysEqual')


// assertArraysEqual(middle([1,2,3]), [2]);

describe("#middle", () => {
    it("returns [2] for [1, 2, 3]", () => {
      assert.deepEqual(middle([1, 2, 3]), [2]);
    });
  });