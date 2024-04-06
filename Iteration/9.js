// const arr = [1, 2, 3, 4, 5]

// const total = arr.reduce((acc, curr) => {
//     console.log(`acc is ${acc} and curr value is ${curr}`)
//     return acc+curr
// }, 0)

// console.log(total)

const shoppingCart = [
    {item: "js", price: 299},
    {item: "cpp", price: 199},
    {item: "py", price: 399},
    {item: "c", price: 299},
    {item: "java", price: 299},
]

const total = shoppingCart.reduce((acc, {price}) => {
    return acc+price
}, 0)

console.log(total)