var clouds=[];
cnt = 0
mult = 60
diff = 0.02
var color=0;

function setup() {
createCanvas(windowWidth, windowHeight); 

 
  WW = windowWidth/500;
  WH = windowHeight/10;

  q = new Wave(100,110,100,100);
  p = new Wave(200,400,400,200);
  r = new Wave (400,200,300,150);
  s = new Wave (700,350,400,200);
  t = new Wave (900,100,160,75);
  w = new Wave (600,400,1200,800);


  acceleration = random(1) / 5;
  velocity = random(5, 10);
  a = random(0, TWO_PI);
} 

function draw() 

{
 background(109,167,255); 

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
  fill(43,36,59,255,200);

  beginShape();
  for(var i=0; i<600; i++){
   
    vertex(WW*i, sin(cnt-mult*i)*diff+WH);
  }

  vertex(WH*100, WW*0);

  vertex(WH*0, WW*400);
  endShape(CLOSE);
  frameRate(0.7);
  
  if(diff=10)

    mult = mult + 15
  if ( diff=400)
    mult = mult - 10
  }

class Wave {
  
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
 
   console.log("hhhhhhhhhhhhhhhh"+this.ypos);
  if (keyIsPressed ==true) {
  background(71,1,99,100);

  fill (255,66,60,100);
 // rotate(PI/5.0);
  arc (this.xpos, this.ypos, random(10,this.hgt),  random(10,this.wdth), PI, PI);  
  arc (this.xpos+30, this.ypos, random(20,this.hgt),random(20,this.wdth), PI, TWO_PI);
  arc (this.xpos-20,this.ypos, random(30,this.hgt), random(30, this.wdth), PI, TWO_PI);
  arc (this.xpos, this.ypos, random(10,this.hgt),  random(10,this.wdth), PI, PI);
  arc (this.xpos+30, this.ypos, random(20,this.hgt),random(20,this.wdth), PI, TWO_PI);
//  translate(this.xpos+100, this.ypos+10);
 rotate(PI/0.5);
  arc (this.xpos-20,this.ypos, random(30,this.hgt), random(30, this.wdth), PI, TWO_PI);
  }
}

burst()
{
if (mouseIsPressed ==true) {

  background(0,135,79,100);
  console.log("hhhhhhhhhhhhhhhh");
   for(var i = 0;  i<= mouseX; i+=20)
   {
    for(var j = 0; j <= mouseY; j+=20)
    {


//translate(this.xpos+100, this.ypos+10);

  //applyMatrix(1, 10, 10, 100, 40, 50);
rotate(PI/2.0);
if (this.ypos<200) {
    fill (255,189,46);
ellipse(i,j,10,5);
}
else if (this.ypos<500)
{
  fill (255,18,145); 
ellipse(i,j,5,5);

}
}
}
     }
  }
}
