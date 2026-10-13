// Changing color circles
// Kaleb Bourgeois
// Tuesday, october 13th

//Defiing constants
const ELLIPSE_DIAMATER = 50;

//Initalizing the sketch by creating a 400x400 canvas, initalizing colors, defualt fill, and target frame rate
async function setup() {
  createCanvas(400, 400);
  colorMode(RGB);
  fill(25);
  background(0);
  frameRate(60);
}

//Calling funcitons
function draw() {
  background(0);
  drawEllipse();
}

//drawEllipse draws an ellipse at the current mouse x and y. The elipse has no stroke
function drawEllipse() {
  noStroke();
  ellipse(mouseX, mouseY, ELLIPSE_DIAMATER, ELLIPSE_DIAMATER);
}

//since keyPressed is called when a key is pressed, I put the code for changing the ellipse color within the funciton
//keyPressed() changes the ellipse's color depending on the quadrant of the 400x400 window
function keyPressed() {
  if(mouseX < 200 && mouseY < 200) {
    fill(255, 0, 0);
  }
  else if(mouseX >= 200 && mouseY < 200) {
    fill(0, 255, 0);
  }
  else if(mouseX < 200 && mouseY >= 200) {
    fill(0, 0, 255);
  }
  else {
    fill(255);
  }
}

