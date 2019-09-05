function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1);
circle.draw();

circle.location = {
    x: 1
}

circle['speed'] = 50;
const propertyname = 'angle';
circle[propertyname] = 180;

// delete prop
delete circle.speed;