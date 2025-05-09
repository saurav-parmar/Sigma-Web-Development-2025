let d = [1, 93, 5, 6, 88]

// For Loop
for (let i = 0; i < d.length; i++) {
    const element = d[i];
    console.log(element); // Output: 1, 93, 5, 6, 88
}
console.log(d); // Output: [1, 93, 5, 6, 88]
// ------------------------------------------------------------------------

// Foreach Loop
d.forEach((value, index, arr) => {
    console.log(value, index, arr); // Output: 1 0 [1, 93, 5, 6, 88] 93 1 [1, 93, 5, 6, 88] 5 2 [1, 93, 5, 6, 88] 6 3 [1, 93, 5, 6, 88] 88 4 [1, 93, 5, 6, 88]
})
console.log(d); // Output: [1, 93, 5, 6, 88]
// ------------------------------------------------------------------------

// Forin Loop
let object = {
    a: 1,
    b: 2,
    c: 3,
}
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(key, element); // Output: a 1 b 2 c 3
    }
}
// ------------------------------------------------------------------------

// For of Loop
for (const saurav of d) {
    console.log(saurav); // Output: 1 93 5 6 88  
}