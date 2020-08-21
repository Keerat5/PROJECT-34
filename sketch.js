var database;
var drawing = [];
var currentPath = [];

function setup(){
  canvas = createCanvas(1000,600);
  canvas.mousePressed(startPath);
  database = firebase.database();

}

function draw(){
  if(mouseIsPressed){
    var point = {
      x: mouseX,
      y: mouseY
    }
    currentPath.push(point);
  }

  stroke(0);
  strokeWeight(4);
  noFill();
  for(var i = 0; i < drawing.length; i++){
    var path = drawing[i];
    beginShape();
    for(var j = 0; j < path.length; j++){
    vertex(path[j].x, path[j].y)
    }
    endShape();
  }
}

function startPath(){
  currentPath = [];
  drawing.push(currentPath); 
}
drawing.push(currentPath); 
