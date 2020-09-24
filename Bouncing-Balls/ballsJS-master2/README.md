# ballsJS
## Simple 2D balls, created with p5.js. Basic collision logic and mechanics

### Take a look:
http://htmlpreview.github.io/?https://github.com/Meronkha/ballsJS/blob/master/bouncingball.html

### What this project includes:

  #### - The use of my own Vector library [vectorJS]( https://github.com/Meronkha/vectorJS)
  
  #### - A function which can detect collisions between two objects:
  
  ```JS
  
  // This function will return the magnitude of the Vector between the two ball objects (their respective centres)
 
 function distanceBetween(obj1,obj2){
      // where obj1,obj2 are vector objects made with my library
      let temp = obj1.subtract(obj2);
      return temp.magnitude();
      }
  
  // You can implement this function with the following code to generate collision detection
  
  if (distanceBetween(ballVec1,ballVec2) < (ballObj11.r/2 + ballobj2.r/2)){
          // Insert appropriate response mechanism here
       
  ```
  #### - A function which implement collision logic with the Wall in conjunction with realistic newtonian mechanics like the coefficent of restitution (e)
