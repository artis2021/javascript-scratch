// const coding = ["cpp", "py", "css", "html"]

// const val = coding.forEach((item) => {
//     // console.log(item)
//     return item
// })

// console.log(`value is ${val}`)

const nums = [1, 2, 3, 4, 6, 7]

// const newnums = nums.filter((num) => {
//     return num > 5
// })

// const newnums = []
// nums.forEach((val) => {
//     if(val > 4)
//     newnums.push(val)
// })


// console.log(newnums)

const books = [
    {title: "Book1", Genre: "History", Publish: 2002},
    {title: "Book2", Genre: "Science", Publish: 2012},
    {title: "Book3", Genre: "History", Publish: 2002},
    {title: "Book4", Genre: "Math", Publish: 2022},
    {title: "Book5", Genre: "Hindi", Publish: 2000},
    {title: "Book6", Genre: "English", Publish: 2024},
]

const userBook = books.filter((book) => {
    return (book.Publish > 2000 && book.Genre === "History")
})

console.log(userBook)