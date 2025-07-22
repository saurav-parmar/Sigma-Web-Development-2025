// async function getData() {
//     // simulate getting data from a server
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }

// setle means resolve or reject
// resolve means promise has setteled successfully
// reject means promise has not setteled successfully
async function getData() {
  // simulate getting data from a server
  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await x.json();
  return data;
}

async function main() {
  console.log("Loading data...");

  console.log("Do something else...");

  console.log("Load Data...");
  let data = await getData();
  console.log(data);

  console.log("Process Data...");

  console.log("Task 2...");
}

main();

// data.then(value => {
// console.log(data);
// console.log('Process Data...');
// console.log('Task 2');
// });
