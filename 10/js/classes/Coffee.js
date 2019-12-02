export default class Coffee {
    coffee = 0;
    water = 0;
    constructor(sugar) {
        this.sugar = sugar;
    }
    getInfo() {
        const keys = Object.keys(this);
        return keys.reduce((str, key) => str + `${key}: ${this[key]}\r\n`, ``)
    }
}
