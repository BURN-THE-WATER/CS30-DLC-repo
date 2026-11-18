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

let ocean;
let fish1;
let fish2;
let fish3;

let fishX = 100;
let fishY = 300;
let fishSpeed = 2;

async function setup() {
  createCanvas(windowWidth, windowHeight);

  fontText = await loadFont("fonts/RedHatMono-VariableFont_wght.ttf");
  fontEmphasis = await loadFont("fonts/Micro5-Regular.ttf");

  ocean = await loadImage("images/UnderwaterBackground.jpg");
  fish1 = await loadImage("images/Fish1.png");
  fish2 = await loadImage("images/Fish2.png");
  fish3 = await loadImage("images/Fish3.png");

  BUTTONWIDTH = width / 4;
  BUTTONHEIGHT = height / 12;
}

function draw() {
  background(220);
  bg();
  title();
  animateFish();
  drawFish();
  moveFish();
}

function title() {
  textAlign(CENTER, TOP);
  textFont(fontText);
  fill(0);
  textSize(50);
  text("Interactive Aquarium", width / 2, 50);
}

function bg() {
  image(ocean, 0, 0, width, height);
}

// Drawing the fish, where the fish is flipped depending on direction
function drawFish() {
  push();
  translate(fishX, fishY);
  

  if (fishSpeed > 0) {
    scale(-1, 1);
  } 
  else {
    scale(1, 1);
  }
  
  scale(fishSpeed > 0 ? 1 : -1, 1);

  imageMode(CENTER);
  image(fish1, 0, 0, 120, 80);

  pop();
}

// Changing the movement speed based on fish speed
function moveFish() {
  fishX += fishSpeed;

  // Change direction at edges
  if (fishX > width + 60) {
    fishSpeed = -2;
  }

  if (fishX < -60) {
    fishSpeed = 2;
  }
}

// Using a sin wave to make the fish bob up and down. I learnt this in precal30, and I am applying it.
function animateFish() {
  fishY = 300 + sin(frameCount * 0.05) * 30;
}