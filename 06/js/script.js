(function () {
    'use strict';

    function factorial(n) {
      if(n === 1) {
          return 1;
      }
      return n * factorial(n - 1);
    }
    console.log(factorial(5));

    function a() {
        b();
    }

    function b() {
        a();
    }

    function func1(a) {
        const b = 5;
        const c = 5;
        function f() {
            return c + 7;
        }
        return function (num) {
            return Math.pow(num, a) + b + f();
        }
    }

    const pow2 = func1(2);
    const pow3 = func1(3);
    console.log(pow2(2));
    console.log(pow3(2));

    const wordList = {
        hello: 'Привет',
        message: 'Сообщение',
        'what a fuck': '*****',
    };
    /*const word = prompt('enter word');
    alert(wordList['what a fuck']);*/
    console.log(wordList.hello);
    console.log(wordList['message']);

    const userPetya = {
        name: 'Petya',
        email: 'petya@gmail.com',
        password: 'petya123',
        getPassword() {
            return this.password;
        },
        sayHello() {
            console.log(`Hello! My name is ${this.name}`);
        }

    };
    const { email, ...other } = userPetya;
    console.log(email, other);

    userPetya.sayHello();
    console.log(userPetya.getPassword());

    const userVasya = {
        name: 'Vasya',
        percent: 10,
        moneyByMonth: [100, 220, 150],
        showMoney() {
            this.moneyByMonth.forEach((m) => {
                console.log(m * (this.percent / 100));
            })
            /*function foo(m) {
                console.log(m * (this.percent / 100));
            }
            const newFunc = foo.bind(this);
            this.moneyByMonth.forEach(newFunc)*/
        }
    };
    userVasya.showMoney();
    const debShowMoney = debounce(userVasya.showMoney.bind(userVasya), 2000);
    debShowMoney();
    function debounce(func, time) {
        return function() {
            setTimeout(func, time)
        }
    }


    function sum(a, b) {
        return a + b + this;
    }

    sum.call(1, 2, 3);
    sum.apply(1, [2, 3])

    function sum1() {
        const args = [].slice.call(arguments)
        console.log(args);
        /*[].forEach.call(arguments, item => {
            console.log(item)
        })*/
    }
    sum1(1, 2, 3, 5)
})();












