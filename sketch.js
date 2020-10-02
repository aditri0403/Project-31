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
  for (var j = 40; j <=width;j=j+50)
  {
      plinkos.push(new plinko(j,75));
  }
  for (var j = 15;j<=width-10;j=j+50)
  {
    plinkos.push(new plinko(j,175));
  }
  for (var j = 65; j <=width-20;j=j+50)
  {
      plinkos.push(new plinko(j,275));
  }
  for (var j = 100; j <=width;j=j+50)
  {
      plinkos.push(new plinko(j,375));
  }
  if(frameCount%60===0){
    particles.push(new particle(random(width/2-10, width/2+10),10,10))
  }
  for(var k=0;k<=width;k=k+80){
  divisions.push(new division(k, height-divisions/2,10,divisionHeight));
  }
  
  drawSprites();
}
