function getUserOrder() {
    let pizzaType = document.getElementById("userPizzaType").value;
    let pizzaSize = document.getElementById("userPizzaSize").value;
    let pizzaCrust = document.getElementById("userCrustType").value;
    let pizzaTopping = document.getElementById("userToppingsAdded").value;

    let pizzaSizePrice = 0;
    switch(pizzaSize){
        case "none":
            pizzaSizePrice = 0;
            break;
        case "small":
            pizzaSizePrice = 450;
            break;
        case "medium":
            pizzaSizePrice = 900;
                break;
        case "large":
            pizzaSizePrice = 1500;
            break;
    }

    let pizzaCrustPrice = 0;
    switch(pizzaCrust){
        case "none":
            pizzaCrustPrice = 0;
            break;
        case "crispy":
            pizzaCrustPrice = 50;
            break;
        case "stuffed":
            pizzaCrustPrice = 100;
                break;
        case "gluten-free":
            pizzaCrustPrice = 150;
            break;
    }

    let pizzaToppingPrice = 0;
    switch(pizzaTopping){
        case "none":
            pizzaToppingPrice = 0;
            break;
        case "cheese":
            pizzaToppingPrice = 50;
            break;
        case "pepperoni":
            pizzaToppingPrice = 70;
                break;
        case "mushroom":
            pizzaToppingPrice = 110;
            break;
    }

    let pizzaPrice = pizzaSizePrice + pizzaCrustPrice + pizzaToppingPrice;
    let totalBill = 0;
    totalBill = pizzaPrice + totalBill;
    //document.getElementById("kuku").textContent = "Your total Bill is Ksh." +  totalBill;

    document.getElementById("pType").textContent = pizzaType;
    document.getElementById("pSize").textContent = pizzaSize;
    document.getElementById("pCrust").textContent = pizzaCrust;
    document.getElementById("pTopping").textContent = pizzaTopping;
    document.getElementById("pPrice").textContent = pizzaPrice;

    document.getElementById("orderButton").style.display = "none";
    document.getElementById("addButton").style.display = "block";
    document.getElementById("orderTable").style.display = "block";
    document.getElementById("checkoutButton").style.display = "block";

    event.preventDefault();


}

function addPizza() {
    let pizzaType = document.getElementById("userPizzaType").value;
    let pizzaSize = document.getElementById("userPizzaSize").value;
    let pizzaCrust = document.getElementById("userCrustType").value;
    let pizzaTopping = document.getElementById("userToppingsAdded").value;

    let pizzaSizePrice = 0;
    switch(pizzaSize){
        case "none":
            pizzaSizePrice = 0;
            break;
        case "small":
            pizzaSizePrice = 450;
            break;
        case "medium":
            pizzaSizePrice = 900;
                break;
        case "large":
            pizzaSizePrice = 1500;
            break;
    }

    let pizzaCrustPrice = 0;
    switch(pizzaCrust){
        case "none":
            pizzaCrustPrice = 0;
            break;
        case "crispy":
            pizzaCrustPrice = 50;
            break;
        case "stuffed":
            pizzaCrustPrice = 100;
                break;
        case "gluten-free":
            pizzaCrustPrice = 150;
            break;
    }

    let pizzaToppingPrice = 0;
    switch(pizzaTopping){
        case "none":
            pizzaToppingPrice = 0;
            break;
        case "cheese":
            pizzaToppingPrice = 50;
            break;
        case "pepperoni":
            pizzaToppingPrice = 70;
                break;
        case "mushroom":
            pizzaToppingPrice = 110;
            break;
    }

    let pizzaPrice = pizzaSizePrice + pizzaCrustPrice + pizzaToppingPrice;
    let totalBill = 0;
    totalBill = pizzaPrice;
    let nowTotal = totalBill + pizzaPrice;


    let table = document.getElementById("orderTable");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.textContent = pizzaType;
    cell2.textContent = pizzaSize;
    cell3.textContent = pizzaCrust;
    cell4.textContent = pizzaTopping;
    cell5.textContent = pizzaPrice;

    //document.getElementById("kuku").textContent = "Your total Bill is Ksh." +  nowTotal;
    

    
    event.preventDefault();

}

