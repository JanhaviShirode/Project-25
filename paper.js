class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(x,y,20,options);
        this.radius=20;
        World.add(myWorld,this.body);
    }
    display(){
        var pos=this.body.position
        
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y);
     rotate(angle);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.radius*2,this.radius*2);
    console.log("paper");

    pop();
    }
}