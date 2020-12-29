class Ball {
    constructor(x,y,r) {
        var options={
            isStatic:false,
            restitution:1,
            friction:1,
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        World.add(world, this.body);
    }
    display() {
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER)
        strokeWeight(1);
        fill(255,0,255)
        ellipse(0,0);
        pop()
    }
}