 class Product {
    name;
    price;
    qty;

    deliver = () =>{

    }
    bill = () => {
       return this.qty * this.price
    }
}
class Product2 {
    name;
    price;
    qty;

    deliver = () =>{

    }
    bill = () => {
       return this.qty * this.price
    }
}

class Product3 {
    name;
    price;
    qty;

    deliver = () =>{

    }
    bill = () => {
       return this.qty * this.price
    }
}

// export default Product; // ES6

module.exports = Product;

//export {Product2,Product3};



