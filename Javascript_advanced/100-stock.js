let stock = {
    macbook: 2,
    iphone: 4
}

function processPayment(itemName) {
    stock[itemName] -= 1;
    console.log("Payment is beign processed for item " + itemName)
}

function processError(itemName) {
    console.log("No more " + itemName + " in stock");
    console.log("Payment is not being processed");

}

function processOrder(itemName, callbackPayment, callbackError) {
    console.log("Verifying the stock of " + itemName);
    let item = itemName.toLowerCase();
    if (stock[item] > 0) {
        callbackPayment(item);
    }
    else {
        callbackError(item);
    }
}

let item = prompt("Please enter the item you would like to purchase (Macbook, iPhone)");
processOrder(item, processPayment, processError);
