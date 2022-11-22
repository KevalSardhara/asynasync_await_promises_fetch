// import 'node-fetch' from 'node-fetch';

const url = "https://api.github.com/users";

async function data(url){
    console.log("Loading");
    const responce = await fetch(url);
    console.log("after response");
    // responce.status = 200;
    if(!responce.ok){
        return await Promise.reject("error");
    }
    return await Promise.resolve(responce.json());
}

let get = data(url);
console.log("next for the waiting loading");
console.log(get);
setTimeout(() => {  
    console.log(get.then((info) => {
        // info = JSON.stringify(info);
        console.log(info);
        let val = "";
        info.forEach((data) => {
            // console.log(data);
            val += data["login"] + "<br>";
        })
        document.write(val);

    }).catch((error) => {
        console.log(error);
    }));
},2000);

// let a = "";

// if(a !== undefined || a!== null) {
//     console.log(null);
// }


// let get = data(url);
// console.log("next for the waiting loading");
// console.log(get);
// // setTimeout(() => {
//     console.log(get.then((info) =>{
//         console.log(info);
//     }));
// // },2000);
