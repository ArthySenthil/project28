class Mango {
  constructor(x, y, radius){
    var options={
      isStatic:true,
      restitution: 0,
      friction:1


    }
    this.body=Bodies.circle(x, y, radius, options);
    this.radius=radius;
    this.image = loadImage("sprites/mango.png");
    World.add(world, this.body);  
    this.visibility= 255;
  }
    display(){
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.radius*2, this.radius*2);
      
     
    }
  }

