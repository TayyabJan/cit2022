 // import Product from './Product'; // ES6
 const Product = require("./Product"); // ES5

//  import Product from "./Product";
//  import { Product2 as P2 } from "./Product";
//  import Product, {Product3 as P3} from "./Product";
 

 const p1 = new Product();
 p1.name = "Product 1";
 p1.price = 200;
 p1.qty = 20;

 const bill = p1.bill();
 console.log(bill);