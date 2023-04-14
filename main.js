let pizza;
let topping; 
let total;
let selVal = document.getElementById('toppings');


function formSubmitEvent(){

if(selVal.value === "noToppings"){
        topping = 0.00;
    }
   else if (selVal.value === "oneTopping"){
        topping = 2.00;
    }
    else if (selVal.value === "twoToppings"){
        topping = 3.00;
    }
    else{
        topping = 1000.12;
    }
    // calculation
    total = pizza + topping

    //Display
    alert("Your total is: $" + total);
console.log("topping: " + topping);
}

function handleClick(RadioEl){
    let sizeVal = RadioEl.value;

    if(sizeVal === "Small"){
        pizza = 7.00;
    }
    else if(sizeVal === "Medium"){
        pizza = 10.00;
    }
    else if(sizeVal === "Large"){
        pizza = 14.00;
    }
    else{
        pizza = 123.34;
    }
    console.log("pizza: " + pizza)
}