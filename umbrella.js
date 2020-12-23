class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0.5,
            friction:0.7
        }
        this.umbrella=Bodies.rectangle(x,y,100,100,options)
this.image=loadImage("images/images/WalkingFrame/walking_5.png")
        World.add(world,this.umbrella)
    }
    display(){
        var pos=this.umbrella.position
        rectMode(CENTER)
        image(this.image,pos.x,pos.y,150,200)
    
    }
}