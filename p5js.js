



function setup(){
    createCanvas(500,500);
    background(0);
    angleMode(DEGREES)
    translate(width/2, height/2);
    let layers = random(4,40)
    let pedals = random(10,30)
    let x1,x4,x2,x3,y1,y2,y3,y4;
    for (let j = layers; j > 0; j--){
        let ly = j / layers;
    x1 = random(185*ly,205*ly);
    x2 = random(215*ly,215*ly);
    x3 = random(150*ly,230*ly);
    x4 = random(150*ly,245*ly);
    //
    let ang = 360/pedals;
    // y1 = random(0,100);
    y2 = random(100*ly,250*ly);
    y3 = random(100*ly,250*ly);
    // y4 = random(0,100);
    colorMode(HSB, 360,100,100, 100)
    let hue = random(256);
    let sat = random(70,100);
    let brt = random(70,100);
    let alpha = random(30,50);
    fill(hue,sat,brt, alpha);

for(let i = 0; i < pedals/2; i++){
    // stroke(hue,sat,brt, alpha);
beginShape();
            curveVertex(x1,0);
            curveVertex(x1,0);
            curveVertex(x2,y2);
            curveVertex(x3,y3);
            curveVertex(x4,0);
            curveVertex(x4,0);
            endShape();
beginShape();
            curveVertex(x1,0);
            curveVertex(x1,0);
            curveVertex(x2,-y2);
            curveVertex(x3,-y3);
            curveVertex(x4,0);
            curveVertex(x4,0);
            endShape();
            noStroke();
            // strokeWeight(random(1-10))
rotate(ang*2)
noLoop();
}
}
};



function mousePressed(){
    loop();
  }