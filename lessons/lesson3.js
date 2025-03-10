// object

var customer = {
    fistname:'John',
    lastname:'Smith',
    car: ["volvo","Toyota","Tesla"]
}
//dot notation
console.log(customer.fistname)


//bracket notation
customer['lastname']='Silver'
console.log(customer['lastname'])
console.log( `${customer.fistname} ${customer.lastname} `)


//arrays
var car = ["volvo","Toyota","Tesla"]
car[1] = "BMW"
console.log(car[1])
console.log(customer.car[1] )

