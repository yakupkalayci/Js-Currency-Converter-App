const amount = document.querySelector("#amount");

const currencyInfo = document.querySelector("#currencyInfos");

const currencyFromSelect = document.querySelector("#firstCurrency");

const currencyToSelect = document.querySelector("#secondCurrency");

let currencyFrom = currencyInfo.firstElementChild;

let currencyTo = currencyInfo.lastElementChild;

const uiObject = new UI();

addEventListeners();

function addEventListeners() {
    amount.addEventListener("change", convert);
    currencyFromSelect.addEventListener("change", changeFrom);
    currencyToSelect.addEventListener("change", changeTo);
}


function convert() {

}

function changeFrom() {
    uiObject.changeFrom(currencyFromSelect.value);
}

function changeTo() {
    uiObject.changeTo(currencyToSelect.value);
}
