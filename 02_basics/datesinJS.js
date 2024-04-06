let mydate = new Date()
// console.log(mydate.toString())
// console.log(mydate.toJSON())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())

console.log(typeof mydate)

// let mycreateddate = new Date(2024, 0 , 23,6,9)
// console.log(mycreateddate.toLocaleDateString())

let mynewdate = new Date("01-14-2023")
// console.log(mynewdate)

// console.log(Date.now())
// console.log(mynewdate.getTime())

// console.log(Math.floor(Date.now()/1000))

let newdate = new Date()
// console.log(newdate.getDay())
console.log(newdate.toLocaleString('default', {
    weekday: "long"
}))