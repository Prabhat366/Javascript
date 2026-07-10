const myArray = [0,1,2,3,4,5]
const myHero = ["Tony","spidy"]

const myArray2 = new Array(1,2,3,4)


// myArray.push(7)
// console.log(myArray);
// myArray.pop()
// console.log(myArray);

// myArray.unshift(9)
// console.log(myArray);

// myArray.unshift()
// console.log(myArray);

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

// const newArr = myArray.join()
// console.log(newArr);
// console.log(typeof newArr);

//slice,splice

console.log("A",myArray);

const myn1 = myArray.slice(1,3)

console.log("sclice",myn1);
console.log("B",myArray);//[0,1,2,3,4,5]

const myn2 = myArray.splice(1,3)

console.log("splice",myn2);
console.log("C",myArray);//[0,4,5]
