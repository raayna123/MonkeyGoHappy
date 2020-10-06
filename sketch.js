var bananaImage, obstacleImage, obstacleGroup, backGround, score, backImage, monkeyRunning, ground, monkeyImage, bananaGroup;

function preload() {
  backImage = loadImage("jungle.jpg");
  
 monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png", "Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png", "Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
}


function setup() {
  createCanvas(400, 400);
  
  backGround = createSprite(200,200,400,400);
  backGround.addImage("backGround",backImage);
  backGround.x = backGround.width /2;
  backGround.velocityX = -4;
  
  ground = createSprite(200,380,400,20);
  ground.visible = false;
  
  monkeyRunning = createSprite(50,380,20,20);
  monkeyRunning.addAnimation("running", monkeyImage);
  monkeyRunning.scale = 0.1;
  
  score = 0;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
  background(220);
  
  monkeyRunning.collide(ground);
  
  
  
  
  if(bananaGroup.isTouching(monkeyRunning)) {
    bananaGroup.destroyEach();
    score = score + 2;
    increaseScore();
  }
  
  if(obstacleGroup.isTouching(monkeyRunning)) {
    console.log("raayna");
    obstacleGroup.destroyEach();
    monkeyRunning.scale = 0.1;
  }

  if (keyDown("space")) {
    monkeyRunning.velocityY = -14; 
    
  }  
  
  monkeyRunning.velocityY = monkeyRunning.velocityY + 0.8;
  
  if (backGround.x < 0){
    backGround.x = backGround.width/2;
  }
  
 
  
  bananas();
  obstacles();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text.depth = backGround.depth + 1;
  text("score:" + score, 300, 50);    
  
}

function bananas() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,250,10,10);
    banana.y = Math.round(random(150,250));
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;
    banana.lifetime = 134;
    bananaGroup.add(banana);

  }
}

function obstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(400,350,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -4;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
}

function increaseScore() {
   switch(score) {
      case 10 : monkeyRunning.scale = 0.12;
            break;
      case 20 : monkeyRunning.scale = 0.14;
            break;     
      case 30 : monkeyRunning.scale = 0.16;
            break;
      case 40 : monkeyRunning.scale = 0.18;
            break;      
      default : break;      
  }
}