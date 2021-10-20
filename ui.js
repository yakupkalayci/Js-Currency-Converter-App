class UI {

    changeFrom(newCurrency) {
        currencyFrom.textContent = newCurrency;
    }

    changeTo(newCurrency) {
        currencyTo.textContent = newCurrency;
    }
    
    showResult(result) {
        document.querySelector("#currency_result").value = result;
    }
}