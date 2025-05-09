let arr = [1, 2, 3, 4, 5];
//index    0, 1, 2, 3, 4

console.log(arr); // Output: [1, 2, 3, 4, 5]
console.log(arr, typeof arr); // Output: [1, 2, 3, 4, 5] object
console.log(arr.length) // Output: 5
console.log(arr[0]); // Output: 1
console.log(arr[2]); // Output: 3
console.log(arr[4]); // Output: 5

console.log(arr.toString()); // Output: 1,2,3,4,5
console.log(arr.join(" and ")); // Output: 1 and 2 and 3 and 4 and 5
console.log(arr.pop()); // Output: 5

console.log(arr.push(100));
console.log(arr); // Output: [1, 2, 3, 4, 100]

console.log(arr.push("Saurav"));
console.log(arr); // Output: [1, 2, 3, 4, 100, "Saurav"]

console.log(arr.shift());
console.log(arr); // Output: [2, 3, 4, 100, "Saurav"]

console.log(arr.unshift("Sakshi"));
console.log(arr); // Output: [Sakshi, 2, 3, 4, 100, "Saurav"]

let a = [1, 2, 3, 4]
let b = [5, 6, 7, 8]
let c = [9, 10, 11, 12]

console.log(a.concat(b, c)) // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

let numbers = [1, 2, 3, 4, 5]
//index        0  1  2  3  4 

console.log(numbers.splice(2, 4)); 
console.log(numbers); // Output: [1, 2]

console.log(numbers.splice(1, 3, 333, 444, 555));
console.log(numbers); // Output: [1, 333, 444, 555, 5]