function setup() {
    createCanvas(windowWidth, windowHeight); 
WW = windowWidth/500
WH = windowHeight/2
cnt = 0
mult = 60
diff = 0.02
} 
function draw() {
background(135,206,250); 
noStroke();
fill(212,112,100,200)
cnt = cnt + 0.02
beginShape();
for(var i=0; i<501; i++){
vertex(WW*i, sin(cnt-diff*i)*mult+WH);
}
vertex(WW*500, WH*2);
vertex(WW*0, WH*2);
endShape(CLOSE);
frameRate(5);  
if (mouseY)
  mult = mult + 5
if (mouseX)
  mult = mult - 0.1
  
if (mouseY)
  diff = diff + 4
if (mouseX)
  diff = diff - 0.002
}

