const asserts = require('assert')
const sum = require('../program/index')

asserts.equal(sum(1, 2),3)
asserts.throws(() => sum(2, '3'), new Error('inputs must be number'))