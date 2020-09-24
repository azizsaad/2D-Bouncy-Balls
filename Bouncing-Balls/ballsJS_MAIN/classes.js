let bubble = [];
var x;
var y;
var r = 60;
var num_of_balls = 2;
var gravity = 3;
var collision_coeff = 0.08;
let grav_button;


function setup() {
    createCanvas(800,800);
    grav_button_behav();
    for (let i = 0; i < num_of_balls; i++) {
      bubble[i] = new Bubble(x,y);
    }
}

function draw() {
    background(200);
    for (let elem of bubble) {
      elem.sideWalls();
      elem.show();
      elem.gravity();
      elem.collide();
  }
}


function grav_button_behav() {
  button = createButton('turn gravity off');
  button.mouseClicked(gravity_off);
  button.size(300,100);
  button.position(810,10);
  button.style("font-size", "30px");
}

function gravity_off() {
    console.log('clicked');
    gravity = 20;
}





class Bubble {

  constructor(){
    this.r = r
    this.x = random(30,width-30)
    this.xspeed = 8
    this.y = random(30,200)
    this.yspeed = random(-10,10)
    this.yaccn = random(0.3,0.5)
}

  show(){
    fill(160,40,50);
    ellipse(this.x,this.y,r,r);
  }

  sideWalls(){
    if (this.x + this.r/2 > width || this.x - this.r/2 < 0){
        this.xspeed = this.xspeed * -1
    }
    this.x = this.x + this.xspeed
  }

  gravity() {
    this.y += gravity;
    this.y += this.yspeed;
    this.yspeed += this.yaccn;

    if (this.y > height - r/2) {
      this.yspeed *= -0.8
      this.y = height - r/2
    }
    if (this.y < r/2) {
      this.yspeed *= 0.8
      this.y = r/2
    }
  }

  intersects(other) {
     if (dist(this.x,this.y,other.x,other.y) < (this.r)) return true
    }

  collide() {
  for (let elem of bubble) {

    for (let other of bubble) {

      let dx = other.x - this.x;
      let dy = other.y - this.y;
      let minDist = r*2

        if (elem !== other && elem.intersects(other)) {

          console.log('collision')

          let angle = atan2(dy, dx);
          let targetX = this.x + cos(angle) * minDist;
          let targetY = this.y + sin(angle) * minDist;
          let ax = (targetX - other.x) * collision_coeff;
          let ay = (targetY - other.y) * collision_coeff;

          elem.xspeed -= ax * 0.9;
          elem.yspeed -= ay;
          other.xspeed += ax * 0.9;
          other.yspeed += ay;

          // elem.yspeed *= -1
          // elem.xspeed *= -1
          // other.yspeed *= -1
          // other.xspeed *= -1
        }
      }
    }
  }

}
