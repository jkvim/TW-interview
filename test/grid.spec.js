const assert = require('assert');
const Grid = require('../src/lib/grid');
const { each } = require('./helper');

// test outOfGrid
const grid = new Grid(5, 5);
each([
  [{x: 0, y: 0}, false],
  [{x: 1, y: 2}, false],
  [{x: -1,y: 0}, true],
  [{x: 0, y: -1}, true],
  [{x: 0, y: 6}, true],
  [{x: 6, y: 0}, true],
]).then('Grid should judge correctly when rover move out of range', (coordinate, result) => {
  assert.strictEqual(grid.outOfGrid(coordinate), result);
});

// test setBeacon
const gridWithDangerArea = new Grid(5, 5);
each([
  [{x: 4, y: 5}, [{ x: 4, y: 5}]]
]).then('Grid should save beacon to danger area', (coordinate, expected) => {
  gridWithDangerArea.setBeacon(coordinate);
  assert.deepStrictEqual(gridWithDangerArea.dangerArea, expected);
});

// test inDangerArea
const gridWithDangerAreaToSkip = new Grid(5, 5);
each([
  [{x: 5, y: 5}, false],
  [{x: 6, y: 5}, true]
]).then('Grid should save beacon to danger area', (coordinate, expected) => {
  gridWithDangerAreaToSkip.setBeacon(coordinate);
  assert.deepStrictEqual(gridWithDangerAreaToSkip.inDangerArea({x: 6, y: 5}), expected);
});