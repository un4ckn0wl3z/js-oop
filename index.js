function Circle(radius) {
    this.radius = radius;
    let defaultLocaltion = {
        x: 0,
        y: 0
    }
    let computeOptimumLocation = function(factor){
        // ...
        // defaultLocaltion
        // this.radius
    }
    this.draw = function () {
        let x, y;
        computeOptimumLocation(0.1);
        console.log('draw');
    }
}

const circle = new Circle(1);
circle.defaultLocaltion = false;