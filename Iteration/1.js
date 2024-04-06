//for

// for(let i=0; i< 10; i++){
//     console.log(i)
// }

// for(let i=0; i<= 10; i++){
//     console.log(`Outer Loop ${i}`)
//     for(let j=0;j <=10; j++){
//         console.log(`Inner Loop ${j}`)
//     }
// }

const arr = ["Arti", "Sahu", "Suraj", "Sahu", "Abhishek"]
for(let i=0; i< arr.length; i++){
    console.log(arr[i])
}


//break and continue

for(let i=1; i<= 20; i++){
    if(i == 5){
        console.log(`detected 5`)
        continue
    }
    console.log(`Value of i is ${i}`)
}