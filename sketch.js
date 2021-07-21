var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background("white");
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;

  if (frameCount % 80 == 0) {
    var select_sprites = Math.round(random(1,2));
    if (select_sprites == 1) {
      spawnApples();
    }
    else {
      spawnLeaves();
    }
  }

  console.log(frameCount)

  drawSprites();
}

function spawnApples() {
  apples = createSprite(random(50,350), 40,40,10)
  apples.addImage(appleImg);
  apples.scale = 0.1;
  apples.velocityY = 10
  apples.lifetime = 80;

}

function spawnLeaves() {
  leaves = createSprite(random(50,350), 40,40,10)
  leaves.addImage(leavesImg);
  leaves.scale = 0.1;
  leaves.velocityY = 10
  leaves.lifetime = 80;

}