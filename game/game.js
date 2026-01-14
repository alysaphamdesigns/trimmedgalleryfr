
var ballx = 300;
var bally = 300;
var ballSize = 200;
var score = 0;
var gameState = "L1";
var ballImage;
var backgroundImage;

function preload() {
  // Load the images
  ballImage = loadImage('https://alysaphamdesigns.github.io/game/fly2.png');
  backgroundImage = loadImage('https://alysaphamdesigns.github.io/game/fruitz.jpg');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
}

function draw() {
  if (gameState == "L1") {
    levelOne();
  }
  if (gameState == "L2") {
    levelTwo();
  }
  if (gameState == "L3") {
    levelThree();
  }

  // Add a white background to the score text
  fill(255); // Set fill color to white
  rect(width / 2 - 50, 20, 100, 30); // Draw a white rectangle behind the score
  fill(0); // Set fill color to black for the text
  text("Score: " + score, width / 2, 40); // Draw the score text
}

function levelOne() {
  image(backgroundImage, 0, 0, width, height); // Draw background

  // Add a white background to the level text
  fill(255); // Set fill color to white
  rect(width / 2 - 70, height - 40, 140, 30); // Draw a white rectangle behind the level text
  fill(0); // Set fill color to black for the text
  text("swat the fly!", width / 2, height - 20);

  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }

  image(ballImage, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize); // Draw ball image
}
