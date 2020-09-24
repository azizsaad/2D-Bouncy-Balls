// Globals
let width = 500;
let height = 500;
let myBalls = [];
let x,y;
let ballCount = 2 ;

// Make this dynamic with the offset
let origin = new Vector(8,78.8);

// Finds the distance between two vectors
function distanceBetween(obj1,obj2){
  let temp = obj1.subtract(obj2)
  return temp.magnitude();
}

// Shows the co-ordinates of a mouseclick relative to canvas
function showCoords(event){
  let x = event.clientX;
  let y = event.clientY;
  let temp = new Vector(x,y);
  console.log(temp.canvas(origin));
}


function setup(){
  createCanvas(width,height);

  // Find the bounding rect of the canvas
  let offset = canvas.getBoundingClientRect();
  console.log(offset);

  // Create an array of Ball objects
  for(let i = 0; i < ballCount; i++){
       myBalls.push(new Ball(random(width/2),random(height)));
  }
}

function draw(){
  background(0);
  for(let i in myBalls){
     myBalls[i].wallLogic();
     myBalls[i].ballLogic();
     myBalls[i].update();
     myBalls[i].show(i);
   }
}
