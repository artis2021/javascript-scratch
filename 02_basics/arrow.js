const user = {
    username: "Arti",
    price: 99,

    welcome: function(){
        console.log(`${this.username}, welcome to our website`)
        console.log(this)
    },




}

// user.welcome()
// user.username = "Sahu"
// user.welcome()

// console.log(this)

// function one(){
//     let username = "Arti"
//     console.log(this.username)
//     // console.log(this)
// }

// one()

// const one = function() {
//     let username = "Arti"
//     console.log(this.username)
// }

const one = () => {
    let username = "Arti"
    console.log(this)
}


// one()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({name: "Arti"})

console.log(addTwo(2,3))





