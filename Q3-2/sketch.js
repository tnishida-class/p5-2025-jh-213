// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
let speed = 1;
const g = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

   // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  noStroke();
  rect(0, groundY,width, height-groundY)

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);
  
  if(keyIsDown(" ".charCodeAt(0))){speed = 3}
  else {speed = 1};
  if(keyIsDown(LEFT_ARROW)){vx = -5 * speed} 
  else if(keyIsDown(RIGHT_ARROW)){vx = 5 * speed}
  else{vx = 0} // BLANK[1] キャラクターの左右移動

  // BLANK[2] 重力とジャンプ

  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  // 位置を更新
  x += vx;
  y += vy;

  
}