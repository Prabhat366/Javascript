function addTwonumber(num1, num2){
    console.log(num1+num2);
}


// addTwonumber(2,4)
// addTwonumber(2,'a')
// addTwonumber(2,null)

function ret(nu1,nu2){
    return nu1 + nu2
}
const res = ret(2,3)
// console.log(res);

function logInUserMessage (username){
    if(username === undefined){
        console.log("Plese enter a name");
    }
    return `${username} just logged in`
}

// console.log("Hii",logInUserMessage());

function logInUserMessage (username){
    if(!username){
        console.log("Plese enter a name");
    }
    return `${username} just logged in`
}

// console.log(logInUserMessage());
// *****************************************************************

function calculatePrice(...num1){
    return num1
}
// console.log(calculatePrice(200,400,500));

user = {
    name : "Prabhat",
    salary : '150k'
}

function userInfo(anyobject){
    // console.log(`The name of the user is ${anyobject.name} the salary of the user is ${anyobject.salary}`);
    
}

// userInfo(user)
userInfo(
    {
        name : "Prabha",
        salary : '100k'
    }
)
/***************Array*****************/
// myArr=[400,300,4000,500]

function arrFunc(arrinfo){
    return `hii ${[arrinfo[1],arrinfo[3]]}`;
}
// console.log(arrFunc(myArr));
const print=arrFunc(
    [400,300,4000,500]
)
console.log(print);
