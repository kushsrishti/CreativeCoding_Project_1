var clouds=[];
cnt = 0
mult = 60
diff = 0.02
var b1;
var x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  WW = windowWidth/500;
  WH = windowHeight/10;

  q = new wave(100,110,60,90);
  p = new wave(200,400,60,90);
  r = new wave (400,200,60,90);


} 

function draw() 

{

  background(135,206,250); 
  everything();
  
 
  console.log("hfff"+p.ypos);

  
    q.ypos+=random(-20,20);
    p.ypos+=random(-20,30);
    r.ypos+=random (-20,30);
    q.xpos += random(-20,20);
    p.xpos+=random(-20,30);
    r.xpos+=random (-20,30);


  console.log("hhh"+q.xpos);
  q.spiral();
  p.spiral();
  r.spiral();

q.burst();

  //b1.spiral(clouds[0]);
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
  frameRate(1);
  
  if(diff=10)
    mult = mult + 15
  if ( diff=200)
    mult = mult - 1
    
  if (mouseY)
    diff = diff + 4
  if (mouseX)
    diff = diff - 0.02

}

class wave {
  
constructor(x,y,h,w) {

  this.xpos=x;
  this.ypos=y;
  this.hgt=h;
  this.wdth=w;
  
  //console.log("jjjjj");

}
  
spiral()
  {

   noStroke();
   fill (202,220,255);
   console.log("hhhhhhhhhhhhhhhh"+this.ypos);

   arc (this.xpos, this.ypos, random(10,this.hgt),  random(10,this.wdth), PI, PI);
   arc (this.xpos+30, this.ypos, random(20,this.hgt),random(20,this.wdth), PI, TWO_PI);
   arc (this.xpos-20,this.ypos, random(30,this.hgt), random(30, this.wdth), PI, TWO_PI);
  
  }
burst()
{
  console.log("hhhhhhhhhhhhhhhh");
   for(var i = 0;  i<= width; i+=100){
    for(var j = 0; j <= height; j+=100){
    fill (88,145,212);
  ellipse(i,j,10,10);}
}
}
}
