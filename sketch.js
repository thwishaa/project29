const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var base;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var polygon1;
var engine,world
var slingshot1;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world
  //createSprite(400,200,50,50);
  base = new Ground(400,380,800,15); 
  block1 = new Box(330,235,30,40);
  block2 = new Box(360,235,30,40);
  block3 = new Box(390,235,30,40);
  block4 = new Box(350,200,30,40);
  block5 = new Box(385,200,30,40);
  block6 = new Box(365,170,30,40);
  block7 = new Box(510,150,30,40);
  block8 = new Box(540,150,30,40);
  block9 = new Box(570,150,30,40);
  block10 = new Box(600,150,30,40);
  polygon1 = new polygon(100,100,30);
  slingshot1 = new slingshot(polygon1.body,{x:100,y:100});
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  base.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  polygon1.display();
  slingshot1.display();

  
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot1.fly();
}