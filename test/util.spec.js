const assert = require('assert');
const directionHelper = require('../src/util/directionHelper');
const { each } = require('./helper')

each([
  [{current: 'E', turn: 'L'}, 'N'],
  [{current: 'E', turn: 'R'}, 'S'],
  [{current: 'N', turn: 'L'}, 'W'],
  [{current: 'N', turn: 'R'}, 'E'],
  [{current: 'W', turn: 'L'}, 'S'],
  [{current: 'W', turn: 'R'}, 'N'],
  [{current: 'S', turn: 'L'}, 'E'],
  [{current: 'S', turn: 'R'}, 'W'],
]).then('getNextDirection should return correct direction',
  ({current, turn}, expected) => {
  assert.strictEqual(directionHelper.getNextDirection(current, turn), expected);
});
