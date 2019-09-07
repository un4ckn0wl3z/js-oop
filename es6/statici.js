'user strict';

class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function () {
            console.log('move');
        }
    }
    // instance method
    draw() {
        console.log('draw');
    }
    // static method
    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

//const c1 = new Circle(1);
const c =  Circle.parse(`{"radius":1}`);
console.log(c);