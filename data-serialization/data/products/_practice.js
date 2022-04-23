// Tasks
const products = require("../products/products.json");

// 1. List all the products with above average price.


// first calcultate avg price separately.
const avgPrice = Math.round(products.map(p => p.price).reduce((a, b) => (a + b)) / products.length);
// console.log("Products Above Average Price   : " + avgPrice + " )");


///// when avg price is calculated, then prices are fetched accordingly. 
// const aboveAveragePrice = products.filter(p => p.price > avgPrice);
// console.log(aboveAveragePrice.map(p => p.title));

// all ine one line  **************
// const productslist = products.filter(p => p.price > Math.round(products.map (p =>p.price).reduce((a,b) => (a+b))/products.length));
// console.log(productslist.map(p => p.title + " - " + p.price));


// 2. List top 5 products with highest rating.

// products fetched in sorted order.
const productRating = products.map(p => p).sort((a, b) => (b.rating.rate - a.rating.rate));

// // to have unique ratings a set is created.
// const productRatingSet = new Set (productRating.map(p => p.title + "  rating :  " + p.rating.rate));
// console.log(productRatingSet);


// // among the set only top 5 are displayed.
// for(let i = 0; i < 5; i++) {
//   console.log(productRating[i].title + "  rating :  " + productRating[i].rating.rate);
// }


// 3. List all distinct categories.

//  const listCategories = new Set (products.map(p => p.category));
//  console.log(listCategories);



// 4. Print average price and rating of the products

// const avgRating = Math.round(products.map (p =>p.rating.rate).reduce((a,b) => (a+b))/products.length);

// console.log(`Average Rating : ${avgRating} and Average Price : ${avgPrice}`);

// 5. List top 5 products with highest rating and lowest price.

//  const highRatingLowPrice = products.map(p => p).sort( (a,b) => (b.rating.rate-a.rating.rate)).filter(p => p.price < avgPrice);

//  for (let i = 0; i < 5; i++) {
//  console.log( highRatingLowPrice[i].title + "  rating :  " + highRatingLowPrice[i].rating.rate + "  price :  " + highRatingLowPrice[i].price);

//  }


// Big challenge :)

// 6. Create list with User's Name, Email, City and their product's names, prices and total bill.

const users = require("../products/users.json");
const carts = require("../products/carts.json");

const data =[]; 
carts.map(c => {
  let totalBill = 0;
 
  const usersdetail = users.filter(u => u.id == c.userId ? u.name.firstname : null).filter(u => u != null);
  const id=c.userId, uname =usersdetail[0].name.firstname + "  " + usersdetail[0].name.lastname,email=usersdetail[0].email,
  city=usersdetail[0].address.city;
 
  const userProducts = [];
  //console.log(" Product Names :  ");
  c.products.map(cp => {
   
    const productdetail = products.filter(p => p.id == cp.productId ? p.title : null).filter(p => p != null);
    //console.log(productdetail);
    const productName = productdetail[0].title, Price = productdetail[0].price, Quantity = cp.quantity;
   // console.log("\t" + productdetail[0].title + " Price " + productdetail[0].price + "  * " + cp.quantity + " = " + (productdetail[0].price * cp.quantity));
    totalBill += productdetail[0].price * cp.quantity;
    const userProductDetail = { productName, Price, Quantity };
    userProducts.push(userProductDetail);
  });
  // console.log("************************************************");
  // console.log(" User ID : " + c.userId + " User Name : " + usersdetail[0].name.firstname + "  " + usersdetail[0].name.lastname);
  // console.log(" Email : " + usersdetail[0].email + " City : " + usersdetail[0].address.city );
  // console.log("\t" + userProducts.map(p => console.log(p.productName)));
  // console.log(" The total Bill is : " + totalBill);
  const userdata = {     id,    uname,    email,    city,    userProducts,    totalBill  };
  data.push(userdata);
});
console.log(data);
 

