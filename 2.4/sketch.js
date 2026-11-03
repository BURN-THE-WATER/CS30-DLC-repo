// Project Title
// Your Name
// Date
//Fonts are within the fonts folder in order to have a more orginized project

// Import utilize and apply functions to at least one image file
// Import utilize and apply functions to at least one sound file
// Import utilize and apply functions to at least one font library
// Implement function calls for at least 2 transformations - use push/pop to contain the transformations
// Implement the use of user interaction in the form of mouse and keyboard functions

const BUTTONWIDTH = width/15;
const BUTTONHEIGHT = height/17;

//I placed the font loading within the asyncrounous function to allow for less bloat in setup
async function setup() {
  createCanvas(windowWidth, windowHeight);

  //Loading fonts using an object so that calling the font is more clean
  let font = {};
  font.text = loadFont(fonts/RedHatMono-VariableFont_wght.ttf);
  font.emphasis = loadFont(fonts/Micro5-Regular.ttf);
}

function draw() {
  background(220);
}

function makeButton(x,y) {
  rect(x,y, x+BUTTONWIDTH, y+BUTTONHEIGHT);
}
