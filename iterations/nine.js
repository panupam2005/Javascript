const myNums = [1, 2, 3]

const mytotal = myNums.reduce( (acc, curr) => acc + curr, 0) 
console.log(mytotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// const pricetopay = shoppingCart.reduce( (acc,curr) => acc + curr.price, 0 )

const pricetopay = shoppingCart.reduce( function (acc,item) {
    return acc + item.price
},0)

console.log(pricetopay);