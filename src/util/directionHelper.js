const DIRECTION = require('../constants/direction');

const nextDirection = {
  S: function (next) {
    return next === 'L' ? DIRECTION.EAST : DIRECTION.WEST;
  },
  N: function (next) {
    return next === 'L' ? DIRECTION.WEST : DIRECTION.EAST;
  },
  E: function (next) {
    return next === 'L' ? DIRECTION.NORTH : DIRECTION.SOUTH;
  },
  W: function (next) {
    return next === 'L' ? DIRECTION.SOUTH : DIRECTION.NORTH;
  },
};


exports.getNextDirection = (currentDirection, next) => {
  return nextDirection[currentDirection]
    ? nextDirection[currentDirection](next)
    : currentDirection;
}