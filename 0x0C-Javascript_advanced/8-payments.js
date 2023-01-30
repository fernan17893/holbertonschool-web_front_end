function processPayments(amount) {
    console.log("Collecting payment of" + amount);
}

function processOrders(orderId, amount) {
    console.log(orderId + " is being processed");
    processPayments(amount);
    console.log(orderId + " has been fully processed");
}

console.log("Processing orders");
processOrders(12321, 10.99);
processOrders(12322, 12.99);
processOrders(12323, 15.0);
console.log("All the orders have been processed");