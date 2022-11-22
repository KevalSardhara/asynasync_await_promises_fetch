let data = new Promise(function(resolve, reject) {
    // setTimeout(function() {
        console.log("2");
        if(1){
            console.log("oppo");
            resolve("succesfully completed");
        }   
        else{
            reject("Error");
        }
    // },3000);
});
console.log("1");
console.log(data);
let ret = data.then(function res1(info){
    console.log(info);
    return "info";
}).then(function res2(info){
    console.log(info);
}).catch(function err(error){
    console.log(error);
});
console.log(ret);
console.log(data);
