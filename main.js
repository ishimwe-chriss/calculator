let operator = "";
let prevValue = "";
let currValue = "";

let clear = document.querySelector("#clear-btn");
let equal = document.querySelector("button.equal");
let decimal = document.querySelector("button.decimal");

let numbers = document.querySelectorAll("button.number");
let operators = document.querySelectorAll("button.operator");

let prevScreen = document.querySelector(".previous");
let currScreen = document.querySelector(".current");

numbers.forEach((number) => number.addEventListener("click", function(e){

    handleNum(e.target.textContent);
    currScreen.textContent = currValue;

}));

operators.forEach((oper) => oper.addEventListener("click", function(e){

       handleOper(e.target.textContent);
       prevScreen.textContent = prevValue + " " + operator;
       currScreen.textContent = currValue;
}))

clear.addEventListener("click", function(){
    prevValue = "";
    currValue = "";
    operator = "";
    prevScreen.textContent = currValue;
    currScreen.textContent = currValue;
})

equal.addEventListener("click", function(){
    if(currValue != '' && prevValue != ''){
    calculation();
    prevScreen.textContent = "";

    if(prevValue.length <= 5){
        currScreen.textContent = prevValue;
    }
    else{
        currScreen.textContent = prevValue.slice(0,5) + "...";
    }
}
})

decimal.addEventListener("click", function(){
    decimalAdd();
})

function handleNum(num){
  if(currValue.length <= 5){
    currValue += num;
  }
    
}

function handleOper(op){
    operator= op;
    prevValue = currValue;
    currValue = '';
}

function calculation(){
    prevValue = Number(prevValue);
    currValue = Number(currValue);

    if(operator === "+"){
        prevValue += currValue;
    }else if(operator === "-"){
        prevValue -= currValue;
    }else if(operator === "x"){
        prevValue *= currValue;
    }else{
        prevValue /= currValue;
    }

    prevValue = roundNUmber(prevValue);
    prevValue = prevValue.toString();
    currValue =prevValue.toString();

}

function roundNUmber(num){
    return Math.round(num * 1000) /1000;
}

function decimalAdd(){
    if(!currValue.includes(".")){
        currValue += ".";
    }
}
