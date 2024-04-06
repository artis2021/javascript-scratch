const coding = ["js", "cpp", "java", "css", "html"]

// coding.forEach(val => {
//     console.log(val)
// });

// coding.forEach((val) => {
//     console.log(val)
// })

function printMe(val){
    console.log(val)
}

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })

const myObj = [
    {
        language: "Python",
        extension: "py"
    },
    {
        language: "C++",
        extension: "cpp"
    },
    {
        language: "C",
        extension: "c"
    },
    {
        language: "Java",
        extension: "java"
    },
]

myObj.forEach( (item) => {
    console.log(item.extension)
})

