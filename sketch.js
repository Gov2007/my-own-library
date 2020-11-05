var movingRect;
var standingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;


function setup() {
  createCanvas(800,400);
  standingRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 30);
  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  gameObject3 = createSprite(300,100,50,50);
  gameObject4 = createSprite(400,100,50,50);

  standingRect.shapeColor = ("green");
  movingRect.shapeColor = ("green");
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject3.shapeColor = "green";
  gameObject4.shapeColor = "green";

}

function draw() {
  background(255,255,255); 
  
  

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  bounceOff();
  

  if(isTouching(movingRect,gameObject1)) {
    movingRect.shapeColor = "red";
    standingRect.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "green";
    standingRect.shapeColor = "green";
  }
  


  drawSprites();
}

