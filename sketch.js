var box1,box2,box3;
var wall1,wall2,wall3;
var playerscore=0,compscore=0;
var ball,player,computer;
var sound;
function preload()
{
  ball=loadImage("ball.png");
  computer=loadImage("robot.png");
  player=loadImage("boy.png");
  sound=loadSound("hit.mp3");
}
function setup() {
  createCanvas(400, 400);
  
  
 box1=createSprite(200,200,20,20);
  box1.addImage(ball);
  box1.scale=0.05;
  box2=createSprite(15,180,15,70);
  box2.addImage(computer);
  box2.scale=0.1;
  box3=createSprite(385,180,15,70);
  box3.addImage(player);
  box3.scale=0.2;
  wall1=createSprite(200,2,400,5);
  wall3=createSprite(200,398,400,5);
   wall1.shapeColor="black";
   wall3.shapeColor="black";
  box1.velocityX=2;
  box1.velocityY=-3;
}

function draw() {
  background("#1DB4B4");
  fill("black");
  text("My Game",150,30);
  text("Playerscore: "+playerscore,300,50);
  text("Cmptrscore: "+compscore,300,70);
  
  box3.y=mouseY;
  box2.y=box1.y;
  createEdgeSprites();
  if(box1.isTouching(box3))
    {
     sound.play();
      playerscore=playerscore+1;
    }
  if(box1.isTouching(box2))
    {
      compscore=compscore+1;
        sound.play();
    }
  box1.bounceOff(box3);
  box1.bounceOff(wall1);
  box1.bounceOff(box2);
  box1.bounceOff(wall3);
  if(box1.x>400||box1.x<0)
    {
      box1.x=200;
    }

  
  drawSprites();           
  
  


}