// Defining constants that are used globally. I could have used more, but I kept it simpler
const legSpacing = 30
const grassStep = 5

//Setting up canvas to be 400x400, setting background to be sky blue, and making sure color mode is properly set up along with math operations
function setup() {
  createCanvas(400, 400);
  background(208,225,229)
  angleMode("degrees")
  colorMode(RGB, 255)
}

//Calling functions
function draw() {
  ground();
  kiwiBody(200, 200, 65);
  kiwiLegs(185, 230, 15, legSpacing);
  kiwiToes(185, 240, 10);
  kiwiBeak(200, 195, 7, 30);
  kiwiKnees(200, 235, 15);
  kiwiEyes(200, 190, 20, 20, 80, 30);
  grassBlades(250);
  rock()

  
}

//Function that is preset to fill brown (should have used it more, or defined as a constant)
function brownFill() {
  fill(121,71,0);
  noStroke();
}

//Creating the kiwi's body, using brownFill()
function kiwiBody(xCord, yCord, size) {
  brownFill();
  //drawing
  ellipse(xCord, yCord, size, size);
}

//Drawing the kiwi's legs using lines. Expecting a constant to be paseed in but other number can be used (testing)
function kiwiLegs(leftXCord, leftYCord, length, spacing) {
  //setup
  brownFill()
  strokeWeight(5);
  //fill
  line(leftXCord, leftYCord, leftXCord, leftYCord + length);
  line(leftXCord + spacing, leftYCord, leftXCord + spacing, leftYCord + length);
}

//using a for loop to draw the toes of the kiwi
function kiwiToes(xCord, yCord, length) {
  stroke(0, 0, 0);
  strokeWeight(1);
  for(var counter = 0; counter <= 30; counter += legSpacing) {
    line(xCord + counter, yCord, xCord - 3 + counter, yCord + length)
    line(xCord + counter, yCord, xCord + counter, yCord + length)
    line(xCord + counter, yCord, xCord + 3 + counter, yCord + length)
  }
}

//Draws a triangle in the middle of the kiwi, that is slightly darker than the kiwi itself
function kiwiBeak(xCord, yCord, width, length) {
  fill(57,39,18);
  noStroke();
  triangle(xCord - width/2, yCord, xCord + width/2, yCord, xCord, yCord + length)
}

//Draws two arcs for the kiwi's eyes. Width is in degrees, zoom changes the overall size of the arc
function kiwiEyes(xCord, yCord, zoomX, zoomY, width, spacing) {
  noFill()
  strokeWeight(5)
  stroke(0,0,0)
  arc(xCord - spacing/2, yCord, zoomX, zoomY, 240 - width/2, 240 + width)
  arc(xCord + spacing/2, yCord, zoomX, zoomY, 240 - width/2, 240 + width)
}

//Draws two circles ar specified x and y cordinates with leg spacing passed through
function kiwiKnees(xCord, yCord, spacing) {
  noFill()
  stroke(0, 0, 0)
  strokeWeight(10)
  point(xCord - spacing, yCord)
  point(xCord + spacing, yCord) 
}

//Draws a green rectangle for the ground, with no stroke
function ground() {
  noStroke()
  fill(0,200,50)
  rect(0, 250, 400, 150)
}

//Uses a for loop to draw grass blades (as a curve) every bladestep constant value. 
function grassBlades(grassY) {
  noFill();
  stroke(30, 100, 30);
  strokeWeight(2);
  for(var x = 0; x <= 400; x += grassStep) {
    curve(x - 7, grassY + 5, x, grassY, x + 1, grassY - 20, x + 3, grassY - 25);
  }
}

//Draws a grey trapezoid for the kiwi to stand on
function rock() {
  noStroke()
  fill(120, 120, 120)
  quad(width/2 - 30, 250, width/2 + 30, 250, width/2 + 60, 325, width/2 -60, 325)
}