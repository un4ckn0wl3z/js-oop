class Shape {
    constructor(color) {
        this.color = color;
    }
    move() {
        console.log('Shape move');
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    draw() {
        console.log('draw');
    }

    move() {
        super.move();
        console.log('Circle move');
    }
}

const c = new Circle('Red', 1);