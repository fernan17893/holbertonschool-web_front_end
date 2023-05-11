function divideby(firstNumber) {
    return function(secondNumber) {
         return secondNumber / firstNumber;     
}
}

function addBy(firstNumber) {
    return function(secondNumber) {
         return secondNumber + firstNumber;     
}
}

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideby10 = divideby(10);
const divideby100 = divideby(100);
