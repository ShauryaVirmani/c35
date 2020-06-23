var database;
var form;
var game,player,playerCount,gameState=0;


function setup(){
  database = firebase.database();
 
  createCanvas(500,500);

  
}

function draw(){
  background("white");
  
  
    drawSprites();
  
}


