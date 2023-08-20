const products=[
    {
        productName:"laptop",
        price:120000
    },
    {
        productName:"mobile",
        price:15000
    },
    {
        productName:"tv",
        price:74000
    },
    {
        productName:"watch",
        price:7900
    },
    {
        productName:"laptop bag",
        price:1400
    }
]


function findMinAndMax() {
    // products.sort((a,b)=> a.price-b.price)
    products.sort();
    console.log(`The product with minimum amount is ${products[products.length-1].productName} which is priced at RS.${products[products.length-1].price} `);
    console.log(`The product with maximum amount is ${products[0].productName} which is priced at RS. ${products[0].price}`);
}
findMinAndMax();