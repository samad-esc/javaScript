// 

// basic conversion me koi problems nahi hai


// data types same hona chahiye!!!!!!!!!

// primitive

// string 
// Number
// boolean
// null  -> completely empty
// undefined  -> no value is assigned
// symbol
// BigInt

const Id = Symbol('132')
const anotherId = Symbol('132')
console.log(Id === anotherId);



// non-primitive reference type
// arrays
// objects
// functions

const heros = ["spidey", "nova"];
let myobj = {
    name: "samad",
    age: 20
}

const myFunc = function () {
    
    console.log("hellow world");
    
}

console.log(typeof(null));
console.log(typeof(heros));
console.log(typeof(myFunc));



// JavaScript is a dynamically typed language. 

// In a dynamically typed language, the type of a variable is determined at runtime, not strictly at compile time. 
// BairesDev
// +1

// For example in JavaScript you can do:

// let x = 5;        // x is number  
// x = "hello";      // now x is string 

// 