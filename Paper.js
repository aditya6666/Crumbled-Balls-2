class Paper {
    constructor(x,y,r){
        var options = {
            isStatic: true,
            restitution:0.5,
            friction:0.5,
            density:1.2
        };
        this.paperImage = loadImage("paper.png");
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)
    }
    display(){

        var paperposition = this.body.position;
        push();
        image(this.paperImage,paperposition.x,paperposition.y,50,50);
        translate(paperposition.x,paperposition.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill("pink");
        pop();
    }


}