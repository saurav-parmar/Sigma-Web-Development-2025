console.log("Hey this is tutorial 55");

let a = 34;
let b = 20;
let c = "Saurav";
let _a = "Shubham"; // Valid variable name, can start with an underscore
// let 55a = "Shubham"; // Invalid variable name, cannot start with a number

// console.log(a + b); // 54
// console.log(a + b + 8); // 62
// console.log(typeof a, typeof b, typeof c); // number number string

{
    let a = 45; // Block scoped variable, can be changed
    console.log(a); // 45
}
console.log(a); // 34, outside the block the value of a is still 34

const a1 = 34; // Constant variable, cannot be changed
// a1 = 45; // Error: Assignment to constant variable

let x = "Saurav Parmar"; // String variable    
let y = 34; // String variable
let z = 45.67; // Float variable
let p = true; // Boolean variable
const q = true; // Constant boolean variable cannot be changed 
const r = undefined; // Undefined variable
const s = null; // Null variable 

console.log(x, y, z, p, q, r, s); // Saurav Parmar 34 45.67 true true undefined null
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r, typeof s); // string number number boolean boolean undefined object

let o = {
    name: "Saurav",
    age: 32,
    "job code": "SDE", // Key with space in it
    is_handsome: true,
}

console.log(o); // { name: 'Saurav', age: 32, 'job code': 'SDE', is_handsome: true }
o.salary = "100 crores"; // Adding a new key to the object
console.log(o); // { name: 'Saurav', age: 32, 'job code': 'SDE', is_handsome: true, salary: '100 crores' }
o.salary = "200 crores"; // Changing the value of the key
console.log(o); // { name: 'Saurav', age: 32, 'job code': 'SDE', is_handsome: true, salary: '200 crores' }
