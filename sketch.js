var path, pathImg;
var car, carImg;

var edges;

var bomb, bomgImg;
var coin, coinImg;
var energy, energyImg;
var bombG, coinG, energyG;

var score = 0

var bear, bearImg, bearG;


function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  carImg = loadImage("car.png")
  bombImg = loadImage("bomb.png")
  coinImg = loadImage("coin.png")
  energyImg = loadImage("energyDrink.png")
  bearImg = loadImage("bear.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite(200,200)
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale= 1.2;

  car = createSprite(200,350)
  car.addImage(carImg)
  car.scale = 0.075

  bombG = new Group();
  coinG = new Group();
  energyG = new Group();
  bearG = new Group();
 
  
}

function draw() {
  background(0);

  edges = createEdgeSprites()
  car.bounceOff(edges)

  car.x = World.mouseX

  if(path.y > 400){
    path.y = height/2
  }


  bombSpawn()
  coinSpawn()
  energySpawn()
  bearSpawn()

  if(bombG.isTouching(car)){
    bombG.destroyEach();
    score = score/2;
  }

  if(coinG.isTouching(car)){
    coinG.destroyEach();
    score = score + 60;
  }

  if(energyG.isTouching(car)){
    energyG.destroyEach();
    score = score*2;
  }

  if(bearG.isTouching(car)){
    bearG.destroyEach();
    score = 0;
  }

drawSprites()
textSize(20)
fill(255)
text("Score: "+ score,45,30)
}

function bombSpawn(){
  if (World.frameCount % 300 == 0) {
    var bomb = createSprite(Math.round(random(20, 380),40, 10, 10));
    bomb.addImage(bombImg);
    bomb.scale=0.13;
    bomb.velocityY = 2;
    bomb.lifetime = 160;
    bombG.add(bomb);
    }
}


function coinSpawn(){
  if (World.frameCount % 150 == 0) {
    var coin = createSprite(Math.round(random(20, 380),40, 10, 10));
    coin.addImage(coinImg);
    coin.scale=0.5;
    coin.velocityY = 2;
    coin.lifetime = 160;
    coinG.add(coin);
    }
}



function energySpawn(){
  if (World.frameCount % 450 == 0) {
    var energy = createSprite(Math.round(random(20, 380),40, 10, 10));
    energy.addImage(energyImg);
    energy.scale=0.13;
    energy.velocityY = 2;
    energy.lifetime = 160;
    energyG.add(energy);
    }
}

function bearSpawn(){
  if (World.frameCount % 600 == 0) {
    var bear = createSprite(Math.round(random(20, 380),40, 10, 10));
    bear.addImage(bearImg);
    bear.scale=0.13;
    bear.velocityY = 2;
    bear.lifetime = 160;
    bearG.add(bear);
    }
}