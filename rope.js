class Rope {
    constructor(bodyA,bodyB){

        var options= {
            bodyA: bodyA,
            pointB: bodyB,
            length:300
        }
    
    this.pointB=bodyB
    this.rope = Constraint.create(options);
    World.add(world, this.rope)
    }

    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;

        stroke(0);
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

    }
}