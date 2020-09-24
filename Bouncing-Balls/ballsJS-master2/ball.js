new p5();

// constants
let gravity = 0.98;
let eBall;
let eWall = 0.98;

class Ball {
  constructor(x,y){
    this.r = 60;
    this.x = Math.abs(width - x - this.r);
    this.y = Math.abs(height - y - this.r);
    this.vector = new Vector(this.x,this.y);
    this.gravity = gravity;
    this.dx = 7;
    this.dy = 7;
  }

  update(){
    this.dy += this.gravity;
    this.y = this.y + this.dy;
    this.x = this.x + this.dx;
    this.vector = new Vector(this.x,this.y);
    // console.log(this.vec.show());

  }

  wallLogic(){
    // Adding the logic collision for the balls
    if (this.y + this.r/2 >= height){
        this.dy*=-eWall;
        // stop the ball dropping through the floor
        if (this.y + this.dy + this.r/2 >= height){
          this.gravity = 0;
          this.dy = 0
          this.y = height - this.r/2
        }
    }
    if (this.y - this.r/2 < 0){
        this.dy*=-eWall;
    }
    if (this.x + this.r/2 > width){
        this.dx*=-eWall;
    }
    if (this.x - this.r/2 < 0){
        this.dx*=-eWall;
    }
  }

  ballLogic(){
    for (let obj1 in myBalls){
      let vec1 = new Vector(myBalls[obj1].x,myBalls[obj1].y);
      for (let obj2 in myBalls){
        let vec2 = new Vector(myBalls[obj2].x,myBalls[obj2].y);
        if (distanceBetween(vec1,vec2) < (myBalls[obj1].r/2 + myBalls[obj2].r/2) && obj1 != obj2){
          console.log('collision true!');
          // Insert appropriate response mechanism here
          myBalls[obj1].dx *= -1;
          myBalls[obj1].dy *= -1;
          }
        }
      }
    }
  show(ballNo){
    fill(255);
    ellipse(this.x,this.y,this.r,this.r);
    fill(0);
    textSize(23);
    textAlign(RIGHT);
    text(ballNo,myBalls[ballNo].x,myBalls[ballNo].y);
  }
}
