var fixedRect,movingRect;
var obj3;
var obj4;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(400, 100, 50, 80);
 movingRect = createSprite(400,800, 80,30);

 fixedRect.shapeColor="green";
 movingRect.shapeColor="green";

 fixedRect.velocityY = 5;
 movingRect.velocityY = -5;

 obj3 = createSprite(300, 100, 50, 50);
 obj3.shapeColor="pink";
 obj4 = createSprite(400,100, 50,50);
 obj4.shapeColor="lightblue";

}

function draw() {
  background(0,0,0); 
  obj4.x = World.mouseX;
  obj4.y = World.mouseY;

  if(isTouching(obj3,obj4))
  {
    obj3.shapeColor="red";
    obj4.shapeColor="red";
  }
  else{
    obj4.shapeColor="blue";
    obj3.shapeColor="blue";
  }

  bounceOff(movingRect,fixedRect);
  
  fill("white");
  //pass the arguments
  
  drawSprites();
  
}

