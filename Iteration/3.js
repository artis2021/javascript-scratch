// for of

const arr = [1, 3, 2, 5]

// for (const val of arr) {
//     console.log(val)
// }

const greeting = "Hello world"
// for (const greet of greeting) {
//     console.log(greet)
// }

//map
const map = new Map()
map.set('1', "Arti")
map.set('2', "Arti")
map.set('3', "Arti")
map.set('4', "Arti")

// console.log(map)

for (const [key, val] of map) {
    console.log(key, val)
}

const obj = {
    "1": "Arti",
    "2": "Arti",
    "3": "Arti",
    "4": "Arti",
    "5": "Arti",
    "6": "Arti"
    
}

// for (const [key, val] of obj) {
//     console.log(key)
    
// }