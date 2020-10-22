class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.dustbinImage = loadImage("dustbingreen.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      image(this.dustbinImage,590,50,120,100);
      push();
      rotate(angle);
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };