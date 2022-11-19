var express = require("express");

var app = express();

app.use(express.static("group_1"));

app.get("/", function(req, res){

res.redirect("index.html");

});

app.listen(3000, function(){

console.log("Example is running on port 3000");

});
var Grass=require("./group_1/classGrass");
var GrassEater=require("./group_1/classGrassEater");
var HardGrass=require("./group_1/classHardGrass");
var Predator=require("./group_1/classPredator");
var AllEater=require("./group_1/classAllEater");
require("./group_1/classAnimals");
var grassArr = [];
var grassEaterArr = [];
var hardGrassArr = [];
var allEaterArr = [];
var predatorArr = [];
for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
        if (matrix[y][x] == 1){
            let gr = new Grass(x, y);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2){
            let eater = new GrassEater(x, y);
            grassEaterArr.push(eater);
        }
        else if (matrix[y][x] == 3){
            let hardGrass = new HardGrass(x, y);
            hardGrassArr.push(hardGrass);
        }
        else if (matrix[y][x] == 4){
            let allEater = new AllEater(x, y);
            allEaterArr.push(allEater);
        }
        else if (matrix[y][x] == 5){
            let predator = new Predator(x, y);
            predatorArr.push(predator);
        }
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
  if (frameCount==60) {
    console.log("grass",grassArr.length);
    console.log("grassEater",grassEaterArr.length);
    console.log("hardGrass",hardGrassArr.length);
    console.log("allEater",allEaterArr.length);
    console.log("predator",predatorArr.length);
  }