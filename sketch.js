const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, object1, object2;

function setup() {
  createCanvas(400,400);
engine = Engine.create();
world = engine.world;
 
var object1_options = {
  isStatic: true
}


object1 = Bodies.rectangle(100, 100, 50, 50, object1_options);
World.add(world, object1);
 //object1.position.x
 //object1.position.y

//object2 = Bodies.ellipse(200, 300, 30);
//World.add(world, object2);
}

function draw() {
  background("yellow");  
  rectMode(CENTER);
  rect(object1.position.x, object1.position.y, object1.width, object1.height);
  drawSprites();

}