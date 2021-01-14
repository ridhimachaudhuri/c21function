var rect1 , rect2

function setup() {
  createCanvas(400,400);
  rect2 = createSprite(50, 50, 50, 50);
  rect1 = createSprite(350,350,50,70)
 rect2.shapeColor = "yellow"
 rect1.shapeColor = "yellow"
 rect2.debug = true
 rect1.debug = true
 rect1.velocityY = -2
 rect2.velocityY = 2
 rect1.velocityX = -2
 rect2.velocityX = 2
}

function draw() {
  background(0); 
 if(istouching(rect1,rect2)){
  rect2.shapeColor = "red"
  rect1.shapeColor = "red"
 }
 //else{
  //rect2.shapeColor = "yellow"
  //rect1.shapeColor = "yellow"
 //}
  bounceoff(rect1,rect2);
    
  

  /* //if(rect1.y-rect2.y<=rect2.height/2+rect1.height/2 &&
    rect2.y-rect1.y<=rect1.height/2+rect2.height/2){
    rect1.velocityY = rect1.velocityY * (-1)
    rect2.velocityY = rect2.velocityY * (-1)
  } */
  drawSprites();
}

