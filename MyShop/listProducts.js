var faker = require("faker"); 

console.log(" ************************"); 
console.log(" Welcome to my Shop"); 
console.log(" ************************"); 

for (var i=0; i<9; i++){
    var randomProduct = faker.commerce.productName(); 
    var randomPrice = faker.commerce.price();
    console.log(randomProduct+" - $ "+randomPrice);
}; 
