var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var AddBtn = document.getElementById("Add");
var SubBtn = document.getElementById("Sub");
var MulBtn = document.getElementById("Multi");
var DivBtn = document.getElementById("Divide");
var printResult = document.getElementById("result");
function AddNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a + b;
    printResult.textContent = result.toString();
}
AddBtn.addEventListener("Click", AddNumbers);
function SubtractNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a - b;
    printResult.textContent = result.toString();
}
SubBtn.addEventListener("Click", SubtractNumbers);
function MultiplyNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a * b;
    printResult.textContent = result.toString();
}
MulBtn.addEventListener("Click", MultiplyNumbers);
function DivideNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a / b;
    printResult.textContent = result.toString();
}
DivBtn.addEventListener("Click", DivideNumbers);
