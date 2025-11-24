// 最終課題を制作しよう
let x, y, vy, g;
let started = false;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  vy = 0
  g = 0.5
}

function draw(){
  background(160, 192, 255);
   const groundY = height * 0.8; 
  fill(0);
  rect(0, groundY, width, height - groundY);

  fill(255, 255, 255)
  ellipse(x, y, 70, 70)

  if (started){
  vy += g;
  y += vy;

  if (y >= groundY - 35){
    y = groundY - 35;
    vy = 0
  }
}
}

function mousePressed(){
  started = true;
   let d = dist(mouseX, mouseY, x, y);
     if (d < 35) {
  vy = -10 
}
}
