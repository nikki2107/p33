class Particle{
    constructor(x,y,radius){
    var options = {
       
        restitution : 0.4,
        //friction : 1,
        //density : 1.2
    }
        
        this.body = Bodies.circle(x,y,radius,options)
        this.x = x
        this.y = y
        this.radius = radius
        this.color=color(random(0,255),random(0,255),random(0,255))
        
       
        World.add(world,this.body)

    }

    display(){

        var pos = this.body.position
       var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
       rotate(angle)
        rectMode(CENTER)
        fill(this.color)
        ellipse(0,0,this.radius,this.radius)
        pop();
        }
        }