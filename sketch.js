var car,wall;
var speed,weight;

 function setup() { speed=random(55,90);
    weight=random(400,1500);

    createCanvas(1600,400);

    car=createSprite(50,200,50,50)
    wall=createSprite(1500,200,60,height/2)
    wall.shapeColor="80,80,80";
    car.velocityX = speed;
     }
     
if(wall.x-car.x < (car.width+wall.width)/2)

{ 
    car.velocityX=0;
    var deformation =0.5 * weight * speed * speed/22509;
    if( deformation>180)
   {
     car.shapeColor=color (255,0,0);
   }

   if(deformation<180 && deformation>100)
   {
       car.shapeColor=color(230,230,0);
   }

   if(deformation<100)
{
    car.shapeColor=color(0,225,0);
   }
}
    function draw (){
  background(0,0,0);
  car.x - World.mouseX;
  car.y - World.mouseY;
  if (car.x - wall.x === wall.width/2 + car.width/2 ) {
    car.shapeColor = "green";
    wall.shapeColor = "green";
  }         
 else{
    car.shapeColor = "red";
    wall.shapeColor = "red";
 }


    }
