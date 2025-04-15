console.log("Hello i am conditional tutorial");

// let age = 32; // let is Block scope variable
// let age = 12;
let age = 1;
// let grace = 2;

// Arthmetic Operators
// console.log(age + grace); // addition
// console.log(age - grace); // subtraction
// console.log(age * grace); // multiplication
// console.log(age / grace); // division
// console.log(age ** grace); // exponentiation
// console.log(age % grace); // modulus

// age += grace; // Assignment Operators
// console.log(age); // 19
// console.log(age += grace); // 21
// console.log(age -= grace); // 19
// console.log(age *= grace); // 38
// console.log(age /= grace); // 19
// console.log(age %= grace); // 1
// console.log(age **= grace); // 1

// // comparison Operators
//     == // equal to
//     === // equal to and same type
//     != // not equal to
//     !== // not equal to and same type
//     > // greater than
//     < // less than
//     >= // greater than or equal to
//     <= // less than or equal to
//     ? // ternary operator

// Logical Operators
//     && // and
//     || // or
//     ! // not

if (age == 18) {
  console.log("You can drive");
}

else if (age == 0) {
    console.log("Are you kidding me?");
}

else if (age == 1) {
    console.log("Are you again kidding me?");
}

 else {
  console.log("You cannot drive");
}


a = 6;
b = 15;
let c = a > b ? (a - b) : (b - a); // ternary operator (Shortened if else statement)

// translate to:
// if (a>b) {
//   let c = a - b;
// }
// else {
//   let c = b - a;
// }

console.log(c); // 9