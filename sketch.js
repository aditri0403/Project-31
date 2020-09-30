const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground1;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world = engine.world;

 ground1 = new ground(240,780,480,20);


}

function draw() {
  background(0); 
  
  ground1.display();
  
  for(var j = 0; j < particles.length;j++){
    particles[j].display();
  }
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  drawSprites();
}
