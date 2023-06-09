function updateResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculateResult() {
    var result = document.getElementById("result").value;
    var calculatedResult = eval(result);
    document.getElementById("result").value = calculatedResult;
}
