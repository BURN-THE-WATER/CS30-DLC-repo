/*********************************************************************************
NAME: Kaleb Bourgeois
DATE: October 27th, 2026
COURSE: CS30
PROGRAM DESCRIPTION: Square following edges

******************************************************************************/

let globalX = 0;  // x location of square
let globalY = 0;  // y location of square
let speed = 10;  // speed of square
let globalState = 0;// A variable to keep track of the square's "state." 

//Initalizing colors
let rValue = 255;
let gValue = 255;
let bValue = 255;
  
//Setting up the window, target frame rate is 240 because my home computer has 240hz refresh rate
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(125,50,50);
  frameRate(240);
}

// Draw loop that draws background first, then calcuates the square's position, then draws the square
function draw() {
  background(125,50,50);
  moveSquare(globalState);
  drawSquare(globalX, globalY);

}

//Drawing a square at a specified x and y with a black stroke
function drawSquare(x,y) {
  stroke(0);
  fill(rValue, gValue, bValue);
  square(x,y,width/25);
}

//Depending on the state, change the y or x values accordingly. If the square is at the edge, then change the state and color of the square. Min/max functions snap the square to the edge of the screen if the square is going to overshoot the edge
function moveSquare(state) {
  if (state === 0 && globalX < width-width/25) {
    globalX = min(speed + globalX, width - width/25);
  }

  else if (state === 1 && globalY < height - width/25) {
    globalY = min(speed + globalY, height - width/25);
  }

  else if (state === 2 && globalX > 0) {
    globalX = max(globalX - speed, 0);
  }

  else if (state === 3 && globalY > 0) {
    globalY = max(globalY - speed, 0);
  }

  else {
    nextState(state);
  }
}

//Setting color values to random ones
function randomColor() {
  rValue = random(0,255);
  gValue = random(0, 255);
  bValue = random(0,255);

}

//Setting the state to the next one and randomizing the color
function nextState(currentState) {
  randomColor();
  if (currentState < 3) {
    globalState += 1;
  }
  else {
    globalState = 0;
  }
}




