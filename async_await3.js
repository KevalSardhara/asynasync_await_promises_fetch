function start() {
  console.log("start call it...!");
  return "call";
}

async function data() {
  let msg = await start();
  console.log(msg);
  console.log("inside");
  return await "info";
}
console.log("data1");
data()
  .then((info) => console.log(info))
  .catch((error) => {
    console.log(error);
  });
start();
console.log("data2");
