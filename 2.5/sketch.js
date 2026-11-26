// Checkerboard
// Kaleb Bourgeois
// Nov 24th, 2026
// Used my previous knowledge of ternary operators and spread operators (see 2.4)
// Write a nested loop to created a checker board as in the examples below. 
// Checker boards are an 8 x 8 grid with alternating white and black rectangles (squares on a standard board).


//Initializing variables
let squareWidth;
let squareHeight;
let squareDimensions;
let gridSize = 8;

//Creating canvas and setting variables
function setup() {
  createCanvas(windowWidth, windowHeight);

  //Setting canvas-dependent variables
  squareWidth = width / gridSize;
  squareHeight = height / gridSize;
  squareDimensions = [squareWidth, squareHeight];

  //Using noLoop since a static checkerboard doesn't need to be drawn 60 times per second
  noLoop();
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
  //The checker variable is updated in the for-loop expressions rather than the loop bodies.
  //This keeps the inner loop focused on drawing the rectangles and improves readability.
  for(let y = 0, checker = false; y <= height-squareHeight ; y += squareHeight, checker = !checker) {
    //Alternate color between squares
    for(let x=0; x <= width - squareWidth ; x += squareWidth, checker = ! checker) {
      //Fill the rectangle depending on the value of checker, true draws white and false draws black
      fill(checker ? 255 : 0);

      rect(x, y, ...squareDimensions);
    }
  }
}
