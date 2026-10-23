// Random circles
// Kaleb Bourgeois
// October 21st, 2026

//Defiing the constant variables that detemine the randomness
const MAXIMUM_CIRCLE_DIAMATER = 200;
const MAX_RGB_VALUE = 255;

//Defining variables used in functions to determine randomeness
let x = 0;
let y = 0;
let diamater =  0;
let circleAlpha = 0;
let circleRed = 0;
let circleGreen = 0;
let circleBlue = 0;

//Creating a window the size of the user's window
async function setup() {
  createCanvas(windowWidth, windowHeight);
}

//Randomly drawing an ellipse and waiting a determined amound of milliseconds
function draw() {
  drawELlipse();
  wait(500);
}

//Function that sets the variables defined above to random values withing
function randomNumbers() {
  x = random(0, width);
  y = random(0, height);
  diamater = random(0, MAXIMUM_CIRCLE_DIAMATER);
  circleAlpha = random(0, MAX_RGB_VALUE);
  circleRed = random(0, MAX_RGB_VALUE);
  circleGreen = random(0, MAX_RGB_VALUE);
  circleBlue = random(0, MAX_RGB_VALUE);
}

//Drawing the ellipse by randomizing the fill colors, then using them to draw the ellipse
function drawELlipse() {
  randomNumbers();
  stroke(0);
  strokeWeight(5);
  fill(circleRed, circleGreen, circleBlue, circleAlpha);
  ellipse(x, y, diamater, diamater);
}

//Wait function that marks the time it was called, and waits until the target wait time passes
function wait(millisecondWait) {
  localStart = millis();
  while (localStart + millisecondWait > millis()) {
  }
}