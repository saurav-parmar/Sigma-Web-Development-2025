console.log("This is string Tutorial");

let a = "Saurav"; // String Literal
console.log(a);
console.log(a[0]); // Accessing first character of string
console.log(a[1]); // Accessing second character of string
console.log(a[2]); // Accessing third character of string       
console.log(a[3]); // Accessing fourth character of string
console.log(a[4]); // Accessing fifth character of string
console.log(a[5]); // Accessing sixth character of string

console.log(a.length); // Length of string

let real_name = "Saurav Parmar";
let friend = "Sakshi Parmar";

console.log("His name is " + real_name + " and her name is " + friend ); // Concatenation of strings
console.log(`His name is ${real_name} and her name is ${friend}`); // Template literals

let b = "Sushma Shergill";
console.log(b.toUpperCase()); // Convert string to uppercase (function)
console.log(b.toLowerCase()); // Convert string to lowercase (function)
console.log(b.length); // Length of string (property)
console.log(b.slice(1, 5)); // Slice string from index 1 to 5 (function)
console.log(b.slice(2)); // Slice string from index 2 to end (function)
console.log(b.replace("sh", "85")); // Replace first occurrence of "sh" with "85" (function)
console.log(b.concat(a , "Parmar", "Rahul", "Priya")); // Concatenate strings (function)

console.log(b)