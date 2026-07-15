const user = {
    userName : "Prabhat",
    price : 1000,
    wellcomeMessage : function()
    {
        // console.log(`${this.userName}, wellcome to my webside`);
        // console.log(this);
        
        
    }
}


user.wellcomeMessage()
user.userName = "Prabha"
user.wellcomeMessage()

// console.log(this);



// ************



// function Prabha(){
//     let userName = "Prabhat"
//     console.log(this.userName);// undefined this. is only use in object not in function
    
// }
// Prabha()