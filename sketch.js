const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ball=new Ball(200,200,30,30);
ground=new Ground(600,380,1200,20);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
  backGround("black");


    
}