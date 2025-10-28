// チェッカー
function setup() {
  createCanvas(200, 200);
  fill(0);
      const size = width / 8; // マスの一辺の長さ
    //noStroke();
    for(let i = 0; i < 8; i++){
      for(let j = 0; j < 8; j++){
        // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
       fill(255, 255, 255);
     rect(size * i, size * j, size, size);
    if(i + j % 2 == 1){
      fill(127, 127, 127) 
    }
  }
}
}