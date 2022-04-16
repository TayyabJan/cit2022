 const users = require('../data/others/users.json')

 

// // 1. Create a function that returns the name of the user with the highest name length.
// //    If there are two or more users with the same length, return the one with the lowest id.

// // // Method 1  ( The DRY CONCEPT :) 
const NameLengthfn2 = (a =>  a.map (users => users.name.firstname+ " " + users.name.lastname)
                        .sort( (a,b) => (a.length-b.length)));
const names = NameLengthfn2(users);

let nameWithLowestLength  = names[0];
let nameWithHighestLength  = names[names.length-1];

const getLowestfn =  ( (u, value) => 
                            u.map( u => (value == (u.name.firstname + " " + u.name.lastname).length) ? u.name.firstname + " " + u.name.lastname : null)
                            .filter(u => u!=null)
                            .sort((a,b) => (a-b)));
                        
                            nameWithLowestLength = getLowestfn(users,nameWithLowestLength.length);
                            nameWithHighestLength = getLowestfn(users,nameWithHighestLength.length);

console.log("\n Shortest Name is : " + nameWithLowestLength[0] + "\n Longest Name is : " +  nameWithHighestLength[0]);

// Above code performs both task 1 & 2

// // // Method 2 
// const highestNamefn = (a =>
//     a.reduce((a, b) => (
//         (a.name.firstname.concat(a.name.lastname))
//             .length >
//         (b.name.firstname.concat(b.name.lastname))
//             .length) ? a : b)

// );
         
// const highestName = highestNamefn(users);

// console.log(`\n ****** longest name is:  ${highestName.name.firstname 
//                                     + highestName.name.lastname} (${(highestName.name.firstname 
//                                     + highestName.name.lastname).length})`);

// /// Just for verification
// // const titlelength =  users.map((item) => item.name.firstname.concat(item.name.lastname).length);
// // console.log(titlelength.sort((a,b) => a - b));// this sort only needed for numeric data. for strings use .sort();




// // 2. Create a function that returns the name of the user with the shortest name.
// //    If there are two or more users with the same length, return the one with the lowest id.

  
// const lowestNamefn = (a =>
//     a.reduce((a, b) => (
//         (a.name.firstname.concat(a.name.lastname))
//             .length <
//         (b.name.firstname.concat(b.name.lastname))
//             .length) ? a : b)
// );
// const shortestName = lowestNamefn(users);

// console.log(`\n ****** Shortest name is:  ${shortestName.name.firstname 
//                                         + shortestName.name.lastname} (${(shortestName.name.firstname 
//                                             + shortestName.name.lastname).length})`);

  


// // 3. Create a function that returns the name of the user with the highest id.
// // // Method 1

// const  IDfn = ( a => a.map( (a,b) =>  a.id).sort((a,b) => (a-b)));
// const IDs = IDfn(users);
// console.log(" Highest ID is : " + IDs[IDs.length-1] + " \n Lowest ID is : " + IDs[0]);

// // // Method 2
// const  highestIDfn = ( a => a.reduce( (a,b) =>  a.id    > b.id ? a : b ));
// const highestID = highestIDfn(users);
// console.log(" \n Highest ID : " + highestID.id + " Name : " + highestID.name.firstname + highestID.name.lastname);


// // 4. Create a function that returns the name of the user with the lowest id.

//  // Done above. 

// // 7. Create a function that returns the name, email and address along with lat, long of the user.

// const UserDetailfn = ( (a,username) => a.map( a => username.includes(a.name.firstname)? a : null)
//                     .filter(a=>a!=null));
// const UserDetails = UserDetailfn(users,"kate");
// console.log(`
//     ID         : ${UserDetails[0].id}
//     First Name : ${UserDetails[0].name.firstname}
//     Last  Name : ${UserDetails[0].name.lastname}
//     Last  Name : ${UserDetails[0].email}
//     Address    : 
//          City       :     ${UserDetails[0].address.city} 
//          Street     :     ${UserDetails[0].address.street} 
//          Number     :     ${UserDetails[0].address.number} 
//     Geo-Location:  
//          Lat        :     ${UserDetails[0].address.geolocation.lat} 
//          Long       :     ${UserDetails[0].address.geolocation.long} `);

 
// // 8. Create a function that checks if there are any user from the same city.
// const cityList = users.map(u => u.address.city).sort();
// console.log(cityList);
// const userOfSameCityfn = (list) =>  list.filter( (item,index) => list.indexOf(item)!=index);

// const userOfSameCity = userOfSameCityfn(cityList);
// console.log(userOfSameCity);

// const userWithSameCity = ( (u,city) => u.map( u => city.includes(u.address.city) ? u : null)
//                             .filter(a => a != null));

                        
//                             const userWithSameCity1 = ( (u,city) => u.map( u => city.includes(u.address.city)? u : null)
//                                                   .filter(a=>a!=null));
      
             
//                 const usersInSameCity = userWithSameCity1(users,userOfSameCity);
//                 console.log(usersInSameCity);


// // // 9. Create a function to check if there is any invalid email in the users list. (use regex)

// const myEmail1 = "abc123@gmail.com";
// const myEmail2 = "$@123@gmail.com";
// const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// console.log(emailPattern.test(myEmail1));
// console.log(emailPattern.test(myEmail2));

// const emailValidator = (u => u.map(u => emailPattern.test(u.email)? u.email + " --Valid " : u.email + "-- InValid ") );

// const emailList = emailValidator(users);
// console.log(emailList);

 