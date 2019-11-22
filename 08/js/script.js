(function () {
    'use strict';
    const balanceContainer = document.querySelector('.balance');
    const drinksContainer = document.querySelector('.coffee-list');
    const cashContainer = document.querySelector('.get-cash');
    const coinsContainer = document.querySelector('.get-coins');

    //------------- ADD EVENT HANDLERS ----------------
    cashContainer.addEventListener('click', onLoadCash);
    coinsContainer.addEventListener('click', onLoadCoins);
    drinksContainer.addEventListener('click', onSelectDrink);
    //------------- ADD EVENT HANDLERS ----------------

    //----------------------------
    const maxDrinksCount = 12;
    const maxTotalMoney = 3; // максимальное количество купюр
    let currentTotalMoney = 0;
    let totalMoney = 0;
    let balance = 0; // то сколько денег у текущего клиента

    const totalCoins = {
        25: 100,
        50: 100,
        1: 100,
        2: 100
    };

    const drinks = [
        {
            name: 'Latte',
            price: 10,
            description: ''
        },
        {
            name: 'Raf',
            price: 15,
            description: ''
        },
        {
            name: 'Espresso',
            price: 6,
            description: ''
        },
        {
            name: 'Americano',
            price: 7,
            description: ''
        }
    ];



    drinksContainer.innerHTML = drinksToString(drinks);



    //-------------------- FUNCTIONS -------------------

    function drinksToString(drinks, currency = 'UAH') {
        return drinks.reduce((html, drink) => html + `
            <li>
                <button class="drink" data-name="${ drink.name }">
                    <span class="name">${ drink.name }</span>
                    <span class="price">${ drink.price } ${currency}</span>
                    <p class="description">${ drink.description }</p>
                </button>
            </li>
        `, '');
    }

    function isValidMoney(moneyValue, validMoney = [1, 2, 5, 10]) {
        return validMoney.includes(moneyValue);
    }

    function checkTotalCoins(coinValue, totalCoins, maxTotalCoins = { 25: 10000, 50: 10000, 1: 10000, 2: 10000 }) {
        const maxCoinsCount = maxTotalCoins[coinValue]; // 10000
        const currentCoinsCount = totalCoins[coinValue]; // ????
        return currentCoinsCount < maxCoinsCount;
    }
    function getRest(rest, totalCoins) {
        const cash = parseInt(rest);
        const coins = (rest - cash) * 100;
        const coinVariants = Object.keys(totalCoins).map(coin => parseInt(coin));

    }

    //------------ EVENT HANDLERS --------------------
    function onSelectDrink(event) {
        event.preventDefault();
        const name = event.target.getAttribute('data-name');
        const drink = drinks.find(item => item.name === name);
        if(!!drink) {
            const rest = balance - drink.price;
            if(rest >= 0) {

                setTimeout(() => {
                    alert('Возьми кофе!!!');
                }, 2000)
            } else {
                alert('Добавь денег!!!');
            }
        }

    }

    function onLoadCash(event) {
        event.preventDefault();
        const cashValue = parseFloat(prompt('Enter cash!', ''));
        if(isValidMoney(cashValue) && currentTotalMoney < maxTotalMoney) {
            currentTotalMoney += 1;
            totalMoney += cashValue;
            balance += cashValue;
            balanceContainer.innerHTML = `${balance} UAH`;
        }
    }

    function onLoadCoins(event) {
        event.preventDefault();
        const coinValue = parseFloat(prompt('Enter coin!', ''));
        if(isValidMoney(coinValue, [1, 2, 25, 50]) && checkTotalCoins(coinValue, totalCoins)) {
            totalCoins[coinValue] += 1;
            if(coinValue > 2) {
                balance += coinValue / 100;
            } else {
                balance += coinValue;
            }
            balanceContainer.innerHTML = `${balance} UAH`;
        }
    }
    //------------ EVENT HANDLERS --------------------

    //-------------------- FUNCTIONS -------------------
})();












