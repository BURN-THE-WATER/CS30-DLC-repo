/*********************************************************************************
NAME:
DATE:
COURSE:
PROGRAM DESCRIPTION: Square following edges example

******************************************************************************/

let globalX = 0;  // x location of square
let globalY = 0;  // y location of square
let speed = 5;  // speed of square
let globalState = 0;// A variable to keep track of the square's "state." 
let frameCounter = 0;

//Initalizing colors
let rValue = 255;
let gValue = 255;
let bValue = 255;

 
// Depending on the value of its state, it will either move right, down, left, or up.
//don't forget to scale all of your values with width and height to ensure your program adjusts to custom screen sizes
  

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(125,50,50);
  frameRate(5);
}

function draw() {
  drawSquare(moveSquare(globalX, globalY, globalState));
}

function drawSquare(x,y) {
  stroke(0);
  fill(rValue, gValue, bValue);
  square(x,y,width/25);
}

function moveSquare(x, y, state) {
  if (state === 0 && x < width-width/25) {
    return x += speed, y;
  }
  else if (state === 1 && y < height-width/25) {
    return x, y += speed;

  }
  else if (state === 2 && x > 0) {
    return x-=speed, y;

  }
  else if (state === 3 && y > 0) {
    return x, y-=speed;

  }
  else {
    nextState(state);
  }
}
function randomColor() {
  rValue = random(0,255);
  gValue = random(0, 255);
  bValue = random(0,255);

}

function nextState(currentState) {
  randomColor();
  if (currentState < 3) {
    globalState += 1;
  }
  else {
    globalState = 0;
  }
}




