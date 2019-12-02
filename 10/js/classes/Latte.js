import Coffee from './Coffee'
export default class Latte extends Coffee {
    milk = 150;
    coffee = 30;
    water = 150;
    constructor(sugar) {
        super(sugar);
    }

    getInfo() {
        return `Latte:\r\n${super.getInfo()}`;
    }
}
