let operator = '';
let previousValue = '';
let currentValue = '';


document.addEventListener("DOMContentLoaded", function(){
    //store all components on HTML in the JS file

    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equals");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");


    //add an event listener to all the number buttons
    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent);
    }))
})


function handleNumber(num) {
    console.log(num);
    // if(currentValue.length <= 5){
    //     currentValue += num;
    // }
}

