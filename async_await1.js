// async and await functions to the write the  results
// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise


// data is the get the vary fast so this is the no the wait and quickly run fast it...!
// most  of the time we have the get data as a url through the promise ans asynchronoucly so to fet the vary vary used on the network time delay 
// ------------------------------------------------------------------------------------------ //
let url = "";
// ------------------------------------------------------------------------------------------ //
// async function fun() {
//   return ("data");
// }

// let ans = await fun();
// console.log(ans + "---");

// setTimeout(async () => {
//     ans = await ans;
// }, 2000);
// console.log(ans);

// ------------------------------------------------------------------------------------------ //

// function fun() {
//     return Promise.resolve("data");
//   }
  
// //   let ans = fun().then((ans) => {
// //     console.log("done " + ans);
// //   });


// let ans = fun();

//   console.log(ans);
  
//   setTimeout(async () => {
//       ans = await ans;
//     }, 2000);
//     console.log(ans);

// ------------------------------------------------------------------------------------------ //

async function fun() {
  return await "data";
}

let ans = fun()
  .then(function res1(info) {
    return info;
  })
  .then((val) => {
    console.log(val);
  })
  .catch((error) => {
    console.log(error);
  });
console.log(ans);

// ------------------------------------------------------------------------------------------ //
