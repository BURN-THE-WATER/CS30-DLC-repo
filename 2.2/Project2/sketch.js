// Project Title
// Your Name
// Date

const BIG_MARGIN = 150;
const SMALL_MARGIN = 50;

async function setup() {
  createCanvas(400, 400);
  colorMode(RGB);
  background(220);
}

function draw() {

}

function keyPressed() {
  background(220);
  if(keyCode === 84) {
    drawTriangle();
  }
  else if(keyCode === 67) {
    drawCircle();
  }
  else if(keyCode === 83) {
    drawSquare();
  }
  else if (keyCode === 82) {
    drawRectangle();
  }
}

function drawTriangle() {
  strokeWeight(5);
  fill(255, 0, 0);
  triangle(width/2, SMALL_MARGIN, SMALL_MARGIN, height-2*SMALL_MARGIN, width-SMALL_MARGIN, height-2*SMALL_MARGIN);
}

function drawCircle() {
  strokeWeight(5);
  fill(0, 255, 0);
  circle(width/2, height/2, width-100);
}

function drawSquare() {
  strokeWeight(5);
  fill(0, 0, 255);
  quad(BIG_MARGIN, BIG_MARGIN, BIG_MARGIN, height-BIG_MARGIN, width-BIG_MARGIN, height-BIG_MARGIN, BIG_MARGIN, width-BIG_MARGIN, height-BIG_MARGIN); // need to fix :)
}

function drawRectangle() {
  strokeWeight(5);
  fill(255, 0, 255);
  quad(SMALL_MARGIN, BIG_MARGIN, width - SMALL_MARGIN, BIG_MARGIN, SMALL_MARGIN, height - BIG_MARGIN, width - SMALL_MARGIN, height - BIG_MARGIN);
}



