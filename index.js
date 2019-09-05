function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1);
circle.draw();

Circle.call({}, 1);
Circle.apply({}, [1]);