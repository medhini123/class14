var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var invisibleGround;
var clouds, cloudsImage;
var obstacles,
  obstacle1Image,
  obstacle2Image,
  obstacle3Image,
  obstacle4Image,
  obstacle5Image,
  obstacle6Image;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloudsImage = loadImage("cloud.png");
  groundImage = loadImage("ground2.png");
  obstacle1Image = loadImage("obstacle1.png");
  obstacle2Image = loadImage("obstacle2.png");
  obstacle3Image = loadImage("obstacle3.png");
  obstacle4Image = loadImage("obstacle4.png");
  obstacle5Image = loadImage("obstacle5.png");
  obstacle6Image = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  //create a trex sprite
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  //create a ground sprite
  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;

  invisibleGround = createSprite(200, 195, 400, 20);
  invisibleGround.visible = false;
}

function draw() {
  background("white");

  //jump when the space button is pressed
  if (keyDown("space")) {
    trex.velocityY = -8;
  }
  trex.collide(invisibleGround);

  trex.velocityY = trex.velocityY + 0.5;
  ground.velocityX = -4;
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  console.log(trex.y);
  drawSprites();
  createClouds();
  createObstacles();
}
function createClouds() {
  if (frameCount % 50 === 0) {
    clouds = createSprite(600, 80, 100, 20);
    clouds.addImage("cloudy", cloudsImage);
    clouds.scale = 0.1;
    clouds.velocityX = -4;
    // console.log("display clouds", frameCount);
    clouds.y = Math.round(random(80, 150));
    trex.depth = clouds.depth;
    trex.depth += 1;

    console.log("clouds depth is ", clouds.depth);
    console.log("trex depth is ", trex.depth);
    //lifetime to clouds sprite.lifetime
    //time=distance/speed= 600/4= 150
    clouds.lifetime = 150;
  }
}

function createObstacles() {
  if (frameCount % 60 === 0) {
    obstacles = createSprite(600, 175, 10, 80);
    obstacles.velocityX = -4;
    var number = Math.round(random(1, 6));
    obstacles.scale = 0.1;
    switch (number) {
    
      case 1:
        obstacles.addImage("ob1", obstacle1Image);
        break;
      case 2:
        obstacles.addImage("ob2", obstacle2Image);
        break;
      case 3:
        obstacles.addImage("ob3", obstacle3Image);
        break;
      case 4:
        obstacles.addImage("ob4", obstacle4Image);
        break;
      case 5:
        obstacles.addImage("ob5", obstacle5Image);
        break;
      case 6:
        obstacles.addImage("ob6", obstacle6Image);
        break;
    }
  }
}
