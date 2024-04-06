//singleton


//object literal
// Object.create()

const key1 = Symbol("key")
const key2 = Symbol("key")
// console.log(key1==key2)

const jsUser = {
    name: "Arti",
    age: 21,
    [key1]: "new key",
    location: "jaunpur",
    email: "arti@google.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturdau"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(typeof jsUser[key1])
// console.log(jsUser[key1])

// jsUser.email = "arti@chatgpt.com"
// console.log(jsUser.email)
// Object.freeze(jsUser)
// jsUser.email = "arti@yahoo.com"
// console.log(jsUser.email)
// console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello world")
}

jsUser.greetingTo = function(){
    console.log(`Hello ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTo())