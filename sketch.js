
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage,food;
var FoodGroup, obstacleGroup;
var st;




function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600, 300);
  
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,200,600,20);
  ground.x = ground.width /2;

   invisibleGround = createSprite(200,200,400,10);
  invisibleGround.visible = false;
  
  
  
  
   FoodGroup = createGroup();
   obstacleGroup = createGroup();

  
  monkey.collide(invisibleGround);
  
}


function draw() {

  background(rgb(230, 250, 255) );
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }

  
 //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
    monkey.collide(invisibleGround);
   
  var st = 0;
  stroke("black");
  textSize (20);
  fill("black");
  st = Math.ceil(frameCount/frameRate());   
  text("SurvivalTime : "+st, 400, 50);
  
  
  food();
  stone();
 
  drawSprites();
}

function food(){
if (frameCount % 100 === 0) {
    var banana = createSprite(600,180,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1  ;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
  
    FoodGroup.add(banana);

}
}

function stone(){
if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,160,40,10);
    obstacle.y = Math.round(random(170,170));
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1  ;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
  
    FoodGroup.add(obstacle);

}
}
