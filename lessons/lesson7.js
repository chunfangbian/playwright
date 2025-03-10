// loops


//console.log ('hello world')

//for (statemnet1;statement2;statement3){   }

//for loop ( for i loop)
for (let i=0; i<5; i++){
    console.log ('hello world'+ i)
}

var cars = ["volvo","Toyota","Tesla"]
// for of loop
for( let car of cars){
    console.log(car)
    if (car == "Toyota"){
        break
    }
}

// es6 syntax for each loop
cars.forEach(car => {
    console.log(car)
})