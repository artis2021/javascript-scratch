var c = 300


if( true ){
    let a = 10
    const b = 20
    var c = 30
    
}

// for(let i = 0; i< 10; i++){
//     console.log(i)
// }


// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "Arti"

    function two(){
        const website = "artisahuiitg.ac.in"
        console.log(username)
    }

    // console.log(website)

    two()

}

// one()

if(true){
    const username = "Arti"
    if(username === "Arti"){
        const website = " iitg.ac.in"
        // console.log(username+website)
    }
    // console.log(website)
}

// console.log(username)

// +++++++++++++++++ interesting ++++++++++++++++

console.log(addOne(5))

function addOne(num){
    return num+1
}



const addTwo = (num) => {
    return num+2
}
console.log(addTwo(7))




