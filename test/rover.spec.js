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


// test markAsDead
const deadRover = new Rover(1, 2, 'E');

deadRover.markAsDead();

deadRover.move('MMM');
each([
  [deadRover.x, 1],
  [deadRover.y, 2],
  [deadRover.direction, 'E'],
  [deadRover.isDead, true],
]).then('Rover is dead should not move', (input, expected) => {
  assert.strictEqual(input, expected);
});