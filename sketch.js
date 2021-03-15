var canvas;
var music;
var box;
var surface1;
var surface2;
var surface3;
var surface4;
var topEdge;
var leftEdge;
var rightEdge;
var bottomEdge;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1= createSprite(100,500,100,20);
    surface1.shapeColor="Yellow"

    surface2= createSprite(300,500,100,20);
    surface2.shapeColor="Red"

    surface3= createSprite(500,500,100,20);
    surface3.shapeColor="Blue"

    surface4= createSprite(700,500,100,20);
    surface4.shapeColor="Green"

    //create box sprite and give velocity
    box= createSprite(random(20,750),400,50,50);
    box.velocityX=4;
    box.velocityY=-2;

    //creating edge sprites
    topEdge= createSprite(0,0,10000,1);
    leftEdge= createSprite(0,0,1,10000);
    rightEdge= createSprite(800,0,1,10000);
    bottomEdge= createSprite(0,600,10000,1);

    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    box.bounceOff(topEdge);
    box.bounceOff(leftEdge);
    box.bounceOff(rightEdge);
    box.bounceOff(bottomEdge);
    
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)){
       box.bounceOff(surface1);
       box.shapeColor="Yellow"; 
    }

    if(surface2.isTouching(box)){
        box.bounceOff(surface2);
        box.shapeColor="Red"; 
     }

     if(surface3.isTouching(box)){
        box.bounceOff(surface3);
        box.shapeColor="Blue"; 
     }

     if(surface4.isTouching(box)){
        box.shapeColor="Green"; 
        box.velocityX=0;
        box.velocityY=0;
        music.play();
     }

    drawSprites();
}
