function Circle(radius) {
    this.radius = radius;
    let defaultLocaltion = {
        x: 0,
        y: 0
    }

    this.getDefaultLocation = function(){
        return defaultLocaltion;
    }

    this.draw = function () {
        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocaltion',{
        get: function(){
            return defaultLocaltion;
        },
        set: function(value){
            if(!value.x || !value.y)
                throw new Error('Invalid locaction.');
            defaultLocaltion = value;
        }
    });
}

const circle = new Circle(1);
circle.defaultLocaltion = 1;
