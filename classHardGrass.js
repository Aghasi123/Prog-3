class HardGrass {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.multiplay = 0;
    this.energy = 10;
    this.health = 20;
    this.slowness = 0;
    this.previousCharacter = 0;
    this.wannaDestroy = 0;
    this.directions = [];
    hardGrassArr.push(this);
    matrix[y][x] = 3;
  }
  getNewDirections() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],
    ];
  }
  chooseCell(character) {
    this.getNewDirections();
    var found = [];
    for (var i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (
        x >= 0 &&
        x < matrix[0].length &&
        y >= 0 &&
        y < matrix.length &&
        matrix[y][x] == character
      ) {
        found.push(this.directions[i]);
      }
    }
    return found;
  }
  whereGo() {
    var cell = [0, 1];
    var choose = random(cell);
    return choose;
  }
  mul() {
    const newCell = random(this.chooseCell(this.whereGo()));
    if (this.multiplay >= 10 && newCell) {
      const newhardgrass = new HardGrass(newCell[0], newCell[1]);
      this.multiplay = 0;
    }
    this.multiplay++;
  }
  move() {
    const choose = this.whereGo();
    const newCell = random(this.chooseCell(choose));
    if (this.slowness >= 15 && newCell) {
      const newX = newCell[0];
      const newY = newCell[1];
      matrix[this.y][this.x] = choose;
      matrix[newY][newX] = 3;
      this.x = newX;
      this.y = newY;
      this.slowness = 0;
      this.energy++;
    }
    this.slowness++;
    if (this.energy >= 20) {
      this.mul();
    }
  }
  minusHealth() {
    this.health--;
  }
}
