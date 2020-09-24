/// Basic vector functions
function Vector(x,y){
  this.x = x;
  this.y = y;
};

// Normalise the vector with the canvas
Vector.prototype.canvas = function(obj){
  return new Vector(this.x -= obj.x,this.y -= obj.y);
};
Vector.prototype.subtract = function(obj){
  return new Vector(this.x - obj.x,this.y - obj.y);
};

Vector.prototype.add = function(obj){
  return new Vector(this.x += obj.x,this.y += obj.y);
};

Vector.prototype.magnitude = function(){
  return Math.sqrt((this.x*this.x) + (this.y*this.y));
};

Vector.prototype.show = function(){
  return [this.x,this.y];
};

Vector.prototype.dot = function(obj){
  return this.x*obj.x+this.y*obj.y
};

Vector.prototype.angle = function(obj){
  return Math.acos(this.dot(obj)/(temp.magnitude()*obj.magnitude()));
};


/*To be added soon
Vector.prototype.multiply = function(obj){}
Vector.prototype.divide = function(obj){}
Vector.prototype.dot = function(obj){}
Vector.prototype.cross = fucntion(obj){}
*/
