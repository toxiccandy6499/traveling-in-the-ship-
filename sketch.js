seaImg = loadImage("sea.png");
shipImg = loadImage ("ship1.png");

seaImg = loadAnimattion
shipImg1 = loadAnimattion


spriteName.addImage(seaImg);
spriteName.addImage(shipImg1);

if(sea.x < 0){
   sea.x = sea.width/2;
}

if(ship1.x < 0){
  ship1.x = ship1.width/2;

}

function preload(){

}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
 
}