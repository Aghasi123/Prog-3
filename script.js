var matrix = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

var side = 20;
var grassArr = [];

var grassEaterArr = [];
var hardGrassArr = [];
var allEaterArr = [];
var predatorArr = [];

function setup() {
  //console.log("aaaaaa")
  generator(25, 25, 5, 7, 25);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 1) {
        let ge = new Grass(j, i);
        grassArr.push(ge)
      }
      if (matrix[i][j] == 2) {
        let ge = new GrassEater(j, i);
        grassEaterArr.push(ge)
      }
      if (matrix[i][j] == 3) {
        let ge = new HardGrass(j, i);
        hardGrassArr.push(ge)
      }
      if (matrix[i][j] == 4) {
        let ge = new AllEater(j, i);
        allEaterArr.push(ge)
      }
      if (matrix[i][j] == 5) {
        let ge = new Predator(j, i);
        predatorArr.push(ge)
      }
      }
    }

  frameRate(10);
  createCanvas(matrix[0].length * side, matrix.length * side);
  background("#acacac");
}

function draw() {
 //console.log(grassArr);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 1) {
        fill("green");
      } else if (matrix[i][j] == 2) {
        fill("yellow");
      } else if (matrix[i][j] == 3) {
        fill("#916d09");
      } else if (matrix[i][j] == 4) {
        fill("black");
      } else if (matrix[i][j] == 5) {
        fill("red");
      } else if (matrix[i][j] == 0) {
        fill("#acacac");
      }
      rect(j * side, i * side, side, side);
    }
  }




  for (let i in grassArr) {
    grassArr[i].mul();
  }
  for (let i in grassEaterArr) {
    grassEaterArr[i].eat();
  }
  for (let i in hardGrassArr) {
    hardGrassArr[i].move();
  }
  for (let i in allEaterArr) {
    allEaterArr[i].shot();
  }
  for (let i in predatorArr) {
    predatorArr[i].eat();
  }
}
