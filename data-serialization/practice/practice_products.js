const products = require('../data/products/products.json')
// Tasks

 
// 1. Create a function that returns the name of the product with the highest name length.
//    If there are two or more products with the same length, return the one with the lowest id.

// // function that return lengths of titles 
const highestNamefn = (p =>  p.map( p => p.title).sort((a,b) => (a.length-b.length)));
const highestNameList = highestNamefn(products);
console.log(highestNameList);

// // save lowest and highest length titles. 
let titleOfLowestLength = highestNameList[0];
let titleOfHighestLength  = highestNameList[highestNameList.length-1];

// // function that fetch titles with same highest length
const getLowestfn = ( (p,value) => p.map( p => (p.title.length==value) ? p.title : null).filter(p => p!=null).sort((a,b) =>(a-b)));

titleOfLowestLength = getLowestfn(products,titleOfLowestLength.length);
titleOfHighestLength = getLowestfn(products,titleOfHighestLength.length);

// // Print Lowest and Highest Lengths.
console.log( titleOfLowestLength[0] + " --- Lowest Length :" +  titleOfLowestLength[0].length);
console.log( titleOfHighestLength[0] + " --- Highest Length :"   + titleOfHighestLength[0].length);
 
 
// 2. Create a function that returns the name of the product with the highest price.
//    If there are two or more products with the same price, return the one with the lowest id.

// 3. Create a list of all the products that are from the same brand.

// 4. Print the average price of the products.

// 5. Create a list of all the products that have highest stock units.


