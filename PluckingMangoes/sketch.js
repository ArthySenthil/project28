const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
 
var backgroundImg,platform;
var stone, slingShot;
var tree, boy;
var mango1, mango2, mango3, mango4, mango5, mango6;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    boy=loadImage("sprites/boy.png");
}

function setup(){
    var canvas = createCanvas(1200,650);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    tree = new Tree(800,600);
    stone = new Stone(80,200,30,60);
    slingshot = new SlingShot(stone.body,{x:90, y:230});
    mango1=new Mango(700,250,35);
    mango2=new Mango(800,250,30);
    mango3=new Mango(900,250,35);
    mango4=new Mango(800,150,40);
    mango5=new Mango(900,100,30);
    mango6=new Mango(800,50,20);
   
}

function draw(){
    background("skyblue");
    Engine.update(engine);
    strokeWeight(4);
    imageMode(CENTER);
    image(boy, 150, 300, 200, 300);
    textSize(16);
    text("To pluck Mangoes, pull and release the stone!",50,100);
    text("Press space to play again!",50,150);
    tree.display(); 
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    stone.display();
    ground.display();
    slingshot.display();
    detectCollision(stone,mango1);
    detectCollision(stone,mango2);
    detectCollision(stone,mango3);
    detectCollision(stone,mango4);
    detectCollision(stone,mango5);
    detectCollision(stone,mango6);


}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32 ){
        slingshot.attach(stone.body);
   }
 }

function detectCollision(lstone,lmango){
    mangoBodyPosition=lmango.body.position;
    stoneBodyPosition=lstone.body.position;

    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    console.log(lmango.radius+lstone.width/2);
    if(distance<=lmango.radius+lstone.width/2)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

   // if(distance<lmango.r)


}