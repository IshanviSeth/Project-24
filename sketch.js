var box1, box2, box3;
var ball, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
    world = engine.world;
	
	//Create the Bodies Here.	
	box1 = new Box(900,685,120,10)
	box2 = new Box(835,635,10,100)
	box3 = new Box(967,635,10,100)

	ground = new Ground(600,height,1200,20);

	ball = new Ball(250,650,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  
  drawSprites();
 
  box1.display();
  box2.display();
  box3.display();

  ground.display();
  ball.display();

 
  //ball.body.x= ball.body.position.x; 
  //ball.body.y= ball.body.position.y;
}
function keyPressed(){
  if(keyCode === UP_ARROW){
		Matter.Body.setStatic(ball.body, false)
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})

	}
}


