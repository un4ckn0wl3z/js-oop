function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(1);


let person = { name: 'Anuwat' };

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false
});

person.name = 'Pansa';
console.log(person.name);


// console.log(person);

for (let key in person) {
    console.log(key);
}

// console.log(Object.keys(person));

// let objectBase = Object.getPrototypeOf(person);
// let descriptor =  Object.getOwnPropertyDescriptor(objectBase, 'toString');

// console.log(descriptor);