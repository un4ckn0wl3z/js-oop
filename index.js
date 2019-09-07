function Circle(radius) {
    // instance members
    this.radius = radius;
    this.move = function () {
        // this.draw();
        console.log('move');
    }
}

// prototype members
Circle.prototype.toString = function () {
    return 'Circle with radius ' + this.radius;
}
Circle.prototype.draw = function () {
    this.move();
    console.log('draw');
}

const c1 = new Circle(1);
c1.draw();

console.log(Object.keys(c1)); // return instance member

for (let key in c1) {
    console.log(key); // return all both from instance member and prototype

}