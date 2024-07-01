
function saymyname(){
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("P");
    console.log("A");
    console.log("M");
}

// saymyname()

function addtwonumber(num1,num2){
    let result = num1 + num2
    return result 
}

// console.log(addtwonumber(3,5));

function usermsg(username){
    if(!username){
        console.log("Please Enter a username");
        return
    }
    return `${username} just loggedin`
}

console.log(usermsg("Anupam"));