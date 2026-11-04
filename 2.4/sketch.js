// Project Title
// Your Name
// Date
//Fonts are within the fonts folder in order to have a more orginized project

//nohover31,55,100    hover72,81,99


// Import utilize and apply functions to at least one image file
// Import utilize and apply functions to at least one sound file
// Import utilize and apply functions to at least one font library
// Implement function calls for at least 2 transformations - use push/pop to contain the transformations
// Implement the use of user interaction in the form of mouse and keyboard functions

let BUTTONWIDTH;
let BUTTONHEIGHT;

//I placed the font loading within the asyncrounous function to allow for less bloat in setup
async function setup() {
  //Loading fonts using an object so that calling the font is more clean
  let font = {};
  font.text = loadFont("fonts/RedHatMono-VariableFont_wght.ttf");
  font.emphasis = loadFont("fonts/Micro5-Regular.ttf");
  createCanvas(windowWidth, windowHeight);
  BUTTONWIDTH = width/4;
  BUTTONHEIGHT = height/12;
}

function draw() {
  background(220);
  showMoreButton();
}

function makeButton(x,y, label, hover) {
  stroke(0, 0, 0);
  strokeWeight(13);
  if (hover === true) {
    fill(72,81,99);
  }

  if (hover === false) {
    fill(31,55,100);
  }

  rect(x,y, BUTTONWIDTH, BUTTONHEIGHT);
  prepText();
  text(label, x+5, y+BUTTONHEIGHT/2);
}

function showMoreButton() {
  makeButton(width-BUTTONWIDTH - 50, 50, "Toggle Keyboard Shortcuts", mouseX > width-BUTTONWIDTH - 50 && mouseX < width-100 + BUTTONWIDTH && (mouseY < 50 + BUTTONHEIGHT && mouseY > 50));
}

function prepText() {
  strokeWeight(2);
  fill(255, 255, 255);
  textSize(45);
}