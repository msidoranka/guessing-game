class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.from = min;
        this.till = max;
    }

    guess() {
        this.mid = Math.round((this.till + this.from) / 2);
        return this.mid;
    }

    lower() {
        this.till = this.mid;
    }

    greater() {
        this.from = this.mid;
    }
}

module.exports = GuessingGame;
