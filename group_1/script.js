
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

function setup() {
  generator(25, 10, 10, 4, 5);
  frameRate(15);
  createCanvas(matrix[0].length * side, matrix.length * side);
  background("#acacac");
  
}

function draw() {
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
  



  
}
function click() {
  console.log("click");
  noLoop();
}
var clicker=document.getElementById("run");
clicker.addEventListener("click", click);
