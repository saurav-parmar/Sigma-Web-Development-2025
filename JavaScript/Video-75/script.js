console.log("Saurav is a hacker");
console.log("Sakshi is a hecker");

setTimeout(() => {
  console.log("I am inside setTimeout");
}, 2000);

setTimeout(() => {
  console.log("I am inside setTimeout 2");
}, 1000);

console.log("The End!");

const fn = ()=>{
  console.log("I am inside fn");
}

const callback = (arg, fn) => {
  console.log(arg);
  fn();
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Saurav", fn);
  document.head.append(sc);
};

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
