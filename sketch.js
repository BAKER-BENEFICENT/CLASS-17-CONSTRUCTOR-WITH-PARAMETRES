var box_1;

function setup() 
{
  createCanvas(400, 400);
  box_1 = new Box(10, 20, 40, 30, 4, 5);
}

function draw() 
{
  background(220);
  box_1.show();
  box_1.move();
  box_1.bounce();

}

