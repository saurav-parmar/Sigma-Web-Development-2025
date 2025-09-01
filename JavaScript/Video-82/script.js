async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}

// IIFE- Immediately Invoked Function Expression
(async function main() {
let a = await sleep();
console.log(a);

let b = await sleep();
console.log(b);

})();

// Destructuring
let [x, y, ...rest] = [25, 15, 19, 33, 65, 85];
console.log(x, y, rest);

let obj = {
    a: 5,
    b: 9,
    c: 3,
}
let {a, b,} = obj;
console.log(a, b);

// Spread Operator
function sum(s, a, u) {
    return s + a + u;
}

let arr = [3, 7, 5]
// console.log(arr[0] + arr[1] + arr[2])
console.log(sum(arr[0], arr[1], arr[2]))
// console.log(sum(...arr));

// Hoisting
var a1 = 2;
console.log(a1);