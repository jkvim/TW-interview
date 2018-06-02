const assert = require('assert');
const Grid = require('../src/lib/grid');
const { each } = require('./helper');

// test outOfGrid
const grid = new Grid(5, 5);
each([
  [[0, 0], false],
  [[1, 2], false],
  [[-1, 0], true],
  [[0, -1], true],
  [[0, 6], true],
  [[6, 0], true],
]).then('Grid should judge correctly when rover move out of range', (coordinate, result) => {
  assert.strictEqual(grid.outOfGrid(...coordinate), result);
});

// test setBeacon
const gridWithDangerArea = new Grid(5, 5);
each([
  [[4, 5], [{ x: 4, y: 5}]]
]).then('Grid should save beacon to danger area', (input, expected) => {
  gridWithDangerArea.setBeacon(...input);
  assert.deepStrictEqual(gridWithDangerArea.dangerArea, expected);
});

// test inDangerArea
const gridWithDangerAreaToSkip = new Grid(5, 5);
each([
  [[5, 5], false],
  [[6, 5], true]
]).then('Grid should save beacon to danger area', (input, expected) => {
  gridWithDangerAreaToSkip.setBeacon(...input);
  assert.deepStrictEqual(gridWithDangerAreaToSkip.inDangerArea({x: 6, y: 5}), expected);
});