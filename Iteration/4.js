const obj = {
    js: "javscript",
    cpp: "C++",
    rb: "ruby"
}

// for (const key in obj) {
//     console.log(obj[key])
// }

// for (const key in obj) {
//     console.log(`${key} shortcut for ${obj[key]}`)
// }

const arr = [1, 2, 3, 4, 5]

// for (const key in arr) {
//     console.log(arr[key])
// }

const map = new Map()
map.set('1', "Arti")
map.set('2', "Arti")
map.set('3', "Arti")
map.set('4', "Arti")


for (const key in map) {
    console.log(map[key])
}