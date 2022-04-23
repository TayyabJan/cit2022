const products = require('../data/products/products.json')
// Tasks

 
// 1. Create a function that returns the name of the product with the highest name length.
//    If there are two or more products with the same length, return the one with the lowest id.

// // // function that return lengths of titles 
const highestNamefn = (p =>  p.map( p => p.title).sort((a,b) => (a.length-b.length)));
const highestNameList = highestNamefn(products);
console.log(highestNameList);

// // save lowest and highest length titles. 
let titleOfLowestLength = highestNameList[0];
let titleOfHighestLength  = highestNameList[highestNameList.length-1];

// // function that fetch titles with same highest length
const getLowestfn = ( (p,value) => p.map( p => (p.title.length==value) ? p.title : null).filter(p => p!=null)
.sort((a,b) =>(a-b)));

titleOfLowestLength = getLowestfn(products,titleOfLowestLength.length);
titleOfHighestLength = getLowestfn(products,titleOfHighestLength.length);

// // Print Lowest and Highest Lengths.
console.log( titleOfLowestLength[0] + " --- Lowest Length :" +  titleOfLowestLength[0].length);
console.log( titleOfHighestLength[0] + " --- Highest Length :"   + titleOfHighestLength[0].length);
 
 
// 2. //Create a function that returns the name of the product with the highest price.
////    If there are two or more products with the same price, return the one with the lowest id.

 
// // // // function that return prices of titles 
const highestpriceProduct = (p =>  p.map( p => p).sort((a,b) => (a.price-b.price)));
const productslist = highestpriceProduct(products);


//console.log(productslist);

// // checking prices
//console.log(products.map ( p => p.price).sort( (a,b) => (a-b)));

// // // save lowest and highest price titles. 
let titlewithLowestPrice = productslist[0].price;
let titleOfHighestPrice  = productslist[productslist.length-1].price;

 

// // function that fetch titles with same highest price 
const getLowestfn1 = ( (p,value) => 
p.map( p => (p.price==value) ? p.title + " ( ID : " + p.id + " Price: " + p.price +" )" : null)
.filter(p => p!=null).sort((a,b) =>(a.price-b.price)));

titlewithLowestPrice = getLowestfn1(products,titlewithLowestPrice);

titleOfHighestPrice = getLowestfn1(products,titleOfHighestPrice);

 
// Print first Lowest and Highest prices based on ID .
console.log( titlewithLowestPrice[0]);
console.log( titleOfHighestPrice[0]);


// 3//. Create a list of all the products that are from the same brand.
      
// // picking list of same categories 

const categoryList = products.map(p =>p.category.trim());
const sameCategoryList = categoryList.filter( (item, index ) => categoryList.indexOf(item)!=index);
const categoryListSet = new Set(sameCategoryList);

const productsWithSameCategory = products.map ( p => sameCategoryList.includes(p.category)? p : null)
.filter(p=>p!=null);

console.log(categoryListSet);
console.log(productsWithSameCategory.map(p=>p.category)); 
// this dont' show the test category created last cz it has no many products



//// 4. Print the average price of the products.

const avgPrice = Math.round(products.map (p =>p.price).reduce((a,b) => (a+b))/products.length);
console.log("Products Average Price is : " + avgPrice);

//// 5. Create a list of all the products that have highest stock units.

const products2 = require("../data/others/products.json");
const highestStockUnits = products2.map(p =>p.stockUnits).sort( (a,b) =>(a-b)).reduce( (a,b) => (a>b)? a: b);
console.log("Highest stock Value is : " + highestStockUnits);
const productswithHighestStockUnits = products2.map(p => highestStockUnits ==(p.stockUnits)? p.name : null)
.filter(p =>p!=null);
 //console.log(productswithHighestStockUnits)

const productbyStockValuefn = (stockvalue  => products2.map( p => p.stockUnits<=stockvalue ? p: null)
.filter(p =>p!=null).sort( (a,b) => (a.stockUnits-b.stockUnits)));
const stockvalue = 100;
const productlistStockwise = productbyStockValuefn(stockvalue);

console.log( `Products having Stock Value Greate or Equal to ${stockvalue} \n`);
productlistStockwise.forEach(p => console.log(p.name + " ---- Stock :" + p.stockUnits));
