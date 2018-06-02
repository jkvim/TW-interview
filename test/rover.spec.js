const assert = require('assert');
const Rover = require('../src/lib/rover');
const { each } = require('./helper');

let mockGrid;

// test move
mockGrid = {
  inDangerArea: function() { return false; },
  outOfGrid: function () { return false; },
};
const rover = new Rover(0, 0, 'E', mockGrid);

rover.move('LMMRM');

each([
  [rover.x, 1],
  [rover.y, 2],
  [rover.direction, 'E'],
]).then('Rover should move to correct position', (input, expected) => {
  assert.strictEqual(input, expected);
});


// test markAsDead
mockGrid = {
  inDangerArea: function() { return false; },
  outOfGrid: function () { return false; },
};
const deadRover = new Rover(1, 2, 'E', mockGrid);

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

// test skip danger area
mockGrid = {
  inDangerArea: function() { return true; }
};
const skipDangerAreaRover = new Rover(5, 0, 'E', mockGrid);

skipDangerAreaRover.move('M');

each([
  [skipDangerAreaRover.isDead, false],
  [skipDangerAreaRover.x, 5],
  [skipDangerAreaRover.y, 0],
]).then('Rover should ignore instruction when next step is danger area', (input, expected) => {
  assert.strictEqual(input, expected);
});