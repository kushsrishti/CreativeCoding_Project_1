

function setup() 
{          
  //Canvas Size
  createCanvas(650, 500);  
}
function draw()
{  
  ///waterbubbles();
  sky();  
  movingwater();
  clouds();

 
  fish();
  man();
  ///tree();
  
  fill(255); 
    for (var x = 0; x <= 650; x += 30)
 { 
    for(var y = 331; y <=500; y += 30)
  {
  
    fill(202,220,255,200);
        frameRate(1);
    ellipse(x, y ,15, 15);
    
  }}

   push();
  translate(random(-650,650),random(20));

   clouds();
  pop();
  
  push();
  translate(random(-650,650),random(20));

   fish();
  pop();


}

function sky() 
{
background (135,206,250);
}


function movingwater() {

///shades of water
  fill(100, 174, 212);
  noStroke();
  ellipse(562, 472, 1123, 348);

///shades of water
  fill(100, 126, 212);
  noStroke();
  ellipse(43, 491, 1285, 348);

///shades of water
  fill(76, 175, 245);
  noStroke();
  ellipse(325, 550, 1100, 350);
}


function clouds() {
  fill (202,220,255);
  noStroke();
     arc (100, 100, 60, 90, PI, PI);
     arc (130, 110, 60, 60, PI, TWO_PI);
     arc (80,110, 60, 60, PI, TWO_PI);
}

function fish() {
  noStroke();
  fill (212,112,100,200);
    triangle (50, 380, 90, 400,50,420);
  ellipse(100, 400, 100, 30);

  
}

function man() {
  fill(0);
  ellipse(300,200,40,40);
  ellipse(300, 240, 25, 75);
  line (282,280, 40, 40);
  arc (300,280, 50, 40, PI, TWO_PI);

}
  