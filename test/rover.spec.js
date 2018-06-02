const assert = require('assert');
const Rover = require('../src/lib/rover');
const { each } = require('./helper');

const rover = new Rover(0, 0, 'E');

rover.move('LMMRM');

each([
  [rover.x, 1],
  [rover.y, 2],
  [rover.direction, 'E'],
]).then('Rover should move to correct position', (input, expected) => {
  assert.strictEqual(input, expected);
});