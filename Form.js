class Form {

    constructor() {
      
      this.button = createButton('PLAY');
      this.button = createButton('Reset');
      this.image=loadImage("hawk.jpg");
      
    }
    hide(){
        this.button.hide();
    }
    display(){
        this.button.position(600,400);
        this.button.mousePressed(()=>{
            
            this.button.hide();
           
            GameState===2;
            
          });
          this.reset.mousePressed(()=>{
           gameState=1;
            })
    }
      
          
          
      
    
}