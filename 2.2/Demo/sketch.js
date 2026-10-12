// Project Title
// Your Name
// Date
//
const BALL_Y = 300;
const BALL_WIDTH = 100;
const BALL_HEIGHT = 100;
let ballX = 200;
let xStep = 2;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CORNER);
  background(0);
  frameRate(100);
}

function draw() {
  background(0);
  drawBall();

}

function drawBall() {
  noFill();
  stroke(255);
  if(ballX > width - BALL_WIDTH || ballX < 1) {
    xStep *= -1;
  }
  ballX += xStep;
  ellipse(ballX, BALL_Y, BALL_WIDTH, BALL_HEIGHT);
}
