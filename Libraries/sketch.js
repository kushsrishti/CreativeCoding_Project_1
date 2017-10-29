
cnt = 0
mult = 60
diff = 0.02

function setup() {
createCanvas(windowWidth, windowHeight); 
WW = windowWidth/500
WH = windowHeight/10
} 
function draw() 

{

  
  
  if (mouseIsPressed)
    background(255);
  else
     background(135,206,250); 
  everything();
clouds();

}

function everything()
{

noStroke();
fill(212,112,100)
cnt = cnt + 0.02
beginShape();
for(var i=0; i<501; i++){
vertex(WW*i, sin(cnt-mult*i)*diff+WH);
}
vertex(WH*50, WW*0);
vertex(WH*0, WW*2);
endShape(CLOSE);
frameRate(0.5);
  
if(diff=10)
  mult = mult + 15
if ( diff=200)
  mult = mult - 1
  
if (mouseY)
  diff = diff + 4
if (mouseX)
  diff = diff - 0.02

}

function clouds() {
  

  noStroke();
    fill (202,220,255);
     arc (100, 100, 60, 90, PI, PI);
     arc (130, 110, 60, 60, PI, TWO_PI);
     arc (80,110, 60, 60, PI, TWO_PI);
}
