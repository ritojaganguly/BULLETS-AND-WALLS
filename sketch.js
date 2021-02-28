vvar wall, thikness
var bullet, speed, weight

function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  weight = random(30,52)
  thikness = random(22,83)
  bullet = createSprite(400, 200, 50, 10)
  bullet.shapeColor("white")
  bullet.velocityX = speed 
  wall = createSprite(1200, 200, thikness, height/2)
  wall.shapeColor(80,80,80)
  }

function draw() {
  background(255,255,255);  
  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0
    var damage = 0.5 * weight * speed * speed/(thikness * thikness * thikness)
    if (damage > 10){
      wall.shapeColor = color (255,0,0)
    }
    if (damage < 10){
      wall.shapeColor = color (0,255,0)
    }
    }

  drawSprites();
}

function hasColllided(1bullet,1wall){
  bulletRightEdge = 1bullet.x + 1bullet.width
  wallLeftEdge = 1wall.x
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}