// console.log("Hey Saurav you are nice!");
// console.log("Hey Saurav you are good!");
// console.log("Hey Saurav you are t-shirt is nice!");
// console.log("Hey Saurav you are cousre is good too!");

function nice(name) {
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " you are t-shirt is nice!");
    console.log("Hey " + name + " you are cousre is good too!");
}

nice("Sakshi");
nice("Saurav");

// ------------------------------------------------------------------
function sum(a, b, c=3) {
    // console.log(a + b);
    return a + b + c;
}

// sum(5, 6);
result1 = sum(5, 9);
result2 = sum(7, 6);
result3 = sum(5, 12, 15);

console.log("The sum of these number is: ", + result1);
console.log("The sum of these number is: ", + result2);
console.log("The sum of these number is: ", + result3);

const func1 = (x)=>{
    console.log("I am an Arrow Function!", x);
}

func1(34);
func1(66);
func1(84);