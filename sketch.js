var ground, paper, dustbin1, dustbin2, dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 200);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,115,70);
	dustbin1 = new Dustbin(650,155,130,20);
	dustbin2 = new Dustbin(580,105,20,110);
	dustbin3 = new Dustbin(710,105,20,110);

	ground = new Ground(width/2, 170, width, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.setStatic(paper.body,false);
	Matter.Body.applyForce(paper.body,paper.body.position,{x:250,y:-145});
	}

}



