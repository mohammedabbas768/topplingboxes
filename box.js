class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.9,
        'friction':0.3,
        'density':0.5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate();
    rectMode(CENTER);
    fill(255);
    rect(0,0, this.width, this.height);
    pop();
  }
};
