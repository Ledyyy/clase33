

var player;
var score=0;
var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8;
var wall1,wall2,wall3,wall4;
var wallGroup;
function preload(){
 
}

function setup(){
createCanvas(400, 400);
ball1 =createSprite(200,200,20,20);
ball2 =createSprite(220,220,20,20);
ball3 =createSprite(230,230,20,20);
ball4 =createSprite(240,240,20,20);
ball5 =createSprite(250,250,20,20);
ball6 =createSprite(260,260,20,20);
ball7 =createSprite(270,270,20,20);
ball8 =createSprite(280,280,20,20);
ball1.shapeColor= "red";
ball2.shapeColor= "red";
ball3.shapeColor= "red";
ball4.shapeColor= "red";
ball5.shapeColor= "green";
ball6.shapeColor= "green";
ball7.shapeColor= "green";
ball8.shapeColor= "green";
ball1.velocityY=3;
ball2.velocityY=3;
ball3.velocityY=3;
ball4.velocityY=3;
ball5.velocityY=3;
ball6.velocityY=3;
ball7.velocityY=3;
ball8.velocityY=3;
ball1.velocityX=2;
ball2.velocityX=2;
ball3.velocityX=2;
ball4.velocityX=2;
ball5.velocityX=2;
ball6.velocityX=2;
ball7.velocityX=2;
ball8.velocityX=2;
wall1=createSprite(0,200,10,400);
wall2=createSprite(400,200,10,400);
wall3=createSprite(200,0,400,10);
wall4=createSprite(200,400,400,10);
wallsGroup = createGroup();


player = createSprite(200,50,15,15);
player.shapeColor = "white";

}


function draw() {
  background("black");
  textSize(15);
  fill("yellow");
  text("Puntos: "+ score, 20, 25);

  createEdgeSprites();
  if(ball1.bounceOff(player) || ball2.bounceOff(player) || ball3.bounceOff(player) || ball4.bounceOff(player)){
    score=score-1;
  }
   if(ball5.bounceOff(player) || ball6.bounceOff(player) || ball7.bounceOff(player) || ball8.bounceOff(player)){
    score=score+1;
  }
  if(keyCode === UP_ARROW) {  
    player.y = player.y -4;
  }
  if(keyCode === DOWN_ARROW) {
    player.y = player.y +4;
  }
  if(keyCode === LEFT_ARROW) {
    player.x = player.x -4;
  }
  if(keyCode === RIGHT_ARROW) {
    player.x = player.x +4;
  }
 wallsGroup.add(wall1);
wallsGroup.add(wall2);
wallsGroup.add(wall3);
wallsGroup.add(wall4);
ball1.bounceOff(wallsGroup);
ball1.bounceOff(player);
ball2.bounceOff(wallsGroup);
ball2.bounceOff(player);
ball3.bounceOff(wallsGroup);
ball3.bounceOff(player);
ball4.bounceOff(wallsGroup);
ball4.bounceOff(player);
ball5.bounceOff(wallsGroup);
ball5.bounceOff(player);
ball6.bounceOff(wallsGroup);
ball6.bounceOff(player);
ball7.bounceOff(wallsGroup);
ball7.bounceOff(player);
ball8.bounceOff(wallsGroup);
ball8.bounceOff(player);
  
  drawSprites();
}
