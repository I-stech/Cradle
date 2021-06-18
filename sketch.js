
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new Bob(200,450,70);
    bob2 = new Bob(300,460,70);
	bob3 = new Bob(100,440,70);
	bob4 = new Bob(400,470,70);
	bob5 = new Bob(500,480,70);

	roof = new Roof(width/2,670,width,20);
	
    chain = new Chain(bird.body,{x:200, y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



