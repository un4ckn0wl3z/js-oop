// value type
let x = 10;
let y = x;

x = 20;

// reference type
let z = {value: 10};
let b = z;
z.value = 20;

// value type
let number = 10;

function increase(number){
    number++;
}

increase(number);
console.log(number);


// reference type
let count = {value: 10};

function increaseCount(count){
    count.value++;
}

increaseCount(count);
console.log(count);
