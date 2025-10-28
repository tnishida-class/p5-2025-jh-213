// チェッカー
function setup() {
  createCanvas(200, 200);
      const size = width / 8; // マスの一辺の長さ
      noStroke();

    for(let i = 0; i < 8; i++){
      for(let j = 0; j < 8; j++){
        // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
        if((i + j) % 2 === 0){
          fill(255)
        }else{
          fill(127)
        }
      rect(size * i, size * j, size, size)

       // チェッカー
       if ((i + j) % 2 === 1){
        const x = size * i + size/2;
        const y = size * j + size/2;
        const r = size * 0.8;

        if (j <= 2){
          fill(255, 0, 0);
          ellipse (x, y, r, r);
        }
        if (j >= 5){
          fill (0, 0, 0)
          ellipse (x, y, r, r);
        }
       }
   }
}
}
