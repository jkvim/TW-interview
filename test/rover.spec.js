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

// test rover should not continue move when is dead and keep lastest coordinate
mockGrid = {
  inDangerArea: function() { return false; },
  outOfGrid: function ({x, y}) { if (x === 6) return true },
  setBeacon: function() {}
};
const roveMoveUntilOutOfGrid = new Rover(1, 1, 'E', mockGrid);

roveMoveUntilOutOfGrid.move('MMMMMM');

each([
  [roveMoveUntilOutOfGrid.x, 5],
  [roveMoveUntilOutOfGrid.y, 1],
  [roveMoveUntilOutOfGrid.direction, 'E'],
]).then('Rover should stop when out of grid', (input, expected) => {
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

// test caculate
each([
  [[0, 0, 'S'], [0, -1]],
  [[0, 0, 'N'], [0, 1]],
  [[0, 0, 'W'], [-1, 0]],
  [[0, 0, 'E'], [1, 0]],
]).then('Rover should caculate correct next coordinate', (param, expected) => {
  const mockGrid = {x: 5, y: 5}
  const rover = new Rover(...param, mockGrid);
  const result = rover.caculateNextCoordinate();
  assert.strictEqual(result.x, expected[0]);
  assert.strictEqual(result.y, expected[1]);
});