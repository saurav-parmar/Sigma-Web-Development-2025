let a = prompt("Enter first number ");

let b = prompt("Enter second number ");
if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Invalid input, not a number");
}
let sum = parseInt(a) + parseInt(b); // converting string to integer

console.log("The sum is ", sum);

function main() {
  let x = 1;
  try {
    console.log("The sum is ", sum * x);
    return true;
  } catch (error) {
    console.log("Error aa gya Bhai");
    return false;
  } finally {
    console.log("Files are being closed and database connection is closed");
  }
}

let c = main();
