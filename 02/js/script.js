"use strict";

const str = ``;

// null
const testNull = null;

console.log(typeof testNull);

// object

// Symbol

// -------------------

let counter = 2;
counter++; // counter = 2
console.log(counter++); // counter = 3
console.log(counter++); // counter = 4
console.log(counter); // counter = 5
console.log(++counter); // counter = 6

let a = 2, b = 6, c = 4;

let z = a++ + b - ++c + a++; // 8, 1, 0.67
console.log(z, a);
// 1 001
// 2 010
//   000
//   011

let n = 2;
n += 1; // n = n + 1;

let x = (
    n = 3 + 2,
    3 + 4 + n
);
console.log(x);

let age = 18;
let test = true;
let status = 'сын депутата';

{
    let age = 56;
}

if (age >= 18 && age < 21 || status === 'сын депутата') {
    console.log('Можем продать пиво, водку и сигареты');
}
if (age >= 18 && age < 21) {
    console.log('Можем продать пиво и сигареты');
} else if (age >= 21) {
    console.log('Можем продать пиво, водку и сигареты');
} else {
    console.log('Вали отсюда школьник!');
}

if(age === 13) {
    //
} else if(age === 15) {
    //
} else if(age === 55) {

}

switch (age) {
    case 13:
        //
        break;
    case 15:
    case 55:
        //
        break;
    default:
        //
        break;
}

const xx = parseFloat(prompt('Input x', ''));
