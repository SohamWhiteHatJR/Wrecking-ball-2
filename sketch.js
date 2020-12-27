const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1900,800);
    engine = Engine.create();
    world = engine.world;

   
   base = new Ground(950,795,1900,20);
   box1 = new Box(1200,750,70,70);
   box2 = new Box(1270,750,70,70);
   box3 = new Box(1130,750,70,70);
   box4 = new Box(1340,750,70,70);
   box5 = new Box(1060,750,70,70);

   box25 = new Box(1200,150,70,70);
   box26= new Box(1270,150,70,70);
   box27= new Box(1130,150,70,70);
   box28= new Box(1340,150,70,70);
   box29 = new Box(1060,150,70,70);


   box10 = new Box(1200,600,70,70);
   box11= new Box(1270,600,70,70);
   box12= new Box(1130,600,70,70);
   box13= new Box(1340,600,70,70);
   box14 = new Box(1060,600,70,70);
   box30 = new Box(1200,600,70,70);
   box31= new Box(1270,600,70,70);
   box32= new Box(1130,600,70,70);
   box33= new Box(1340,600,70,70);
   box34 = new Box(1060,600,70,70);

   box15 = new Box(1200,450,70,70);
   box16= new Box(1270,450,70,70);
   box17= new Box(1130,450,70,70);
   box18= new Box(1340,450,70,70);
   box19 = new Box(1060,450,70,70);

   box20 = new Box(1200,300,70,70);
   box21= new Box(1270,300,70,70);
   box22= new Box(1130,300,70,70);
   box23= new Box(1340,300,70,70);
   box24 = new Box(1060,300,70,70);

   ball = new Ball(50,300,200);

   rope1 = new Rope(ball.body,{x:750,y:30});
}

function draw(){
    background("yellow");
    Engine.update(engine);
    base.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
   
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
   
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    ball.display();
    rope1.display();
}