const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var ground;

var score = 0;
 var particle;
 var turn = 0;
 var count;

var gameState = "play";

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
    
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,790,800,20)
	Engine.run(engine);

	for (var k = 0; k <=width; k = k + 80) {
		divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
	  }
   
   
	   for (var j = 75; j <=width; j=j+50) 
	   {
	   
		  plinkos.push(new Circle(j,75));
	   }
   
	   for (var j = 50; j <=width-10; j=j+50) 
	   {
	   
		  plinkos.push(new Circle(j,175));
	   }
   
		for (var j = 75; j <=width; j=j+50) 
	   {
	   
		  plinkos.push(new Circle(j,275));
	   }
   
		for (var j = 50; j <=width-10; j=j+50) 
	   {
	   
		  plinkos.push(new Circle(j,375));
	   }
   
	   
   
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();

  drawSprites();
 
  for (var i = 0; i < plinkos.length; i++) {
     
	plinkos[i].display();
	
  }
  if(frameCount%60===0){
	particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
	
  }

 for (var j = 0; j < particles.length; j++) {
  
	particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
	
	divisions[k].display();
  }
  textSize(20);
text("Score : "+score,700,50);


}

function mousePressed(){
	if(gameState = "end"){
		count++
		particle = new Particle(mouseX,10,10,10);
		
			}
	
}
if (particle !== null){
	particle.display();
	if(particle.body.position.y>760)
	{if(particle.body.position.x<600){
		score = score + 2000;
		particle = null;
		if(count>=5){
		gameState = "end";
	}
	}
	}
	}