(function () {
    'use strict';

    class User {
        firstName = 'Vasya';
        lastName = 'Vasya';
        email = 'Vasya';
        #password = 'xxxx';
        constructor(firstName, lastName, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email; // at
        }
        get password() {
            return this.#password
        }
        get fullName() {
            return `${this.firstName} ${this.lastName}`
        }
        set fullName(value) {
            const arrName = value.split(' ');
            if(arrName.length === 2) {
                [this.firstName, this.lastName] = arrName;
            } else {
                throw new Error('Incorrect fullName')
            }

            // [this.firstName, this.lastName] = value.split(' ');
        }

        static sayHello() {
            alert('hello');
        }
    }
    const user = new User('Petya', 'Petrov', 'petya@gmail.com');
   // const user1 = new User('Vasya', 'Pupkin', 'vasya@gmail.com');
    console.log(user.lastName);
    console.log(user.fullName);
    user.lastName = 'Pupkin';
    console.log(user.fullName);
    user.fullName = 'Valera Petrovich';
    console.log(user.firstName);
    console.log(user);

    /*user.fullName = 'Sergey';
    console.log(user.firstName);*/
    console.log(user);
   // User.sayHello();

    class Coffee {
        coffee = 10;
        sugar = 0;
        water = 10;
        constructor(coffee, sugar) {
            this.coffee = coffee || 10;
            this.sugar = sugar || 10;
        }
    }

    class Latte extends Coffee {
        milk = 10;
        constructor(coffee, sugar, milk) {
            super();
            this.sugar = 33;
            this.milk = milk;
        }
    }

    const coffee = new Coffee(10, 5);
    const latte = new Latte(10, 5, 10);

    console.log(coffee);
    console.log(latte);


})();












