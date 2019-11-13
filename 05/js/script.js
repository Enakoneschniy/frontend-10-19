(function() {
    "use strict";

    // sayHello();

    function sayHello() {
        alert('Hello!');
    }

    function getRandomNumber() {
        return Math.round(Math.random() * 10);
    }

    const num = getRandomNumber();
    console.log(num);

    function sum2(a, b) {
        return a + b;
    }

    const sum = sum2(4, 6, 7, 56, 57);
    console.log(sum);

    function sumAll() {
        // console.log(arguments);
        let sum = 0;
        for(let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }
    function sumAllNew(a, b, ...args) {
        let sum = a + b;
        for(let num of args) {
            sum += num;
        }
        return sum;
    }
    const res = sumAll(1, 2, 3, 5);
    console.log(res);
    sumAllNew(2,3, 4, 5, 56, 6);

    function foo(a, b, x = 4, y = 6) {
        return a + b + x + y;
    }

    console.log(foo(2, 5, 6));

    const testFunc = function () {
        console.log('testFunc');
    };
    testFunc();

    function bar(a) {
        return function (b) {
            return a + b;
        }
    }
    const fn = bar(2);
    console.log(fn(2));

    const arrNumbers = [1, 2, 3];

    function arrayToArguments([a, b, c]) {
        return a + b + c;
    }

    console.log(arrayToArguments(arrNumbers));

    setTimeout(function () {
        console.log(arrayToArguments(arrNumbers));
    }, 2000);

    [1, 2, 3, 5].forEach(function (item, index) {
        console.log(`${index}: ${item}`)
    });
    function forEach(array, callbackFn) {
        for(let index in array) {
            callbackFn(array[index], index);
        }
    }
    forEach([1, 2, 3, 5], function (item, index) {
        console.log(`${index}: ${item}`)
    });
    const newArray = [1, 2, 3, 5].map(function (item) {
        return item ** 2;
    });
    console.log(newArray);

    function map(array, callbackFn) {
        const resArray = [];
        for(let item of array) {
            const newItem = callbackFn(item);
            resArray.push(newItem)
        }
        return resArray;
    }
    function square (item) {
        return item ** 2;
    }
    const testArray = map([1, 2, 3, 5], square);

    const testArray1 = map([1, 2, 3, 5, 4], square);
    console.log(testArray, testArray1);

    const newArray2 = [1, 2, 3, 5].map(item => item ** 2);
    [1, 2, 3, 5].forEach((item, index) => console.log(`${index}: ${item}`));

    const sumArray = [1, 2, 3, 5].reduce((acc, item) => acc += item, 0);
    const sumArray1 = [1, 2, 3, 5].reduce(function (acc, item) {
        return acc += item;
    }, 0);

    [1, 2, 2, 3, 4].filter(item => item === 2);
    console.log(sumArray);
    /*
    const arr = [];
    arr.push(3, 3, 4);
    arr.push(3);
    */

})();













