class plinko{
    constructor(x,y,height,angle){
        options = {
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
    ellipse(this.body.position.x,this.body.position.x,10,options);
   for (var j = 40; j <=width;j=j+50)
   {
       plinkos.push(new plinko(j,75));
   }
   for (var j = 15;j<=width-10;j=j+50)
   {
     plinkos.push(new plinko(j,175));
   }
   for (var j = 65; j <=width-20;j=j+50)
   {
       plinkos.push(new plinko(j,275));
   }
   for (var j = 100; j <=width;j=j+50)
   {
       plinkos.push(new plinko(j,375));
   }
}
}; 