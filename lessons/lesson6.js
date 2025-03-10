// condition statement

if (condition) {
   //execute some code

} else{
   // execute some code
}

// if hour between 6-12" good morning"
// if hour between 12-18 good afternoon
// otherwrise : good evening

var hour = 11

if (
    hour >= 6 && hour < 12 ){
        console.log('Good morning')
    }

 else if
   (
     hour >=12 && hour < 18){
       console.log ('Good afternoon'

    )
    }
 else {console.log ('Good evening')}


 
var ageismorethaneighteen = true 
var isuscitizen = false

if (ageismorethaneighteen  && isuscitizen ){
    console.log (' customer is eligible for DL')
} else console.log('customer is Not eligible for DL ')