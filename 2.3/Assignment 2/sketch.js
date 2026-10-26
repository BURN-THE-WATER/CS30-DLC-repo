/*********************************************************************************
NAME:
DATE:
COURSE:
PROGRAM DESCRIPTION: Square following edges example

******************************************************************************/

let globalX = 0;  // x location of square
let globalY = 0;  // y location of square
let speed = 10;  // speed of square
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
  frameRate(240);
}

function draw() {
  background(125,50,50);
  moveSquare(globalState);
  drawSquare(globalX, globalY);

}

function drawSquare(x,y) {
  stroke(0);
  fill(rValue, gValue, bValue);
  square(x,y,width/25);
}

function moveSquare(state) {
  if (state === 0 && globalX < width-width/25) {
    globalX += speed;
  }
  
  else if (state === 1 && globalY < height-width/25) {
    globalY += speed;
  }

  else if (state === 2 && globalX > 0) {
    globalX -= speed;
  }

  else if (state === 3 && globalY > 0) {
    globalY -=speed;
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




