let userdetails = []

if (userdetails) {
    console.log("allow user");
}
else{
    console.log("enter you details");
}

// falsely value 
    // false, 0, -0, biginton, "", null, undefined, NaN

// Truthy
// 'false', "0", " ", {}, [], function(){}

// Nullish Coalescing Operator (??): null undefined

let var1 = null ?? 5

console.log(var1);

// Terniary Operator

// condition ? true : false

const icetemp = 2

icetemp <= 10 ? console.log("icecube") : console.log("not icecube");