
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

groundObj = new ground(width/2,670,width,20);
leftSide = new ground(1100,600,20,120)

	//Create the Bodies Here.
var ball_options = {
	isStatic:false,
	restitution:0.03,
	friction:0,
	density:1.2
}
ball = bodies.circle(200, 100, 20, ball_options);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	
  groundObj.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	}
}



