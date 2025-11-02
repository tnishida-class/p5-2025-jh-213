// 心臓の鼓動のようなアニメーション
const cycle = 100; // 1周期のフレーム数
let count; // 何フレーム目か
let speed = 1; // アニメーションの速さ

function setup(){
  createCanvas(200, 200);
  count = 0;
}

function draw(){
  background(160, 192, 255);
  let size = 50;
  if (count < cycle / 2){
    size += 5;
  } else {
    size -= 5;
  }// BLANK[1] 1周期の前半は size が大きくなり、後半は小さくなる
count = (count + speed) % cycle;
  ellipse(width / 2, height / 2, size); 
  }

  function keyPressed(){
    speed = 5;} // BLANK[2]
  
  function keyReleased(){
    speed = 1};


  