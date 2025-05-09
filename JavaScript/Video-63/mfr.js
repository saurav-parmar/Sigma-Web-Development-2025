let arr1 = [1, 13, 5, 7, 11];

// let newArr = []; // Method 1
// for (let i = 0; i < arr1.length; i++) {
//     const element = arr1[i];
//     newArr.push(element ** 2);
// }

// let newArr = arr1.map(e=> { // Method 2
let newArr = arr1.map((e) => {
    return e ** 2;
});
console.log(newArr); // Output: [1, 169, 25, 49, 121]
// ------------------------------------------------------------------------

const greaterThanSeven = (e) => {
    if (e < 7) {
        return false
    }
    return true
};
console.log(arr1.filter(greaterThanSeven)); // Output: [13, 11]
// ------------------------------------------------------------------------

let arr2 = [1, 2, 3, 4, 5, 6];

const red = (a, b) =>{
    // return a * b
    return a + b
}
// console.log(arr2.reduce(red)); // Output: 720
console.log(arr2.reduce(red)); // Output: 21
// ------------------------------------------------------------------------

console.log(Array.from("Saurav")); // Output: [S, a, u, r, a, v]