//Interactive Aquarium
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
let fontText;
let fontEmphasis;

// function preload() {
//   fontText = loadFont("RedHatMono-VariableFont_wght.ttf");
//   fontEmphasis = loadFont("Micro5-Regular.ttf");
//}
async function setup() {
  
  createCanvas(windowWidth, windowHeight);
  fontText = await loadFont("fonts/RedHatMono-VariableFont_wght.ttf");
  fontEmphasis = await loadFont("fonts/Micro5-Regular.ttf");
  BUTTONWIDTH = width/4;
  BUTTONHEIGHT = height/12;
}

function draw() {
  background(220);
  title();
}

function title() {
  textAlign(CENTER, TOP);
  textFont(fontText);
  fill(0);
  textSize(50);
  text("Interactive Aquarium", width/2, 50);
}
