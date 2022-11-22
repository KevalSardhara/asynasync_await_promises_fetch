function data(a, b) {
  return new Promise(function (resolve, reject) {
    if (a * b === 200) {
      resolve(10 * 20);
    } else {
      reject("Error");
    }
  });
}

let ret = data(10, 20).then(
  function res(info) {
    console.log(info);
  },
  function rej(error) {
    console.log(error);
  }
);
console.log(ret);

let i = 0;
while (i <= 5) {
  console.log(data(10, 20));
  i++;
}

// git commit file
