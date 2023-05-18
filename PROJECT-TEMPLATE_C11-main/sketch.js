var mar,marImg;
var barco,barcoImg


function preload(){
marImg = loadImage("sea.png");

barcoImg = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");

}

function setup(){
  createCanvas(400,400);

  mar = createSprite(400,200); 
  mar.addImage(marImg);
  mar.velocityX = -5;
  mar.scale = 0.3
 
  barco = createSprite(130,200,30,30);
  barco.addAnimation("movimento",barcoImg);
  barco.scale = 0.25 

}

function draw() {
  background("blue");
    drawSprites();
  
  mar.velocityX = -3
  
if (mar.x<0){
mar.x = mar.width/8;
}
 
}
