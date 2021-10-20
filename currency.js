class Currency {
    constructor() {
        this.currencyFrom = "USD";
        this.currencyTo = "TRY";
        this.amount = null;

    }

    async convert() {
        this.endPoint = `https://api.exchangerate.host/convert?from=${this.currencyFrom}&to=${this.currencyTo}&amount=${this.amount}`;
        let response = await fetch(this.endPoint);
        let data = await response.json();
        return data;
    }

    changeValues(currencyFrom, currencyTo, amount) {
        this.currencyFrom = currencyFrom;
        this.currencyTo = currencyTo;
        this.amount = amount;
    }
}