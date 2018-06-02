const assert = require('assert');
const Rover = require('../src/lib/rover');

const rover = new Rover(0, 0, 'E');

rover.move('LMMRM');

assert.strictEqual(rover.x, 1, 'x === 1');
assert.strictEqual(rover.y, 2, 'y === 2');
assert.strictEqual(rover.direction, 'E', 'direction === E');