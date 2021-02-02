class Tree   {
  constructor(x,y){
       this.x=x;
       this.y=y;
        
        this.containerWidth=450;
		this.containerHeight=600;
		this.containerThickness=10;
		
		this.image=loadImage("sprites/tree.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.containerWidth, this.containerThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(0, this.y-this.containerHeight/2, this.containerThickness, this.containerHeight, {isStatic:false})
		this.rightWallBody=Bodies.rectangle(this.x+this.containerWidth/2, this.y-this.containerHeight/2, this.containerThickness, this.dustbinHeight, {isStatic:false})
        World.add(world, this.bottomBody);
		World.add(world, this.leftWallBody);
		World.add(world, this.rightWallBody);
    
       
         
    }
    display() {    
        var posBottom=this.bottomBody.position;
        push();
        translate(posBottom.x, posBottom.y+10);
        fill(255);
        imageMode(CENTER);
        image(this.image, 0,-this.containerHeight/2,this.containerWidth, this.containerHeight)
        pop();
    
      }
     
  }
  