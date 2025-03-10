// Declarative function
function helloone(){
    console.log ('Hello one!')
}
helloone()

// Anoymus function
var hellotwo = function(){
    console.log('hello two!')
}

hellotwo()

//ES6 function syntax or arrow function
var hellothree = () => {
  console.log('hello three!')
}
hellothree()

// function with arguments
function printname(name,lastname){
    console.log(name + ' ' + lastname)
}
printname('Mike','Smith')

//function with return
function mulitiplybytwo(number){
    var result = number * 2
    return result
}
var myresult= mulitiplybytwo(15)
console.log(myresult)


//import function
import { printage } from '../helpers/printhelper.js'
printage(15)

//import everything
import * as helper from '../helpers/printhelper.js'
helper.printage(18)