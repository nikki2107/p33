class Circle{   //plinko 
    constructor(x,y){
    var options = {
       
        restitution : 1,
        friction : 0,
       // density : 1.2
       isStatic : true
    }
        this.radius = 10
        this.body = Bodies.circle(x,y,this.radius,options)
        this.x = x
        this.y = y
        
      //  plinkos = [];
       
        World.add(world,this.body)

    }

    display(){

        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("white")
        ellipse(0,0,this.radius,this.radius)
        pop();
        
        
        };
    }