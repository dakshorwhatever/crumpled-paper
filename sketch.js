var bullet, wall
var speed, weight, thickness 
function setup() {
  createCanvas(800,400);
  speed = random(70,90)
  weight = random(400,1500)
  thickness = random(22,83)
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(700, 200, thickness, height/2);

}

function draw() {
  background("black");  
  bullet.velocityX=speed;
  if (hasCollided(bullet,wall))
{
  bullet.velocityX = 0;
  
  var deformation = 0.5 * weight * speed * speed/(thickness *thickness *thickness);
  
  if (deformation>10)
  {
    wall.shapeColor=color(255,0,0);
  } 
  
  if(deformation<10)
  {
    wall.shapeColor=color(0,255,0)
  }
}
console.log(deformation)
  drawSprites();
}