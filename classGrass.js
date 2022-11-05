class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiplay = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
        // grassArr.push(this);
        // matrix[y][x] = 1;
    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length && matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        return found;
    }
    mul() {
        const newCell = random(this.chooseCell(0));
        if (this.multiplay >= 4 && newCell) {
          let gr =  new Grass(newCell[0], newCell[1]);
          console.log("gr", gr);
          
          grassArr.push(gr);
          matrix[newCell[0]][ newCell[1]] = 1;
            this.multiplay = 0;
        }
        this.multiplay++;
    }
}