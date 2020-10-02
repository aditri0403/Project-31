class plinko{
    constructor(x,y,height,angle){
        var options={
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
    this.body=Bodies.circle(x,y,10,options);
    this.x=x;
    this.y=y;
    World.add(world,this.body);
    }
    display(){
    ellipse(this.body.position.x,this.body.position.y,10,options);
  
}
}; 