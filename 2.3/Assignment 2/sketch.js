/*********************************************************************************
NAME:
DATE:
COURSE:
PROGRAM DESCRIPTION: Square following edges example

******************************************************************************/

let x = 0;  // x location of square
let y = 0;  // y location of square
let speed = 5;  // speed of square
let globalState = 0;// A variable to keep track of the square's "state." 
let frameCounter = 0

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
  moveSquare(globalState);
  frameCounter += 1
}

function drawSquare(x,y) {
  stroke(0);
  fill(rValue, gValue, bValue);
  square(x,y,width/25);
}

function moveSquare(state) {
  if (state === 0) {
    for (let squareX = 0; squareX <= width-width/25; squareX++) {
      frameStamp = frameCounter;
      while frameStamp == frameCounter {
        background(125,50,50);
        drawSquare(squareX, 0);
      }
    }    
    globalState = nextState(0);
  }
  else if (state === 1) {
    for (let squareY = 0; squareY <= height-width/25; squareY++) {
      background(125,50,50);
      drawSquare(width-width/25, 0);
    }
    globalState = nextState(1);
  }
  else if (state === 2) {
    for (let squareX = width-width/25; squareX >= 0; squareX--) {
      background(125,50,50);
      drawSquare(squareX, height-width/25);
    }
    globalState = nextState(2);
  }
  else if (state === 3) {
    for (let squareY = 0; squareY >= 0; squareY--) {
      background(125,50,50);
      drawSquare(0, squareY);
    }
    globalState = nextState(3);
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
    return currentState += 1;
  }
  else {
    return 0;
  }
}




