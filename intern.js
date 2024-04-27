function clearDisplay() {
    document.getElementsByName('display')[0].value = '';
}

function deleteLast() {
    var displayValue = document.getElementsByName('display')[0].value;
    document.getElementsByName('display')[0].value = displayValue.slice(0, -1);
}

function appendSymbol(symbol) {
    document.getElementsByName('display')[0].value += symbol;
}

function calculateResult() {
    var displayValue = document.getElementsByName('display')[0].value;
    document.getElementsByName('display')[0].value = eval(displayValue);
}
