//2.2 Assignment 2 shape color
//Kaleb Bourgeois
//October 14th, 2026

// Defining margin constants
const BIG_MARGIN = 150;
const SMALL_MARGIN = 50;

//Setting up the drawing by creating a 400x400 canvas, initalizing color, and setting a white-grey background
async function setup() {
  createCanvas(400, 400);
  colorMode(RGB);
  background(220);
}

// Empty draw function since the assignment is input-based
function draw() {
}

// Event handler for keyboard input, calling specific funcitons based on input
function keyPressed() {
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

// Drawing a triangle on the center of the screen, using my shape setup function (passing RGB color value in)
function drawTriangle() {
  shapeSetup(255, 0 , 0);
  triangle(width/2, SMALL_MARGIN, SMALL_MARGIN, height-2*SMALL_MARGIN, width-SMALL_MARGIN, height-2*SMALL_MARGIN);
}

// Drawing a circle on the center of the screen, using my shape setup function (passing RGB color value in)
function drawCircle() {
  shapeSetup(0, 255, 0);
  circle(width/2, height/2, width-100);
}

// Drawing a square on the center of the screen, using my shape setup function (passing RGB color value in)
function drawSquare() {
  shapeSetup(0, 0, 255);
  quad(BIG_MARGIN, BIG_MARGIN, BIG_MARGIN, height-BIG_MARGIN, width-BIG_MARGIN, height-BIG_MARGIN, width - BIG_MARGIN, BIG_MARGIN);
}

// Drawing a rectangle on the center of the screen, using my shape setup function (passing RGB color value in)
function drawRectangle() {
  shapeSetup(255, 0, 255);
  quad(SMALL_MARGIN, BIG_MARGIN, SMALL_MARGIN, height - BIG_MARGIN, width - SMALL_MARGIN, height - BIG_MARGIN, width - SMALL_MARGIN, BIG_MARGIN);
}

//Here to setup the shapes (saving space)
//Shape setup draws the background, defines a stroke of 5pt, and sets a fill value equeal to the RGB values passed into the function
function shapeSetup(red, green, blue) {
  background(220);
  strokeWeight(5);
  fill(red, green, blue);
}