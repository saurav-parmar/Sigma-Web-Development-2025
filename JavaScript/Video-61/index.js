/* Create a faulty calculator using JavaScript.

This faulty calculator should have the following features:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:
   + ---> -
   * ---> + 
   - ---> / 
   / ---> **
   
   It performs wrong operations 10% of the times.
*/
// sollution ------------------------
let random = Math.random();
console.log(random);

let a = prompt("Enter first number");
let c = prompt("Enter opertaion");
let b = prompt("Enter second number");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random < 0.1) {
  // perform correct calculation
  console.log(`The result is ${a} ${c} ${b}`);
  alert(`The result is ${eval(`${a} + ${c} + ${b}`)}`);
} 

else {
  // perform wrong calculation
  c = obj[c];
  alert(`The result is ${eval(`${a} + ${c} + ${b}`)}`);
}
