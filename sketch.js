var bg, sleep, brush, gym, eat, bath, move;
var astronaut;

function preload (){
bg= loadImage("images/iss.png");
sleep = loadAnimation("images/sleep.png");
brush =  loadAnimation("images/brush.png");
gym=  loadAnimation("images/gym1.png","images/gym1.png","imagess/gym2.png","images/gym2.png");
eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","imagess/eat2.png","images/eat2.png","images/eat2.png");
bath = loadAnimation("images/batht1.png","images/bath1.png","images/bath1.png","imagess/bath2.png","images/bath2.png","images/bath2.png");
move = loadAnimation("images/move1.png","images/move1.png","images/move2.png","imagess/move2.png");

}

function setup() {
  createCanvas(600,500);



  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
  
}

function draw() {
  background(bg);  
  drawSprites();

 textsize(20);
 fill ("white");
 text("instructions:",20,35);
 textsize(15);
 text("up Arrow = brushing",20,55);
 text("down Arrow = gymming",20,70);
 text("left Arrow = eating",20,85);
 text("right Arrow = bathing",20,100);
 text("m key = moving",20,115);

 edges = createEdgeSprites();
 astronaut.bounceoff(edges);

 if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
 }
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym);
  astronaut.changeAnimation("gymming");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.X = 150;
  astronaut.Y = 350;
  astronaut.velocityX = 0.5 ;
  astronaut.velocityY = 0.5 ;
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.X = 300;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("m")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.velocityX = 1;
  astronaut.velocityY = 1;
}
}