const assert = require('chai').assert;
const tail = require('../tail');

// const result = tail(["Hello", "Lighthouse", "Labs"]);

// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);


describe("tail", () => {
    it("returns [1,2] for [1, 2, 3]", () => {
      assert.deepEqual(tail([1, 2, 3]), [2,3]);
    });
  });