class Shooter{

    constructor(x,y,width,height) {
      
      this.body = Bodies.rectangle(x,y,width,height);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("run.png");
      this.body.speed=-3;
      }
  
    display(){
      
      var pos =this.body.position;
      imageMode(CENTER);
     image(this.image,pos.x, pos.y, 100, 100);
    
      }
  
  }        