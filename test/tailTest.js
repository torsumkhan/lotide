const assertEqual = require('../assertEqual')
const tail = require('../tail')

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);