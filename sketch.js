
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var thunder1
var thunder
var maxdrops=100
var drop
var t2,t3,t4
 
function preload(){
   thunder1=loadImage("images/images/thunderbolt/1.png")
   t2=loadImage("images/images/thunderbolt/2.png")
   t3=loadImage("images/images/thunderbolt/3.png")
   t4=loadImage("images/images/thunderbolt/4.png")
}

function setup(){
    engine = Engine.create();
  world=engine.world
  createCanvas(400,500)
  drop=new Drop(0,400)
  umbrella=new Umbrella(100,150)
  
}
function draw(){
Engine.update(engine)
background("black")
drop.display()
drop.update1()
umbrella.display()

var rand=Math.round(random(1,4))
if (frameCount%80===0){
  thunder=createSprite(random(10,370),random(10,30),10,10)
  switch(rand){
    case 1:thunder.addImage(thunder1)
    break;
    case 2:thunder.addImage(t2)
    break;
    case 3:thunder.addImage(t3)
    break;
    case 4: thunder.addImage(t4)
    break;
    default:break;
  }
  thunder.scale=0.6
 thunder.lifetime=30
 }

drawSprites()

}   

