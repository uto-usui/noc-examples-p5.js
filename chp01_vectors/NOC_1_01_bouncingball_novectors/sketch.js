// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-1: Bouncing Ball, no vectors
let x = 100;
let y = 100;
let xspeed = 2.5;
let yspeed = 2;
let size = 48;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(10);

  // Add the current speed to the position.
  x = x + xspeed;
  y = y + yspeed;

  if ((x > width - size / 2) || (x - size / 2 < 0)) {
    xspeed = xspeed * -1;
  }
  if ((y > height - size / 2) || (y - size / 2 < 0)) {
    yspeed = yspeed * -1;
  }

  // Display circle at x position
  stroke(255);
  ellipse(x, y, size, size);
}
