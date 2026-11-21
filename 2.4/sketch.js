//Loading Wheel
// Kaleb Bourgeois
// Nov 20th
//Fonts, sounds, and images are withn their respective folders
//Hold the mosue down to double speed, and press space to (roughly) double size

// Import utilize and apply functions to at least one image file
// Import utilize and apply functions to at least one sound file
// Import utilize and apply functions to at least one font library
// Implement function calls for at least 2 transformations - use push/pop to contain the transformations
// Implement the use of user interaction in the form of mouse and keyboard functions

//Initalizing font variables
let font1;

//Initalizing image variables
let loadingImage;
let loadingRotation = 0;
let center;

//Initalizing text variables
let globalState = 0;

//Initalizing speed and movement variables
let speed = 2;
let baseRotationSpeed = 0.25;
let baseTextInterval = 30;
let angleChange = baseRotationSpeed * speed;
let loadingSpeed = baseTextInterval * speed;
let rotationSinceUpdate = 0;
let increaseSize = false;

//Initalizing sound variables
let beep;
let beepInputCounter = 0;

//Setting up canvas by creating it, setting fonts, images, and sound variables
async function setup() {
  angleMode("degrees");
  createCanvas(windowWidth, windowHeight);

  font1 = await loadFont("fonts/RedHatMono-VariableFont_wght.ttf");

  loadingImage = await loadImage("images/Loading.png");

  beep = await loadSound("sounds/beep.mp3");

  //I am creating an array called center so I can use the spread operator to have cleaner code since everything is anchored to the center
  center = [width/2, height/2];
}

//Main draw loop that first draws the background, then draws the loading wheel, then draws the loading text. Variables are updated
function draw() {
  background(255);
  loading();
  loadingText(globalState);
  updateVariables();
}

//Loading function that draws the loading wheel
function loading() {
  //updating angle
  loadingRotation += angleChange;

  //Defining tranformations with push/pop. Using a tenary operator to dynamically assign scale
  push();
  translate(...center);
  scale(increaseSize ? 1.5 : 1);
  rotate(loadingRotation);
  imageMode(CENTER);
  image(loadingImage, 0, 0);
  pop();

  //keeping track of rotations since update (Using a seperate variable because it needs to reset unlike loadingRotation)
  rotationSinceUpdate += angleChange;
  //Acculumator function to detemine when to change the loading text
  if (rotationSinceUpdate >= loadingSpeed) {
    globalState = (globalState + 1) % 4;
    rotationSinceUpdate = 0;
  }
}

//Loading text function
function loadingText() {
  //Assignming output using an array and the curreent globalState
  let output = ["Loading", "Loading.", "Loading..", "Loading..."][globalState];

  //Basic text setup, tenary operator used to dynamically adjust text size
  textFont(font1);
  textAlign(CENTER);
  textSize(increaseSize ? 80 : 40);
  //Printing the text
  text(output, ...center);
}

//Doubling the speed when the mouse is pressed
function mousePressed(){
  speed = 2*speed;
}

//Halfing the speed when the mouse is pressed
function mouseReleased() {
  speed = speed/2;
}

//Updating the variables to match the current speed value, and updating loading speed for reduncancy
function updateVariables() {
  angleChange = baseRotationSpeed * speed;
  loadingSpeed = baseTextInterval;
}

//If space bar is pressed, change increaseSize accordingly and play a beep once
function keyPressed() {
  if (keyCode === 32) {
    beepInputCounter +=1;
    increaseSize = true;
    //Only playing the beep once
    if (beepInputCounter < 2) {
      beep.play();
    }
  }
}

//Resetting increaseSize if the key is released, as well as resetting beepInputCounter
function keyReleased() {
  if (keyCode === 32) {
    increaseSize = false;
  }
  beepInputCounter   = 0;
}