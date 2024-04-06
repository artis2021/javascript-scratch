const arr = [1, 2, 3, 4, 5, 6, 7]

// const newarr = arr.map((x) => {
//     return x=x+10
// })

// const newarr = []
// arr.forEach((val) => {
//     newarr.push(val+10)
// })

const newarr = arr.
map((num) => num * 10)
.map((num) => {
return num+1
})
.filter((num) => num>40)

console.log(newarr)