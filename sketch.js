
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


	
var ground;
var wall1,wall2,wall3;
var paper;

function setup() {
	createCanvas(1300,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(550,475,1500,10);
	wall1=new Dustbin(980,425,20,90);
	wall2=new Dustbin(1060,460,140,20);
	wall3=new Dustbin(1120,425,20,90);
	paper=new Paper(50,460,20);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  paper.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



