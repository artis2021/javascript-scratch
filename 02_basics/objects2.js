// const user = new Object()   //singleton object
const user = {}   //non singelton object
user.id = "123@abc"
user.name = "Saamy"
user.isLoggedIn = false;


// console.log(user)

const regUser = {
    email: "some@example.com",
    fullname: {
        userfullname: {
            firstname: "Arti",
            lastname: "Sahu"
        }
    }
}

// console.log(regUser.fullname.userfullname)

const obj1 = {
    1: "A",
    2: "B"
}

const obj2 = {
    3: "C",
    4: "D"
}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign( obj1, obj2)
// console.log(obj1)
// console.log(obj3)

// obj3 = {...obj1, ...obj2}
// console.log(obj3)

// console.log(obj1 === obj3)

// console.log(Object.keys(regUser))
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// console.log(user.hasOwnProperty("isLoggedIn"))

const course = {
    courseName: "PhD",
    price: 888,
    courseInstructor: "Arti"
}

// course.courseName

const {courseInstructor, price} = course

console.log(courseInstructor, price)

// const navbar = ({company}) => {

// }

// navbar(company) = "Arti"

// {
//     "name": "Arti",
//     "courseName": "PhD",
//     "price": "free"
// }


[
    {},
    {},
    {}
]