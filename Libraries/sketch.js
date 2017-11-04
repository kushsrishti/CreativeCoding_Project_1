var clouds=[];
cnt = 0
mult = 60
diff = 0.02
var x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); 

 
  WW = windowWidth/500;
  WH = windowHeight/10;

  q = new wave(100,110,60,90);
  p = new wave(200,400,60,90);
  r = new wave (400,200,60,90);
  s = new wave (700,350,60,90);
  t = new wave (900,100,60,90);
  w = new wave (1200,200,60,90);




} 

function draw() 

{
 background(0); 

  everything();
  
 
  console.log("hfff"+p.ypos);

  
    q.ypos+=random(-20,20);
    p.ypos+=random(-20,30);
    r.ypos+=random (-20,30);
    s.ypos+=random(-20,20);
    t.ypos+=random(-20,30);
    w.ypos+=random (-20,30);
    q.xpos += random(-20,20);
    p.xpos+=random(-20,30);
    r.xpos+=random (-20,30);
    s.xpos += random(-20,20);
    t.xpos+=random(-20,30);
    w.xpos+=random (-20,30);



  console.log("hhh"+q.xpos);
  q.spiral();
  p.spiral();
  r.spiral();
  s.spiral();
  t.spiral();
  w.spiral();

 q.burst();
 p.burst();
 r.burst();



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
  vertex(WH*100, WW*0);
  vertex(WH*0, WW*0);
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
   arc (this.xpos, this.ypos, random(10,this.hgt),  random(10,this.wdth), PI, PI);
   arc (this.xpos+30, this.ypos, random(20,this.hgt),random(20,this.wdth), PI, TWO_PI);
   arc (this.xpos-20,this.ypos, random(30,this.hgt), random(30, this.wdth), PI, TWO_PI);
  }
burst()
{

  console.log("hhhhhhhhhhhhhhhh");
   for(var i = 0;  i<= mouseX; i+=20){
    for(var j = 0; j <= mouseY; j+=20){
  
    fill (88,145,212);

translate(this.xpos, this.ypos);

  //applyMatrix(1, 10, 10, 100, 40, 50);
rotate(PI/2.0);
//sphere(50);
ellipse(i,j,mouseX,mouseY);
}}}}