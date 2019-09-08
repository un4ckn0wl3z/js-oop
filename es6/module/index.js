const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }
}

const c = new Circle(1);
console.log(_radius.get(c));