// object

mysym = Symbol("key1")

const jsuser = {
    name : "Anupam",
    fullname : "Anupam Tiwari",
    [mysym] : "key1",
    age : 18,
    email : "abc@gmail.com",
    Islogin : false,
    lastlogindays : ["monday","Tuesday"]
}

// console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser[mysym]);
console.log(jsuser["Islogin"]);
console.log(jsuser["fullname"]);