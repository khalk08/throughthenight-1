var gameState = 0;
var backgroundImg, paperImg;

function preload(){

   backgroundImg = loadImage("background.jpg");
   paperImg = loadImage("paper.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(backgroundImg);

  image(paperImg, 300, 200, 850,300);
  textSize(25)
  fill("black")
  text(" hey! welcome to my game! \n if you want to know the story of my game, press the up arrow key, \n if you want to directly play the game, press the space key!",
  350, windowHeight/2);
  







  drawSprites();
}


