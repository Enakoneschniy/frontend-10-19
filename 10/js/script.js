import Latte from './classes/Latte'
import Mocaccino from './classes/Mocaccino'
import { a, b } from './helper'

const latte = new Latte(5);
const mocaccino = new Mocaccino(4);
console.log(latte);
console.log(latte.getInfo());
console.log(mocaccino.getInfo());
console.log(a, b);

function install(diskNumber, callbackFn) {
    console.log(`Disk ${diskNumber} Installing...`);
    setTimeout(() => {
        console.log(`Disk ${diskNumber} Installed!`);
        callbackFn(diskNumber)
    }, 3000)
}

function getDisk(diskNumber, callbackFn) {
    console.log(`Please inject disk ${diskNumber}`);
    setTimeout(() => {
        console.log(`Disk ${diskNumber} is injected!`);
        callbackFn(diskNumber);
    }, 2000)
}

/*getDisk(1, diskNumber => {
    install(diskNumber, diskNumber => {
        getDisk(diskNumber + 1, diskNumber => {
            install(diskNumber, diskNumber => {
                getDisk(diskNumber + 1, diskNumber => {
                    install(diskNumber, diskNumber => {
                        getDisk(diskNumber + 1, diskNumber => {
                            install(diskNumber, diskNumber => {
                                console.log('Complete!')
                            })
                        });
                    })
                });
            })
        });
    })
});*/

function installPromise(diskNumber) {
    return new Promise((resolve, reject) => {
        console.log(`Disk ${diskNumber} Installing...`);
        setTimeout(() => {
            if(Math.random() > .5) {
                console.log(`Disk ${diskNumber} Installed!`);
                resolve(diskNumber);
            } else {
                //throw new InstallError('Installing error', {a: 'a'});
                reject('Installing error');
            }

        }, 3000)
    })
}

function getDiskPromise(diskNumber) {
    return new Promise((resolve, reject) => {
        console.log(`Please inject disk ${diskNumber}`);
        setTimeout(() => {
            console.log(`Disk ${diskNumber} is injected!`);
            resolve(diskNumber);
        }, 3000)
    })
}

/*getDiskPromise(1)
    .then(diskNumber => installPromise(diskNumber))
    .then(diskNumber => getDiskPromise(diskNumber + 1))
    .then(diskNumber => installPromise(diskNumber))
    .then(diskNumber => getDiskPromise(diskNumber + 1))
    .then(diskNumber => installPromise(diskNumber))
    .then(diskNumber => getDiskPromise(diskNumber + 1))
    .then(diskNumber => installPromise(diskNumber))
    .then(() => console.log('Complete!'))
    .catch(error => {
        console.log(error);
    });*/

class InstallError extends Error {
    #info;
    constructor(message, info) {
        super(message);
        this.#info = info;
    }
    get info() {
        return this.#info;
    }
}
async function main() {
    try {
        let diskNumber = await getDiskPromise(1);
        diskNumber = (await installPromise(diskNumber)) + 1;
        await getDiskPromise(diskNumber);
        diskNumber = (await installPromise(diskNumber)) + 1;
        await getDiskPromise(diskNumber);
        await installPromise(diskNumber);
        console.log('Complete!');
    } catch (e) {
        if(e instanceof InstallError) {
            console.log(e.message, e.info);
        } else if(e instanceof Error) {
            console.log(e.message);
        } else {
            console.log(e);
        }
    }
}

// main();
fetch('https://jsonplaceholder.typicode.com/todos/6')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch((e) => {
        console.log(e)
    });

/*

get
post
put
patch
delete
options


 */






