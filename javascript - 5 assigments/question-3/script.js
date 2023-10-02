
// Exchange rate USD to NRI

const usdToNriExchangeRate=80;

// list of items whose price in USD

const items=[
    {name:"mobile",priceUSD:10},
    {name:"Tab",priceUSD:17},
    {name:"Laptop",priceUSD:28},
    {name:"Tv",priceUSD:20}
]

//use of  map function to create new objet  with NRI rate

const intemsInRupees=items.map((item)=>({
name:item.name,
priceINR:item.priceUSD*usdToNriExchangeRate,
}))

console.log(intemsInRupees);