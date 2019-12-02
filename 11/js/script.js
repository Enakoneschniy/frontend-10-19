// Set
const arr = [1, 2, 3, 2, 1, 4, 43, 2, 4, 2];
const set = new Set(arr);
set.add(5);
set.delete(43);
console.log(set.has(1));
console.log(set.has(100));
console.log(set.size);
console.log(set);
const uniqueArr = Array.from(set);
console.log(uniqueArr);
set.clear();
console.log(set);

let set1 = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set1.add(john);
set1.add(pete);
set1.add({ name: "John" });
set1.add(mary);
set1.add(john);
set1.add(mary);
set1.add({ name: "John" });


// set хранит только 3 уникальных значения
console.log(set1.size); // 3

for (let user of set1) {
    console.log(user.name); // John (потом Pete и Mary)
}
// Map
const map = new Map();
map.set(pete, mary);
map.set({name: 'lala'}, mary);
console.log(map);
console.log(map.get(pete));
console.log(map.get({name: 'lala'}));

function f() {

}
map.set(f, pete);
console.log(map.get(f));

const functions = new Map();

functions.set('sum', (a, b) => a + b);
console.log(functions.get('sum')(2, 2));

// Array
const array = [];
console.time('test');
for(let i = 1000; i > 0; i--) {
    array.push(i);
}
console.timeEnd('test');

const array1 = new Array(1000);
console.time('test1');
for(let i = 1000; i > 0; i--) {
    array1[i] = i;
}
console.timeEnd('test1');


const array11 = [];
console.time('test11');
for(let i = 0; i < 1000; i++) {
    array11.push(i);
}
console.timeEnd('test11');

const array12 = new Array(1000);
console.time('test12');
for(let i = 0; i < 1000; i++) {
    array12[i] = i;
}
console.timeEnd('test12');

// Proxy

const target = {a: 'sss', b: ''};
let proxy = new Proxy(target, {
    get(target, prop) {
        console.log('proxy:', target[prop]);
        return target[prop];
        /*if (prop in target) {
            return target[prop];
        } else {
            return 0; // значение по умолчанию
        }*/
    },
    set(target, prop, value) {
        if(prop === 'b') {
            console.log('render!');
        }
        target[prop] = value;
        return true;
        /*if (prop in target) {
            return target[prop];
        } else {
            return 0; // значение по умолчанию
        }*/
    },
});
let a = proxy.a;
proxy.a = 'sssssss';
proxy.b = 'sssssss';






