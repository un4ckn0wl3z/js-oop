function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.draw = function () {
    console.log('draw');
}

Circle.prototype.duplicate = function () {
    console.log('duplicate');
}