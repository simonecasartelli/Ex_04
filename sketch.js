function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

}

function draw() {
  background(0);
  
  var hr = hour();
  var mn = minute();
  var sc = second();
  
  translate(width/2,height/2);
  rotate(-90);
  
  strokeWeight(8);
  noStroke();
  fill(255);
  
  ellipse(0,0,300,300);

  var secAngle = map(sc,0,59,0,360);
  var minAngle = map(mn,0,59,0,360);
  var hourAngle = map(hr % 12,0,12,0,360);
  
  push();
  rotate(secAngle);
  stroke(229,43,80);
  strokeWeight(4);
  line(0,0,150,0);
  pop();
  
  push();
  rotate(minAngle);
  stroke(0);
  strokeWeight(6);
  line(0,0,100,0);
  pop();
  
  push();
  rotate(hourAngle);
  stroke(0);
  strokeWeight(6);
  line(0,0,60,0);
  pop();
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


