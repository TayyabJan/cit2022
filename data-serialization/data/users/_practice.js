// Task

const albums = require('./albums.json');
const users = require('./users.json');
const posts = require('./posts.json');
const comments = require('./comments.json');
//console.log(albums);

// 1. Create a list of albums with the following information:
//  - Album title
//  - Artist name
//  - Geo Location of the user
const list =[];

// albums.map(a => {

//     users.map(u => {
//         if (u.id === a.userId) {
//             list.push({
//                 id: a.id,
//                 title: a.title,
//                 user: u.name,
//                 geoLocation: u.address.geo.lat + ',' + u.address.geo.lng
//             });
//         }
//     })

// });
// console.log(list);




// 2. Create a list of users with the following information:
//  - User's Name and Email
//  - Title & Body of the post
//  - All the comments on the post



const list2 = [];
const userPostComments = [];
posts.map( p => {

    users.map (u =>{
        if (u.id == p.userId)
        {
            comments.map( c => {
               if (c.postId == p.id)
                {
                    
                    userPostComments.push({
                        id: c.id,
                        comment: c.name,
                        commentEmail: c.email,
                        commentBody: c.body
                    });
                }
            })

            list2.push({
                UserName: u.name,
                Email: u.email,
                PostTitle: p.title,
                PostBody: p.body,
                Comments: userPostComments

            });
        }
    })
});

console.log("wELCOME");
console.log(list2[0]);


 


