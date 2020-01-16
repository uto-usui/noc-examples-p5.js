// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;

function setup() {
  createCanvas(640,360);
  walker = new Walker();
  background(222);
}

function draw() {
  walker.step();
  walker.render();
}

class Walker{
  constructor(){
    this.x = width/2;
    this.y = height/2;
  };

  render() {
    stroke(100);
    point(this.x,this.y);
  };

  step(){
    let r = random(1);
    let warp = random(1);

    if (r < 0.5) {
      const direction = {
        x: 0,
        y: 0,
      }
      direction.x =  (0 < (this.x - mouseX)) ? -1 : 1
      direction.y =  (0 < (this.y - mouseY)) ? -1 : 1

      this.x += direction.x * 2
      this.y += direction.y * 2
    } else if (r < 0.6) {
      this.x += 2;
    } else if (r < 0.7) {
      this.x += -2;
    } else if (r < 0.8) {
      this.y += 2
    } else if (r < 0.9) {
      this.y += -2
    }

    if (warp < 0.02) {
      this.x += random(-100, 100);
      this.y += random(-100, 100);
    }

    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  };
}
