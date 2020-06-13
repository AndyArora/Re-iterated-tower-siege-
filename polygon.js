class Polygon {
    constructor(x, y, radius) {
        var options = {
            isStatic: false
        }
        this.polygon = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;
        World.add(world, this.polygon);
}
 
    display() {
        var pos =this.polygon.position;
        var angle = this.polygon.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("yellow");
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}