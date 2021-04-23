var canvas;
var bg;

var tom, tomImg1,tomImg2,tomImg4;
var jerry, jerryImg1,jerryImg2,jerryImg4;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1 = loadAnimation("images/cat2.png");
    tomImg2 = loadAnimation("images/cat3.png");
    tomImg4 = loadAnimation("images/cat4.png");
    jerry = loadAnimation("images/mouse1.png")
    jerryImg1 = loadAnimation("images/mouse2.png")
    jerryImg2 = loadAnimation("images/mouse3.png")
    jerryImg4 = loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(800,500);
    //create tom and jerry sprites here
    tom = createSprite(650, 400);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(150, 400);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;
}

function draw() {

    background(bg);

    //Write condition here to evalute if tom and jerry collide
    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg4);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg4);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


    

function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5; 
    tom.addAnimation("tomRunning", tomImg2,tomImg1);
    tom.changeAnimation("tomRunning");
    
    jerry.addAnimation("jerryTeasing", jerryImg2,jerryImg1);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryTeasing");
}

}
