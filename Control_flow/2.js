// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;

    default:
        console.log("Other Month")
        break;
}

// Nullish Coalescing OPerator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ??20
console.log(val1)

// Terniary Operators
// cond ? true : false

const x = 10
x==2? console.log("not equal") : console.log("equal")
