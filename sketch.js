
var wall,bullet
var weight ,speed,thickness


function setup() {

  speed=random (223,321);
  weight=random (30,52);
  thickness=random(22,83)


  createCanvas(1600,400);
  bullet =createSprite(100, 300, 100, 25);
  bullet.velocityX= speed ;

  wall=createSprite(1200,300,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(255,255,255);  

 
  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness) 
  if (damage >10){
    wall.shapeColor=color(255,0,0)
  }
  if (damage <10){
    wall.shapeColor=color(0,255,0);
  }
    
    
  }

  drawSprites();
}



  


 


