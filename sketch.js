const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

  var engine,world;
  var bow;
  var arrow;  
  var ground;
  var gameState;
  var form;
  var PLAY;
  var end;
  var playerimg,groundimg;
  var obstacle;
  var targetbird;
  var shoot;
  var shooter;
  var backgroundimg;
  var score;
  gameState=1
  score=0;
function preload(){
  backgroundimg=loadImage("bg1.jpg");
}
function setup() {

  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(600,height,1200,20);
  arrow=new Arrow(90,500,200,200);
  bow=new Bow(90,600,200,200);
  form=new Form();
  targetbird=new Targetbird(1000,200,70,70);
  shoot = new Shoot(arrow.body,{x:90, y:500});
  obstacle=new Obstacle(1000,200,70,70);
  shooter=new Shooter(700,600,60,60);

  

}

function draw() {
  if(gameState===1){
    form.display();
  }
  if(gameState===2){
  Engine.update(engine);
  text("SCORE:"+score,700,30);
  textSize(50);
  background(backgroundimg); 
  bow.display();
  ground.display();
  arrow.display();
  obstacle.display();
  targetbird.display();
  if(death()){
    gameState===3
  
  }
  
  }
  if(gameState===3){
    Engine.update(engine);
    text("SCORE:"+score,700,30);
    textSize(50);
    background(backgroundimg); 
    bow.display();
    ground.display();
    arrow.display();
    Shooter.display();
  }
drawSprites();
}
function mouseDragged(){
    if(gameState!=="launch"){
        Matter.Body.setPosition(bow.body, {x: mouseX , y: mouseY});
    }
    
  }


function mouseReleased(){
  shoot.fly();
  gameState="launch";
}

 

function death(){
  if(arrow.isTouching("Targetbird")){
    score=score+100&&targetBird.velocityX===0}
  }

  function miss(){
    if(arrow.isTouching("Obstacle")){
      score=score+0&&Obsatcle.velocityX===0&&Text(600,400,"OOPS YOU KILLED THE WRONG BIRD")}
    }
  