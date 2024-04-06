
function myName(){
    console.log("A")
    console.log("R")
    console.log("T")
    console.log("I")

}

// myName()

// function addTwoNumber(num1, num2){
//     // return num1+num2
//     console.log(num1+num2)
// }
// addTwoNumber(4, 7)
// addTwoNumber("4", 7)
// addTwoNumber("4", null)


function addTwoNumber(num1, num2){
    
    return num1+num2
    // console.log(num1+num2)
}

const num = addTwoNumber(2, 3)
// console.log(num)
// console.log(x)
// console.log(y)
// var x = 3
// let y = 4


function loginUserMessage(username = "Arti"){
    if(username === undefined)
    {
        console.log("Please enter a username ")
        return
    }
    return `${username} just logged in`
}

const ans = loginUserMessage("")
const ans1 = loginUserMessage()
// console.log(ans1)

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(300,100,200,500))

const user = {
    username: "Arti",
    price: 199
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`)
}

// handleObject(user)

handleObject({
    username: "Sahu",
    price: 99
})

const newarr = [200, 400, 600, 100]

function returnSecondValue(arr){
    return arr[1]
}

// console.log(returnSecondValue(newarr))
console.log(returnSecondValue([100,200,300]))