class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 15;
        this.multiplay = 0;
        this.directions = [];
        grassEaterArr.push(this);
        matrix[y][x] = 2;
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
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewDirections();
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
    whateat(){
        var cell=[1,3];
        var choose=random(cell);
        return choose;
    }
    eat() {
        const eatCells = random(this.chooseCell(1));
        const eatHardGrass = random(this.chooseCell(3));
        if (eatCells && this.whateat()==1) {
            const newX = eatCells[0];
            const newY = eatCells[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy++;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
                if (this.energy >= 30) {
                    this.mul();
                }
            }
            

        }
        else if(eatHardGrass && this.whateat()==3){
        const newX = eatHardGrass[0];
        const newY = eatHardGrass[1];
            for (var i in hardGrassArr) {
                if (newX == hardGrassArr[i].x && newY == hardGrassArr[i].y) {
                    hardGrassArr[i].minusHealth();
                    if (hardGrassArr[i].health<=0) {
                        matrix[newY][newX] = 2;
                        matrix[this.y][this.x] = 0;
                        this.x = newX;
                        this.y = newY;
                        this.energy++;
                        hardGrassArr.splice(i,1)
                        break;
                        }
                    break;
                }
                if (this.energy >= 30) {
                    this.mul();
                }

            }
            
        }
        else {
            this.move();
        }


    }
    mul() {
        const newCell = random(this.chooseCell(0));
        if (this.multiplay >= 15 && newCell) {
            const newGrassEater = new GrassEater(newCell[0], newCell[1]);
            this.multiplay = 0;
        }
        this.multiplay++
    }

    move() {
        const newCell = random(this.chooseCell(0));
        if (newCell) {
            const newX = newCell[0];
            const newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy--;
        }
        if (this.energy <= 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}