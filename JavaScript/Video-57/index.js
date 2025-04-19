console.log("I am a Tutorial of JavaScript Loops")

//  for-loop
let a = 1;
// console.log(a) // 1
// console.log(a + 1) // 2
// console.log(a + 2) // 3

for (let i = 0; i < 100; i++) {
    console.log(a + i) // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ... , 100
}

// for-in loop 
let obj = {
    name: "Saurav",
    role: "Developer",
    company: "CodeWithSaurav AI",
}

for (const key in obj) {
        const element = obj[key];
        console.log(key, element) // name Saurav, role Developer, company CodeWithSaurav AI
}

// for-of loop
for (const c of "Saurav") {
    console.log(c) // S, a, u, r, a, v  
    
}

// while loop
let i = 0;
while (i < 6) {
    console.log(i) // 0, 1, 2, 3, 4, 5
    i++ // increment i by 1   
}

// do-while loop
// let z = 0;
let z = 10;
do {
    console.log(z) // 10
    z++ // increment z by 1
} while (z < 6) // condition is checked after the loop is executed;