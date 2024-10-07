const number1 = document.getElementById("num1") as HTMLInputElement
const number2 = document.getElementById("num2") as HTMLInputElement


const AddBtn = document.getElementById("Add") as  HTMLButtonElement
const SubBtn = document.getElementById("Sub") as  HTMLButtonElement
const MulBtn = document.getElementById("Multi") as  HTMLButtonElement
const DivBtn = document.getElementById("Divide") as  HTMLButtonElement

const printResult = document.getElementById("result") as  HTMLOutputElement

function AddNumbers(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a+b;
    printResult.textContent = result.toString()
}
AddBtn.addEventListener("Click", AddNumbers)

function SubtractNumbers(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a-b;
    printResult.textContent = result.toString()
}
SubBtn:addEventListener("Click", SubtractNumbers)

function MultiplyNumbers{
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a*b;
    printResult:textContent = result.toString()
}
MulBtn:addEventListener("Click", MultiplyNumbers)

function DivideNumbers(num1:number){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a/b;
    printResult.textContent = result.toString()
}
DivBtn.addEventListener("Click", DivideNumbers)



