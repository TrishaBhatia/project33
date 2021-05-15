const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies; 

var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

function preload()
{
  point=loadSound("star_collect.mp3");
  over=loadSound("gameover.mp3");
}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(232,height,1200,70);
  
  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background(232, 255, 255);
  ground.setStatic;true;
  textSize(30)
  fill("silver");
  strokeWeight(3);
  stroke("grey");
  text("Score : "+score,20,40);
  //text("" + mouseX, 100,100);
  textSize(30)
  text(" 500 ", 8, 550);
  text(" 500 ", 86, 550);
  text(" 500 ", 166, 550);
  text(" 100 ", 246, 550);
  text(" 100 ", 326, 550);
  text(" 100 ", 406, 550);
  text(" 100 ", 486, 550);
  text(" 200 ", 566, 550);
  text(" 200 ", 646, 550);
  text(" 200 ", 726, 550);
  fill("black");
 
  Engine.update(engine);
  ground.display();
 // ground.setColor("black");
  
  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null)
    {
     particle.display();
        
    if (particle.body.position.y>760)
     {
       if (particle.body.position.x < 300 &&particle.body.position.x>0 ) 
         {
          score=score+500;  
          point.play();    
          particle=null;
          if ( count>= 5) gameState ="end";    
            
                             
         }
         
     else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
     {
       score = score + 100;
       point.play();
      particle=null;
     if ( count>= 5) gameState ="end";
     
        
     }
     else if(particle.body.position.x>255)
     {
       score=score+0;
       
       
     }
     else if(particle.body.position.x>-2)
     {
       score=score+0;
     }
      else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
    {
      score = score + 200;
      point.play();
      particle=null;
      if ( count>= 5)  gameState ="end";
        
    }      
   }
  }
  


   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }

   if ( gameState =="end") {
    //over.play();
    textSize(100);
    fill("white");
    strokeWeight(10);
    stroke("black");
    text("GAME OVER", 100, 250);
    
  
    
  }
}
function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}
