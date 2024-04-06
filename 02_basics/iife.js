// Immediately Invoked Function Expression

// function one(){
//     console.log(`DB Connected`)
// }

// one()

(function one(){  //named iife
    console.log(`DB Connected`)
})();

( (name) => {   //unnamed iifi
    console.log(`DB Again Connected ${name}`)
} )("Arti")