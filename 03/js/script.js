"use strict";
let n = 1;

while (n <= 10) {
    console.log(n++);
}
//n = 1;
do {
    console.log(n++);
} while (n <= 10);

let a;
/*do {
    a = parseFloat(prompt('Enter a:', ''));
    if(isNaN(a)) {
        alert('Incorrect input!');
    }

} while (isNaN(a));
alert(a);*/

for (let i = 2; i < 10; i++) {
    for (let j = 2; j < 10; j++) {
        console.log(i * j);
    }
}
console.log('----------------------');
let num = 1;
while (true) {
    console.log(num++);
    if (Math.random() > 0.5) {
        break;
    }
}

console.log('----------------------');
for (let j = 1, i = 2; j <= 10; j++, i += 2) {
    if (j % 2 === 0) {
        continue;
    }
    console.log(j);
}

/*for(;;){

}*/

// Array

const arrNums = [1, 2, 3, 4];
console.log(arrNums);
console.log(arrNums.length);

console.log(arrNums[2]);
arrNums[2] = 'Hello!';
console.log(arrNums[2]);

arrNums[arrNums.length] = 666;
arrNums[arrNums.length] = 444;
console.log(arrNums);

arrNums.push(222, 7676);
console.log(arrNums);

arrNums.unshift(111, 3232);
console.log(arrNums);

const firstElement = arrNums.shift();
console.log(arrNums, firstElement);

const lastElement = arrNums.pop();
console.log(arrNums, lastElement);

const arrNums1 = [44, 444, 44, 44];

const newArray = arrNums.concat(arrNums1, 56, 57);

console.log(newArray);


for (let index = 0; index < newArray.length; index++) {
    console.log(newArray[index]);
}
console.log('-----------------------');
for (let index in newArray) {
    // newArray[index] = 55;
    console.log(newArray[index]);
}

console.log('-----------------------');
for (let element of newArray) {
    console.log(element);
}
newArray[100] = 'sdss';

console.log(newArray);

const matrix = [
    [1, 2, 2, 3],
    [1, 2, 2, 3],
    [1, 2, 2, 33],
    [1, 2, 2, 3],
];
console.log(matrix[2][3]);
const numMatrix = [];
const N = 10;
for(let row = 0; row < N; row++) {
    numMatrix[row] = [];
    for(let cell = 0; cell < N; cell++) {
        numMatrix[row][cell] = Math.round(Math.random() * 10);
    }
}
for(let row of numMatrix) {
    for(let cell of row) {
        console.log(cell);
    }
}

let arr = [1, 3, 4, 6, 7];
let [a, b, ...c] = arr; // let a = 1, b = 3, c = [4, 6, 7]
let x = 5, y = 6;
{
    let [a, b, c] = [1, 2, 3];
}
[x, y] = [y, x];

// const newArray = arrNums.concat(arrNums1, 56, 57);
let newArray2 = [...arrNums, 56, 57, ...arrNums1];

/*
console.log('-----------------------');
newArray.forEach((element, index) => {
    console.log(element)
});
*/





