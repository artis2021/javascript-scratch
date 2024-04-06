const hero1 = ["Thor", "Ironman", "spiderman"]
const hero2 = ["superman", "batman", "flash"]

// hero1.push(hero2)

// console.log(hero1.length)
// console.log(hero1[3][2])

const hero3 = hero1.concat(hero2)
// console.log(hero1)
// console.log(hero3)

const hero4 = [...hero1, ...hero2]
// console.log(hero4)


const arr1 = [1,2,3,4,[4,5,5],3,2]
const arr2 = arr1.flat(Infinity)
console.log(arr2)

// console.log(Array.isArray("Arti"))
// console.log(Array.from("Arti"))
// console.log(Array.from({name: "Arti"}))  //interesting

let score1 = 100
let score2 = 200
console.log(Array.of(score1,score2))
