const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')
const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')


assertArraysEqual(middle([1,2,3]), [2]);