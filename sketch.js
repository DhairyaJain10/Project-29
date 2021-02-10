const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var slingShot;
var polygon;
var canvas

function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(700,800,300,20);
    ground2 = new Ground(350,305,300,170);

    block1= new Box(330,235,30,40)
    block2= new Box(360,235,30,40)
    block3= new Box(390,235,30,40)
    block4= new Box(420,235,30,40)
    block5= new Box(450,235,30,40)
    block6= new Box(360,195,30,40)
    block7= new Box(390,195,30,40)
    block8= new Box(420,195,30,40)
    block9= new Box(390,155,30,40)
}