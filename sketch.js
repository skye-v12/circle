
function setup() {
  createCanvas(400,400);
}

let diam=150;


function draw() {
  background(105,125,200);
  circle(width/2,height/2,diam);
  noStroke();
  diam=diam+3
}
