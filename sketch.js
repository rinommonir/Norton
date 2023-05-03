var fred=0;
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(247, 197, 197); //an RGB color for the canvas' background pinkish
  //circle
  stroke(33, 51, 93) // an RGB color for the circle's border
  strokeWeight(2);
  fill(143, 168, 185 ,mouseX); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(159,fred,fred,fred); // center of canvas, 20px dia
  fill(197,242,247,mouseX);
  stroke(191, 182, 127);
  strokeWeight(5);
  rect(mouseX-25,mouseY-25,50,50);
  ellipse(mouseX,mouseY,30,fred);
  textSize(30);
  textFont("Helvetica");
  text("Norton Controls The Moon",80,160);

}

function mousePressed() {
  if (fred>=255) {
    fred=0
  } else {
    fred=fred+5;
  }
}