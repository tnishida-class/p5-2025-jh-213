// 小手調べ
function setup(){
  createCanvas(100, 100);
  noFill();
  for(let i = 0; i < 10; i++){
    // BLANK[1] 条件分岐を使って、前半は赤、後半は青で円を描こう
    if (i < 5) {
  stroke(0, 0, 255); // 前半：紅色線條
} else {
  stroke(255, 0, 0); // 後半：藍色線條
}

ellipse(50, 50, (i+1)*10, (i+1)*10);
  }
}
