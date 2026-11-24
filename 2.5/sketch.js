// Checkerboard
// Kaleb Bourgeois
// Nov 24th, 2026
// Used my previous knowledge of tenery operators and spread operators (see 2.4)
// Write a nested loop to created a checker board as in the examples below. 
// Checker boards are an 8 x 8 grid with alternating white and black rectangles (squares on a standard board).


//Initalizing variables
let squareWidth;
let squareHeight;
let squareDimentions;
let gridSize = 8;

//Creating canvas and setting variables
async function setup() {
  createCanvas(windowWidth, windowHeight);

  //Setting canvas-dependent variables
  squareWidth = width / gridSize;
  squareHeight = height / gridSize;
  squareDimentions = [squareWidth, squareHeight];
}

//Drawing the background and the grid
function draw() {
  background(220);
  drawGrid();
}

//Function to draw grid, inverting checker variable every iteration.
function drawGrid() {
  noStroke();
  //Starting at the top left corner, move right, then down while setting x and y values accordingly
  //Alternates colors between rows
  //Checker was included as a part of the for, not within the loop to reduce the redundant changing of checker, as well as keeping the inner loop just for drawing the rectenagles.
  for(let y = 0, checker = false; y <= height-squareHeight ; y += squareHeight, checker = !checker) {
    //Alternate color between squres
    for(let x=0; x <= width - squareWidth ; x += squareWidth, checker = ! checker) {
      //Fill the rectangle depending on the value of checker, true draws white and false draws black
      fill(checker ? 255 : 0);

      //Drawing the rectangle
      rect(x, y, ...squareDimentions);
    }
  }
}