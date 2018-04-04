var x = 20;
var direction = 1;

function setup()
{
  createCanvas (500,500);
  background (42,42,42);
  
}
function draw(){

  ellipse(x,250,60,60);
    x = x + direction ;

    if ((x > 500)||(x < 0)){
      direction = direction * -1


    }
}
