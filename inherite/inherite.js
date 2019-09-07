function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color) {
    this.color = color;
}
Shape.prototype.duplicate = function () {
    console.log('duplicate');
}
function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}
extend(Circle, Shape);
Circle.prototype.duplicate = function () {
    //Shape.prototype.duplicate.call(this);
    console.log('Circle duplicate');
}


Circle.prototype.draw = function () {
    console.log('draw');
}

function Square(size) {
    this.size = size;
}
extend(Square, Shape);
Square.prototype.duplicate = function () {
    //Shape.prototype.duplicate.call(this);
    console.log('Square duplicate');
}

const s = new Shape();
const c = new Circle(1, 'red');

const shapes = [
    new Circle(),
    new Square()
];


for (let shape of shapes) shape.duplicate();
