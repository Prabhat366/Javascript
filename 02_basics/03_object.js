// singleton

// object literals


myobj = Symbol ("obj1")

const JsUser = {
    name : "Prabhat",
    "full name" : "Prabhat jena",
    [myobj] :Symbol("obj2"),
    age : 20,
    email : "prabhatjena785@gmail.com",
    isLoggedIn : false,
    LastLogIn : ["Monday","saturday"]
}



// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[myobj]);

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello");
    
}
// console.log(JsUser.greeting());


JsUser.greeting2 = function(){
    console.log(`Hello ${this.name}`);
    
}
console.log(JsUser.greeting2());
