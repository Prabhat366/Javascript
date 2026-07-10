// object singleton

// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Prabhat"
tinderUser.isLoggIn = false

// console.log(tinderUser);


// const reguralUser = {
//     email : "prabhatjena785@gmail.com",
//     full_name : {
//         userFullName : {
//             firstname : "Prabhat",
//             lastname : "Jena"
//         }
//     }
// }

// console.log(reguralUser.full_name?.userFullName.firstname);

// const obj1 = {1 :"a", 2 : "b"}
// const obj2 = {3 :"a", 4 : "b"}
// const obj3 = {5 :"a", 6 : "b"}

// // const obj3 = Object.assign(obj1,obj2)

// const obj4 = {...obj1,...obj2,...obj3}
// // console.log(obj4);

// const user=[
//     {
//         id : 1,
//         email : "prabhatjena785@gmail.com"
//     },
//     {

//     },
//     {

//     }
// ]

// console.log(user[0].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggIn'));     //true
console.log(tinderUser.hasOwnProperty('isLogg'));       //false
