function Circle(radius) {
    this.radius = radius;
    let defaultLocaltion = {
        x: 0,
        y: 0
    }
    let computeOptimumLocation = function(factor){
        // ...
    }
    this.draw = function () {
        computeOptimumLocation(defaultLocaltion);
        console.log('draw');
    }
}

const circle = new Circle(1);
circle.defaultLocaltion = false;