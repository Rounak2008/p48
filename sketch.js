var bird,birdImg;
var backgroundImg;
var bg;
var ob1,ob2,ob3,ob4,ob5,ob6
var ob7,ob8,ob9,ob10,ob11,ob12,ob13

function preload(){
  backgroundImg=loadImage("background 1.png");
  birdImg=loadImage("bird.png");
  ob1Img=loadImage("ob1.png");
  ob2Img=loadImage("ob2.png");
  ob3Img=loadImage("ob3.png");
  ob4Img=loadImage("ob4.png");
  ob5Img=loadImage("ob5.png");
  ob6Img=loadImage("ob6.png");
  ob7Img=loadImage("ob7.png");
  ob8Img=loadImage("ob8.png");
  ob9Img=loadImage("ob9.png");
  ob10Img=loadImage("ob10.png");
  ob11Img=loadImage("ob11.png");
  ob12Img=loadImage("ob12.png");
  ob13Img=loadImage("ob13.png");
}

function setup() {
  createCanvas(1500,700);
  bg=createSprite(750,350)
  bg.addImage(backgroundImg); 
  bg.scale=1.0;

  bird = createSprite(150,200);
  bird.addImage(birdImg);
  bird.scale=0.3;

 
}

function draw() {
  background(0);
  bg.velocityX=0;
  

  if (bg.x <bg.width/3 ){   
  bg.x=bg.width; 
}
if(keyDown("space")){
  bird.velocityY=-10;
}
bird.velocityY = bird.velocityY  + 0.5

spawnObstacles();
drawSprites();
}  
function spawnObstacles() {
  //Code to spawn the obstacles
  if (frameCount % 60 === 0) {
    var ob1 = createSprite(1500,500,40,10);
    ob1.addImage(ob1Img);
    ob1.scale = 0.6;
    ob1.velocityX = -3;

    var ob2 = createSprite(1700,200,40,10);
    ob2.addImage(ob2Img);
    ob2.scale = 0.5;
    ob2.velocityX = -3;

    var ob3 = createSprite(1900,480,40,10);
    ob3.addImage(ob3Img);
    ob3.scale = 0.5;
    ob3.velocityX = -3;

    var ob4 = createSprite(2100,200,40,10);
    ob4.addImage(ob4Img);
    ob4.scale = 2;
    ob4.velocityX = -3;

    var ob5 = createSprite(2300,200,40,10);
    ob5.addImage(ob5Img);
    ob5.scale = 2;
    ob5.velocityX = -3;

    var ob6 = createSprite(2500,580,40,10);
    ob6.addImage(ob6Img);
    ob6.scale = 2;
    ob6.velocityX = -3;

    var ob7 = createSprite(2700,560,80,10);
    ob7.addImage(ob7Img);
    ob7.scale = 2;
    ob7.velocityX = -3;  
 
    var ob8 = createSprite(2900,555,40,10);
    ob8.addImage(ob8Img);
    ob8.scale = 1.2;
    ob8.velocityX = -3;

    var ob9 = createSprite(3100,150,40,10);
    ob9.addImage(ob9Img);
    ob9.scale = 1.1;
    ob9.velocityX = -3;

    var ob10 = createSprite(3300,550,40,10);
    ob10.addImage(ob10Img);
    ob10.scale = 1.2;
    ob10.VelocityX = -3;

    var ob11 = createSprite(3500,200,45,10);
    ob11.addImage(ob11Img);
    ob11.scale = 1.8;
    ob11.velocityX = -3;

    var ob12 = createSprite(3700,250,60,10);
    ob12.addImage(ob12Img);
    ob12.scale = 1.8;
    ob12.velocityX = -3;

    var ob13 = createSprite(3900,520,40,10);
    ob13.addImage(ob13Img);
    ob13.scale = 1.8;
    ob13.velocityX = -3;






























  }}