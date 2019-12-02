import Latte from "./Latte";

export default class Mocaccino extends Latte {
    cocoa = 10;
    constructor(sugar) {
        super(sugar);
    }
    getInfo() {
        return `Mocaccino: ${super.getInfo().replace('Latte:', '')}`;
    }
}
