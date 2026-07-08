// Stack (Primitive)
let name="Prabha"
let NewName=name

NewName="Prabhat"

//console.log(name);//Prabha
// console.log(NewName);//Prabhat

//******************************** */
// Heap(NonPrimitive)
let MyId={
    Name : "Prabhat",
    upiId : "Prabha@ybl"
}

let NewId=MyId
NewId.Name="Prabha"

console.log(MyId.Name);//Prabha
console.log(NewId.Name);//Prabha
