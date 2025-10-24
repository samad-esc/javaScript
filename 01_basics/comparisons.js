// //

// // basic conversion me koi problems nahi hai

// // data types same hona chahiye!!!!!!!!!

// // primitive

// // string
// // Number
// // boolean
// // null  -> completely empty
// // undefined  -> no value is assigned
// // symbol
// // BigInt

// const Id = Symbol("132");
// const anotherId = Symbol("132");
// console.log(Id === anotherId);

// // non-primitive reference type
// // arrays
// // objects
// // functions

// const heros = ["spidey", "nova"];
// let myobj = {
//   name: "samad",
//   age: 20,
// };

// const myFunc = function () {
//   console.log("hellow world");
// };

// console.log(typeof null);
// console.log(typeof heros);
// console.log(typeof myFunc);

// // JavaScript is a dynamically typed language.

// // In a dynamically typed language, the type of a variable is determined at runtime, not strictly at compile time.
// // BairesDev
// // +1

// // For example in JavaScript you can do:

// // let x = 5;        // x is number
// // x = "hello";      // now x is string

// //

// // stack--> primitive
// // heap ---- non primitive

// let name = "mera naam joker";

// let doosranaam = " mera naam doosra joker";

// doosranaam = "mera naam teesra joker";

// console.log(name);


// console.log(doosranaam);

// let userone = {
//   email: "user@googre.com",
//   upi: "aser@aryl"
// }

// let usertwo = userone

// usertwo.email="meranaam@googlr.com"


// console.log(userone.email);
// console.log(usertwo.email);


// // **********STRINGS***************

// // "hello" + "world"

const name ="samad"
const repo = 50
console.log(name+repo+"value");


console.log(`hello my name is ${name} and my repo count is ${repo}`);


const gameName = new String('hellowman')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.lastIndexOf('w'));


const newstring = gameName.substring(0,4)
console.log(newstring);

const another = gameName.slice(-8,4)

console.log(another);


const newstring1 = "     mera naam     "
console.log(newstring1);
console.log(newstring1.trim());

const url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11"
console.log(url.replaceAll('=','%'));
console.log(url.includes('sundar'));
console.log(url.split('='));
console.log(newstring1.blink());


 