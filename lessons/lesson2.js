//concationation and interpolation
var price = 50
var itemname = "cup"
var messagetoprint = "The price for your " + itemname + " is " + price + " dollars" // concation
var messagetoprint2 = `The price for you ${itemname} is ${price} dollars` //interpolation

console.log(messagetoprint)
console.log(messagetoprint2)

