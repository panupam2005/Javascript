// object

const jsuser = {}

jsuser.name = "Anupam"
jsuser.id = "12345"
jsuser.email = "abc@gmail.com"

// console.log(jsuser);

const user = {
    email : "xyz@gmail.com",
    name : {
        fullname : {
            first_name : "Anupam",
            last_name : "Tiwari"
        }
    }

}

console.log(user.name.fullname.last_name);

const obj1 = {1: "a",
    2 : "b"
}

const obj2 = {3: "a",
    4: "b"
}

const obj3 = {...obj1 , ...obj2}

console.log(obj3);