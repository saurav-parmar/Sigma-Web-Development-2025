console.log("This is a promise example!");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();

  if (a < 0.5) {
    reject("Error: No Random Number Generated!");
  } 

  else {
    setTimeout(() => {
      console.log("Yes i am done!");
      resolve("Saurav");
    }, 3000);
  }
});

// prom1.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// });

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();

  if (a < 0.5) {
    reject("Error: No Random Number Generated 2!");
  } 

  else {
    setTimeout(() => {
      console.log("Yes i am done 2!");
      resolve("Saurav 2");
    }, 2000);
  }
});

// let prom3 = Promise.all([prom1, prom2])
// prom3.then((a) => {
//     console.log(a);  
// }).catch((err) => {
//      console.log(err);
// });

// let prom3 = Promise.allSettled([prom1, prom2])
// prom3.then((a) => {
//     console.log(a);  
// }).catch((err) => {
//      console.log(err);
// });

let prom3 = Promise.race([prom1, prom2])
prom3.then((a) => {
    console.log(a);  
}).catch((err) => {
     console.log(err);
});