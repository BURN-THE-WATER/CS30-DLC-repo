// Random circles
// Kaleb Bourgeois
// DATEEEEE

let x = 0;
let y = 0;
let diamater =  0;
let circleAlpha = 0;
let circleRed = 0;
let circleGreen = 0;
let circleBlue = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  drawELlipse();
  wait(500);
}

function randomNumbers() {
  x = random(0, width);
  y = random(0, height);
  diamater = random(0, 200);
  circleAlpha = random(0, 100);
  circleRed = random(0, 255);
  circleGreen = random(0, 255);
  circleBlue = random(0, 255);
}

function drawELlipse() {
  randomNumbers();
  stroke(0);
  strokeWeight(5);
  fill(circleRed, circleGreen, circleBlue, circleAlpha);
  ellipse(x, y, diamater, diamater);
}

function wait(millisecondWait) {
  localStart = millis();
  while (localStart + millisecondWait > millis()) {
    
  }
}