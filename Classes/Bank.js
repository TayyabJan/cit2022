class Bank {
    balance = 0;
    constructor(balance =0){
        console.log("Parent Class Constructor");
        this.balance += balance;
    }
    credit(balance){
        if(balance<=0) return ;
        this.balance += balance;
    }
    debit(balance){
        if(balance<=0 || balance>this.balance) return ;
        this.balance -=balance;
    }
    getBalance(){
        //this(); // calls current class constructor while super(); calls supper class constructor
        return this.balance;
    }

get Amount(){
    return this.balance;
}
set Amount(amount){
    this.balance = amount;
}
}

class CurrentAccount extends Bank {
    balance=5;

    constructor(){
        super();
        console.log("Child class constructor");
    }

    call(){
       //return this.balance; // returns current class balance. even if base class method is called.
       //return super.balance;
        
    }

    getBalance() {
        return "this is child class method now as overrided";
    }
}
const obj1 = new Bank(200);
 obj1.credit(250);
// obj1.debit(50);
 console.log(obj1.getBalance());
// console.log(obj1.Amount);
// // to use getter and setter.
// console.log(obj1.Amount);
// obj1.Amount = 500;
// console.log(obj1.Amount);

const ca = new CurrentAccount();
console.log(ca.Amount);
console.log(ca.getBalance());
console.log(ca.call());