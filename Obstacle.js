class Obstacle{

    constructor(x,y,width,height) {
      
      this.body = Bodies.rectangle(x,y,width,height);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("1.png","2.png ","3.png","4.png","5.png","6.png","7.png","8.png");
      this.body.speed=-3;
      }
  
    display(){
      
      var pos =this.body.position;
      imageMode(CENTER);
     image(this.image,pos.x, pos.y, 100, 100);
    
      }
  
  }        