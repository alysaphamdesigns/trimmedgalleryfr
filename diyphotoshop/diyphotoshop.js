
var img;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://alysaphamdesigns.github.io/diyps/images/74.png');
  img2 = loadImage('https://alysaphamdesigns.github.io/diyps/images/extra.png');
  img3 = loadImage('https://alysaphamdesigns.github.io/diyps/images/can.png');
  img4 = loadImage('https://alysaphamdesigns.github.io/diyps/images/cat2.png');
}

function setup() {
createCanvas(600, 400);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
 
    strokeWeight(1);
    stroke(01);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool
  
    strokeWeight(4);
    stroke(01);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') { // third tool
  
    strokeWeight(10);
    stroke(01);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') {

    strokeWeight(20);
    stroke(01);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (key == '5') { // this tool calls a function
  
    strokeWeight(8);
    stroke(200);
    line(mouseX, mouseY, pmouseX, pmouseY);
  
  } else if (toolChoice == '6') {

     stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 150, 150);
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
   
  } else if (toolChoice == '7') {
    
    stroke(255);
    fill(58, 59, 60);
    rect(mouseX, mouseY, 20, 20);
    
  } else if (toolChoice == '8') {

    image(img2, mouseX, mouseY, 120, 120);
    
  } else if (toolChoice == '9') {

    image(img4, mouseX, mouseY, 120, 120);
    
  } else if (toolChoice == '0') {
    
    image(img3, mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 50, 50);
    
  }else if (toolChoice == 'j' || toolChoice == 'J') { // g places the image we pre-loaded
    image(img2, mouseX, mouseY, 120, 120);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
