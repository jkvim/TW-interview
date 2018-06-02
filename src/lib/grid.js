
module.exports = class Grid {
  constructor(x = 5, y = 5) {
    this.width = x;
    this.height = y;
    this.dangerArea = [];
  }

  setBeacon(x, y) {
    this.dangerArea.push({x, y});
  }
};