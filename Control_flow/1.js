// if

const isUserLoggedIn = true
const temperature = 51

if(temperature < 50){
    console.log(`temp. is less than 50`)
} else{
    console.log(`temp. is grater than 50`)
}

const score = 200
if(score >100){
    const power = "fly"
    console.log(`User power ${power}`)
}

// console.log(power)

const balance = 700
// if(balance > 500) console.log("Test"),
// console.log("Test2");



if(balance < 500){
    console.log("Less than 500")
} else if(balance <750) {
    console.log("Less than 700")
} else if(balance < 900){
    console.log("Less than 900")
} else{
    console.log("Greater than 900")
}
