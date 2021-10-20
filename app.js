const amount = document.querySelector("#amount");

const currencyInfo = document.querySelector("#currencyInfos");

const currencyFromSelect = document.querySelector("#firstCurrency");

const currencyToSelect = document.querySelector("#secondCurrency");

let currencyFrom = currencyInfo.firstElementChild;

let currencyTo = currencyInfo.lastElementChild;

const uiObject = new UI();
const currencyObject = new Currency();

addEventListeners();

function addEventListeners() {
    amount.addEventListener("input", convert);
    currencyFromSelect.addEventListener("change", changeFrom);
    currencyToSelect.addEventListener("change", changeTo);
}


function convert() {
    currencyObject.changeValues(currencyFromSelect.value, currencyToSelect.value, amount.value);
    currencyObject.convert()
    .then(response => uiObject.showResult(response.result))
    .catch(err => uiObject.showResult("An error occured.."));
}

function changeFrom() {
    uiObject.changeFrom(currencyFromSelect.value);
}

function changeTo() {
    uiObject.changeTo(currencyToSelect.value);
}
