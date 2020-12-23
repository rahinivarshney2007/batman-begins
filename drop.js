class Drop{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.5,
            friction:0.7
        }
        this.drop=Bodies.circle(x,y,5,options)
        World.add(world,this.drop)
    }
    display(){
        var pos=this.drop.position
        push()
        fill("white")
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,5)
        pop()
    }
    update1(){
      if( this.drop.position.y>height){
          Matter.Body.setPosition(this.drop,{x:random(0,400),y:0})
      }
    }
}