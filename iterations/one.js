// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(i);
}

// for (let i = 0; i <=10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`inner loop is ${j} and outer loop is ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }

let myarr = ["flash", "batman", "superman"]
// console.log(myarr.length);

for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(element);
}

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
       console.log("5 is detected"); 
       break
    }
    console.log(i);
}

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
       console.log("5 is detected"); 
       continue
    }
    console.log(i);
}